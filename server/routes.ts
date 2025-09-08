import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";

const calculateAnimalMatch = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      optionIndex: z.number(),
    })
  ),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all quiz questions
  app.get("/api/questions", async (req, res) => {
    try {
      const questions = await storage.getQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch questions" });
    }
  });

  // Get all animals
  app.get("/api/animals", async (req, res) => {
    try {
      const animals = await storage.getAnimals();
      res.json(animals);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch animals" });
    }
  });

  // Get specific animal
  app.get("/api/animals/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const animal = await storage.getAnimal(id);

      if (!animal) {
        return res.status(404).json({ message: "Animal not found" });
      }

      res.json(animal);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch animal" });
    }
  });

  // Calculate animal match based on quiz answers
  app.post("/api/calculate-match", async (req, res) => {
    try {
      const { answers } = calculateAnimalMatch.parse(req.body);

      const questions = await storage.getQuestions();
      const animals = await storage.getAnimals();

      // Calculate trait scores based on answers
      const traitScores: Record<string, number> = {};

      console.log('Processing answers:', answers.length);
      for (const answer of answers) {
        const question = questions.find((q) => q.id === answer.questionId);
        if (!question || !(question.options as any[])[answer.optionIndex])
          continue;

        const selectedOption = (question.options as any[])[answer.optionIndex];
        const traits = selectedOption.traits || {};
        
        console.log(`Q${question.order}: Option ${answer.optionIndex} - "${selectedOption.text}" ->`, traits);

        for (const [trait, score] of Object.entries(traits)) {
          traitScores[trait] = (traitScores[trait] || 0) + (score as number);
        }
      }
      
      console.log('Final trait scores:', traitScores);

      // Calculate compatibility scores for all animals
      const animalScores = animals.map(animal => {
        let score = 0;
        const animalTraits = animal.traits as Record<string, number>;
        const calculations = [];
        
        // For each user trait, check how well it matches the animal
        for (const [trait, userScore] of Object.entries(traitScores)) {
          const animalScore = animalTraits[trait] || 0;
          
          // Simple similarity: closer scores = higher similarity (0-100 scale)
          const difference = Math.abs(userScore - animalScore);
          const similarity = Math.max(0, 100 - (difference * 3)); // Scale difference
          score += similarity;
          
          calculations.push(`${trait}: user=${userScore} vs animal=${animalScore} -> similarity=${similarity}`);
        }

        console.log(`${animal.name} calculations:`, calculations);
        console.log(`${animal.name} total score:`, score);

        return {
          animal,
          score: Math.max(score, 50), // Minimum score to ensure all animals get some percentage
        };
      }).sort((a, b) => b.score - a.score);
      
      console.log('Animal scores ranking:', animalScores.map(a => `${a.animal.name}: ${a.score}`));

      const bestMatch = animalScores[0];

      // Create realistic percentage breakdown
      // Best match gets 45-70%, 2nd gets 20-35%, 3rd gets 10-25%
      const topAnimals = animalScores.slice(0, 3);
      const basePercentages = [55, 28, 17]; // Base percentages that add to 100
      
      // Add some randomness while maintaining ratios
      const randomVariation = [-5, -3, -1, 0, 1, 3, 5];
      const breakdown = topAnimals.map((item, index) => {
        const basePercentage = basePercentages[index];
        const variation = randomVariation[Math.floor(Math.random() * randomVariation.length)];
        const percentage = Math.max(10, Math.min(70, basePercentage + variation));
        
        return {
          animal: {
            id: item.animal.id,
            name: item.animal.name
          },
          percentage
        };
      });

      // Ensure percentages add up to exactly 100
      const currentTotal = breakdown.reduce((sum, item) => sum + item.percentage, 0);
      const difference = 100 - currentTotal;
      breakdown[0].percentage += difference; // Adjust the highest percentage

      // Ensure realistic bounds
      breakdown[0].percentage = Math.max(45, Math.min(70, breakdown[0].percentage));
      breakdown[1].percentage = Math.max(20, Math.min(35, breakdown[1].percentage));
      breakdown[2].percentage = Math.max(10, Math.min(25, breakdown[2].percentage));

      // Final adjustment to ensure exactly 100%
      const finalTotal = breakdown.reduce((sum, item) => sum + item.percentage, 0);
      if (finalTotal !== 100) {
        breakdown[0].percentage += (100 - finalTotal);
      }

      // Store the result
      const quizResult = await storage.createQuizResult({
        animalId: bestMatch.animal.id,
        answers: answers.map((a) => a.optionIndex),
      });

      // Match score should be exactly the same as the breakdown percentage for consistency
      const matchScore = breakdown[0].percentage;

      console.log('Calculation result:', {
        bestAnimal: bestMatch.animal.name,
        matchScore,
        breakdown: breakdown.map(b => `${b.animal.name}: ${b.percentage}%`)
      });

      res.json({
        animal: bestMatch.animal,
        resultId: quizResult.id,
        matchScore,
        breakdown
      });
    } catch (error) {
      console.error("Error calculating match:", error);
      res.status(500).json({ message: "Failed to calculate animal match" });
    }
  });

  // Get popular animals statistics
  app.get("/api/stats/popular", async (req, res) => {
    try {
      const popularAnimals = await storage.getPopularAnimals();
      const animals = await storage.getAnimals();

      const stats = popularAnimals.map(({ animalId, count }) => {
        const animal = animals.find((a) => a.id === animalId);
        return {
          animal: animal?.name || "Unknown",
          count,
          percentage: 0, // Will be calculated on frontend
        };
      });

      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch statistics" });
    }
  });


  const httpServer = createServer(app);
  return httpServer;
}
