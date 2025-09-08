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

      // Calculate scores for all animals
      const animalScores = animals.map(animal => {
        let score = 0;
        let maxPossibleScore = 0;
        const animalTraits = animal.traits as Record<string, number>;
        
        // Get all unique traits from both user and animal
        const allTraits = new Set([
          ...Object.keys(traitScores),
          ...Object.keys(animalTraits)
        ]);

        for (const trait of allTraits) {
          const userScore = traitScores[trait] || 0;
          const animalScore = animalTraits[trait] || 0;
          
          // Calculate similarity (inverse of difference)
          const maxDifference = Math.max(userScore, animalScore, 30); // Normalize by max possible value
          const difference = Math.abs(userScore - animalScore);
          const similarity = Math.max(0, maxDifference - difference);
          
          score += similarity;
          maxPossibleScore += maxDifference;
        }

        return {
          animal,
          rawScore: score,
          maxScore: maxPossibleScore,
          percentage: maxPossibleScore > 0 ? Math.round((score / maxPossibleScore) * 100) : 0
        };
      }).sort((a, b) => b.rawScore - a.rawScore);

      const bestMatch = animalScores[0];

      // Normalize percentages so they add up to 100
      const totalRawScore = animalScores.reduce((sum, item) => sum + item.rawScore, 0);
      const normalizedScores = animalScores.map(item => ({
        ...item,
        normalizedPercentage: totalRawScore > 0 ? Math.round((item.rawScore / totalRawScore) * 100) : 0
      }));

      // Get top 3 animals
      const topAnimals = normalizedScores.slice(0, 3);

      // Store the result
      const quizResult = await storage.createQuizResult({
        animalId: bestMatch.animal.id,
        answers: answers.map((a) => a.optionIndex),
      });

      res.json({
        animal: bestMatch.animal,
        resultId: quizResult.id,
        matchScore: Math.max(65, Math.min(98, bestMatch.percentage)), // Ensure realistic range
        breakdown: topAnimals.map(item => ({
          animal: {
            id: item.animal.id,
            name: item.animal.name
          },
          percentage: item.normalizedPercentage
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
