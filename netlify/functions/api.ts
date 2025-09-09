import { z } from "zod";
import { storage } from "../../server/storage";

type NetlifyEvent = {
  httpMethod: string;
  path: string;
  rawUrl?: string;
  body?: string | null;
};

type NetlifyResult = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

function json(statusCode: number, data: unknown): NetlifyResult {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}

function notFound(): NetlifyResult {
  return json(404, { message: "Not Found" });
}

const calculateAnimalMatchSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      optionIndex: z.number(),
    })
  ),
});

export async function handler(event: NetlifyEvent): Promise<NetlifyResult> {
  try {
    const method = event.httpMethod.toUpperCase();

    const originalPath = event.rawUrl
      ? new URL(event.rawUrl).pathname
      : event.path;
    let path = originalPath.replace(/^\/.netlify\/functions\/api/, "");
    if (!path.startsWith("/api")) path = "/api" + path;

    if (method === "GET" && path === "/api/questions") {
      const questions = await storage.getQuestions();
      return json(200, questions);
    }

    if (method === "GET" && path === "/api/animals") {
      const animals = await storage.getAnimals();
      return json(200, animals);
    }

    const animalMatch = path.match(/^\/api\/animals\/(.+)$/);
    if (method === "GET" && animalMatch) {
      const id = decodeURIComponent(animalMatch[1]);
      const animal = await storage.getAnimal(id);
      if (!animal) return json(404, { message: "Animal not found" });
      return json(200, animal);
    }

    if (method === "POST" && path === "/api/calculate-match") {
      const parsed = calculateAnimalMatchSchema.parse(
        event.body ? JSON.parse(event.body) : {}
      );
      const { answers } = parsed;

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
        
        // For each user trait, check how well it matches the animal
        for (const [trait, userScore] of Object.entries(traitScores)) {
          const animalScore = animalTraits[trait] || 0;
          
          // Simple similarity: closer scores = higher similarity (0-100 scale)
          const difference = Math.abs(userScore - animalScore);
          const similarity = Math.max(0, 100 - (difference * 3)); // Scale difference
          totalSimilarity += similarity;
          traitCount++;
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

      // Use the highest percentage from breakdown as the match score
      // This ensures consistency between overall match and detailed analysis
      const matchScore = breakdown && breakdown.length > 0 
        ? Math.max(...breakdown.map(item => item.percentage))
        : Math.min(Math.max(Math.round(Number(bestMatch.score) || 85), 30), 100);

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
        breakdown: breakdown.map(item => ({
          animal: {
            id: String(item.animal.id),
            name: String(item.animal.name)
          },
          percentage: Number(item.percentage)
        }))
      };

      console.log('[NETLIFY DEBUG] Final response:', {
        matchScore: responseData.matchScore,
        breakdownLength: responseData.breakdown.length,
        breakdown: responseData.breakdown.map(item => ({
          animalName: item.animal.name,
          percentage: item.percentage
        }))
      });

      return json(200, responseData);
    }

    if (method === "GET" && path === "/api/stats/popular") {
      const popular = await storage.getPopularAnimals();
      const animals = await storage.getAnimals();
      const stats = popular.map(({ animalId, count }) => {
        const animal = animals.find((a) => a.id === animalId);
        return { animal: animal?.name || "Unknown", count, percentage: 0 };
      });
      return json(200, stats);
    }

    return notFound();
  } catch (error: any) {
    const message = error?.message || "Internal Server Error";
    return json(500, { message });
  }
}
