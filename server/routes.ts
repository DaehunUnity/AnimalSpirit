import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResultSchema, type QuizAnswer } from "@shared/schema";
import { z } from "zod";

const calculateAnimalMatch = z.object({
  answers: z.array(z.object({
    questionId: z.string(),
    optionIndex: z.number()
  }))
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
        const question = questions.find(q => q.id === answer.questionId);
        if (!question || !question.options[answer.optionIndex]) continue;
        
        const selectedOption = question.options[answer.optionIndex] as any;
        const traits = selectedOption.traits || {};
        
        for (const [trait, score] of Object.entries(traits)) {
          traitScores[trait] = (traitScores[trait] || 0) + (score as number);
        }
      }
      
      // Find best matching animal
      let bestMatch = animals[0];
      let bestScore = 0;
      
      for (const animal of animals) {
        let score = 0;
        const animalTraits = animal.traits as Record<string, number>;
        
        for (const [trait, userScore] of Object.entries(traitScores)) {
          const animalScore = animalTraits[trait] || 0;
          // Higher similarity between user and animal trait = higher score
          score += Math.max(0, 100 - Math.abs(userScore * 10 - animalScore));
        }
        
        if (score > bestScore) {
          bestScore = score;
          bestMatch = animal;
        }
      }
      
      // Store the result
      const quizResult = await storage.createQuizResult({
        animalId: bestMatch.id,
        answers: answers.map(a => a.optionIndex)
      });
      
      res.json({ 
        animal: bestMatch, 
        resultId: quizResult.id,
        matchScore: Math.round(bestScore / answers.length)
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
        const animal = animals.find(a => a.id === animalId);
        return {
          animal: animal?.name || "Unknown",
          count,
          percentage: 0 // Will be calculated on frontend
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
