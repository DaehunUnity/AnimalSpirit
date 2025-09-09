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
      

      // Calculate compatibility scores for all animals
      const animalScores = animals.map(animal => {
        let totalSimilarity = 0;
        let traitCount = 0;
        const animalTraits = animal.traits as Record<string, number>;
        const calculations = [];
        
        // For each user trait, check how well it matches the animal
        for (const [trait, userScore] of Object.entries(traitScores)) {
          const animalScore = animalTraits[trait] || 0;
          
          // Simple similarity: closer scores = higher similarity (0-100 scale)
          const difference = Math.abs(userScore - animalScore);
          const similarity = Math.max(0, 100 - (difference * 3)); // Scale difference
          totalSimilarity += similarity;
          traitCount++;
          
          calculations.push(`${trait}: user=${userScore} vs animal=${animalScore} -> similarity=${similarity}`);
        }

        // Calculate average similarity (0-100 scale)
        const averageScore = traitCount > 0 ? totalSimilarity / traitCount : 50;

        return {
          animal,
          score: Math.max(averageScore, 30), // Minimum score for some variety
        };
      }).sort((a, b) => b.score - a.score);
      

      const bestMatch = animalScores[0];

      // Create percentage breakdown based on actual scores
      const topAnimals = animalScores.slice(0, 3);
      const totalScore = topAnimals.reduce((sum, item) => sum + item.score, 0);
      
      const breakdown = topAnimals.map((item) => {
        // Calculate percentage based on actual scores, but ensure reasonable distribution
        const rawPercentage = totalScore > 0 ? (item.score / totalScore) * 100 : 0;
        const percentage = Math.min(Math.max(Math.round(rawPercentage), 1), 100);
        
        return {
          animal: {
            id: item.animal.id,
            name: item.animal.name
          },
          percentage
        };
      });

      // Store the result
      const quizResult = await storage.createQuizResult({
        animalId: bestMatch.animal.id,
        answers: answers.map((a) => a.optionIndex),
      });

      // Use actual calculated score, but cap it at 100%
      const matchScore = Math.min(Math.round(bestMatch.score), 100);


      // Ensure breakdown is always valid before sending
      const validBreakdown = Array.isArray(breakdown) && breakdown.length > 0 ? breakdown : [
        { animal: { id: bestMatch.animal.id, name: bestMatch.animal.name }, percentage: matchScore },
        { animal: { id: 'fallback-1', name: 'Fallback' }, percentage: Math.floor((100 - matchScore) / 2) },
        { animal: { id: 'fallback-2', name: 'Fallback2' }, percentage: 100 - matchScore - Math.floor((100 - matchScore) / 2) }
      ];


      const responseData = {
        animal: bestMatch.animal,
        resultId: quizResult.id,
        matchScore,
        breakdown: validBreakdown
      };

      res.json(responseData);
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
