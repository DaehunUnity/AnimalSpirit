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

      // Create percentage breakdown with normalized distribution
      const topAnimals = animalScores.slice(0, 3);
      
      // Normalize scores to ensure they sum to 100%
      const totalScore = topAnimals.reduce((sum, item) => sum + item.score, 0);
      let breakdown;
      
      if (totalScore > 0 && topAnimals.length >= 3) {
        // Calculate percentages ensuring they sum to exactly 100%
        const rawPercentages = topAnimals.map(item => (item.score / totalScore) * 100);
        const sum = rawPercentages.reduce((a, b) => a + b, 0);
        
        // Normalize to ensure sum equals 100
        const normalizedPercentages = rawPercentages.map(p => Math.round((p / sum) * 100));
        
        // Adjust for rounding errors to ensure exact 100% total
        const currentSum = normalizedPercentages.reduce((a, b) => a + b, 0);
        if (currentSum !== 100) {
          normalizedPercentages[0] += (100 - currentSum);
        }
        
        // Ensure first place is at least 40% and no percentage exceeds 100%
        if (normalizedPercentages[0] < 40) {
          normalizedPercentages[0] = Math.min(65, normalizedPercentages[0] + (40 - normalizedPercentages[0]));
          const remaining = 100 - normalizedPercentages[0];
          normalizedPercentages[1] = Math.round(remaining * 0.6);
          normalizedPercentages[2] = remaining - normalizedPercentages[1];
        }
        
        breakdown = topAnimals.map((item, index) => ({
          animal: {
            id: String(item.animal.id || 'unknown'),
            name: String(item.animal.name || 'Unknown Animal')
          },
          percentage: Math.max(1, Math.min(100, normalizedPercentages[index] || 1))
        }));
      } else {
        // Fallback to safe fixed distribution with actual animals
        breakdown = topAnimals.map((item, index) => ({
          animal: {
            id: String(item.animal.id || 'unknown'),
            name: String(item.animal.name || 'Unknown Animal')
          },
          percentage: index === 0 ? 65 : index === 1 ? 22 : 13
        }));
      }

      // Store the result
      const quizResult = await storage.createQuizResult({
        animalId: bestMatch.animal.id,
        answers: answers.map((a) => a.optionIndex),
      });

      // Use actual calculated score, but cap it at 100% with safety checks
      const rawScore = Number(bestMatch.score) || 85;
      const matchScore = Math.min(Math.max(Math.round(rawScore), 30), 100);
      
      // Make sure the first breakdown item matches the main match score
      if (breakdown && breakdown.length > 0) {
        breakdown[0].percentage = matchScore;
        // Adjust other percentages to maintain reasonable distribution
        if (breakdown.length >= 2) {
          const remaining = 100 - matchScore;
          breakdown[1].percentage = Math.max(1, Math.floor(remaining * 0.6));
          if (breakdown.length >= 3) {
            breakdown[2].percentage = Math.max(1, remaining - breakdown[1].percentage);
          }
        }
      }
      
      // Log for Netlify debugging
      console.log('[NETLIFY DEBUG] Score calculation:', {
        rawScore,
        finalScore: matchScore,
        environment: process.env.NODE_ENV || 'unknown'
      });
      


      // Ensure breakdown is always valid before sending
      const validBreakdown = Array.isArray(breakdown) && breakdown.length > 0 ? breakdown : [
        { animal: { id: bestMatch.animal.id, name: bestMatch.animal.name }, percentage: matchScore },
        { animal: { id: 'fallback-1', name: 'Fallback' }, percentage: Math.floor((100 - matchScore) / 2) },
        { animal: { id: 'fallback-2', name: 'Fallback2' }, percentage: 100 - matchScore - Math.floor((100 - matchScore) / 2) }
      ];


      // Ensure all data is properly serializable for serverless functions
      const responseData = {
        animal: {
          id: bestMatch.animal.id,
          name: bestMatch.animal.name,
          subtitle: bestMatch.animal.subtitle,
          description: bestMatch.animal.description,
          personality: bestMatch.animal.personality,
          strengths: bestMatch.animal.strengths,
          compatibleAnimals: bestMatch.animal.compatibleAnimals,
          traits: bestMatch.animal.traits,
          imageUrl: bestMatch.animal.imageUrl
        },
        resultId: String(quizResult.id),
        matchScore: Number(matchScore),
        breakdown: validBreakdown.map(item => ({
          animal: {
            id: String(item.animal.id),
            name: String(item.animal.name)
          },
          percentage: Number(item.percentage)
        }))
      };

      // Additional safety for Netlify environment
      console.log('[NETLIFY DEBUG] Pre-send data:', {
        matchScore: responseData.matchScore,
        breakdownLength: responseData.breakdown.length,
        breakdown: responseData.breakdown
      });
      
      // Use JSON.stringify + JSON.parse to ensure clean serialization
      const cleanData = JSON.parse(JSON.stringify(responseData));
      
      // Final validation
      cleanData.matchScore = Math.min(Math.max(Number(cleanData.matchScore) || 85, 30), 100);
      cleanData.breakdown = cleanData.breakdown || [
        { animal: { id: bestMatch.animal.id, name: bestMatch.animal.name }, percentage: 60 },
        { animal: { id: 'fallback-1', name: 'Compatible' }, percentage: 25 },
        { animal: { id: 'fallback-2', name: 'Friend' }, percentage: 15 }
      ];
      
      console.log('[NETLIFY DEBUG] Final data:', {
        matchScore: cleanData.matchScore,
        breakdownLength: cleanData.breakdown.length
      });
      
      res.json(cleanData);
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
