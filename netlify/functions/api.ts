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

      let bestMatch = animals[0];
      let bestScore = 0;
      for (const animal of animals) {
        let score = 0;
        const animalTraits = animal.traits as Record<string, number>;
        for (const [trait, userScore] of Object.entries(traitScores)) {
          const animalScore = animalTraits[trait] || 0;
          score += Math.max(0, 100 - Math.abs(userScore * 10 - animalScore));
        }
        if (score > bestScore) {
          bestScore = score;
          bestMatch = animal;
        }
      }

      const quizResult = await storage.createQuizResult({
        animalId: bestMatch.id,
        answers: answers.map((a) => a.optionIndex),
      });

      return json(200, {
        animal: bestMatch,
        resultId: quizResult.id,
        matchScore: Math.round(bestScore / Math.max(answers.length, 1)),
      });
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
