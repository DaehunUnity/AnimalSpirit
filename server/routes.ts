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

      for (const answer of answers) {
        const question = questions.find((q) => q.id === answer.questionId);
        if (!question || !(question.options as any[])[answer.optionIndex])
          continue;

        const selectedOption = (question.options as any[])[answer.optionIndex];
        const traits = selectedOption.traits || {};

        for (const [trait, score] of Object.entries(traits)) {
          traitScores[trait] = (traitScores[trait] || 0) + (score as number);
        }
      }

      // Calculate similarity scores for all animals
      const animalScores = animals.map(animal => {
        let totalSimilarity = 0;
        const animalTraits = animal.traits as Record<string, number>;
        
        // Calculate similarity for each trait the user has
        for (const [trait, userScore] of Object.entries(traitScores)) {
          const animalScore = animalTraits[trait] || 0;
          
          // Calculate similarity as inverse of normalized difference
          // Both scores should be in similar range (0-30 typically)
          const difference = Math.abs(userScore - animalScore);
          const maxPossible = Math.max(userScore, animalScore, 20); // Minimum baseline
          const similarity = Math.max(0, maxPossible - difference);
          
          totalSimilarity += similarity;
        }

        return {
          animal,
          rawScore: totalSimilarity,
        };
      }).sort((a, b) => b.rawScore - a.rawScore);

      // Normalize scores to percentages that add up to 100%
      const totalScore = animalScores.reduce((sum, item) => sum + Math.max(item.rawScore, 1), 0);
      
      const normalizedScores = animalScores.map(item => ({
        ...item,
        percentage: Math.round((Math.max(item.rawScore, 1) / totalScore) * 100)
      }));

      // Ensure percentages add up to 100% by adjusting the highest score
      const currentTotal = normalizedScores.reduce((sum, item) => sum + item.percentage, 0);
      if (currentTotal !== 100) {
        normalizedScores[0].percentage += (100 - currentTotal);
      }

      // Get top 3 animals
      const topAnimals = normalizedScores.slice(0, 3);
      const bestMatch = topAnimals[0];

      // Store the result
      const quizResult = await storage.createQuizResult({
        animalId: bestMatch.animal.id,
        answers: answers.map((a) => a.optionIndex),
      });

      // Calculate a realistic match score (70-95% range)
      const matchScore = Math.max(70, Math.min(95, bestMatch.percentage + Math.floor(Math.random() * 10)));

      res.json({
        animal: bestMatch.animal,
        resultId: quizResult.id,
        matchScore,
        breakdown: topAnimals.map(item => ({
          animal: {
            id: item.animal.id,
            name: item.animal.name
          },
          percentage: item.percentage
        }))
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
