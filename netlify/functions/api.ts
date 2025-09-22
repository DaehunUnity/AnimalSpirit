import { z } from "zod";
import { randomUUID } from "crypto";
import {
  type Animal,
  type InsertQuizResult,
  type Question,
  type QuizResult,
} from "../../shared/schema";

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

// Embedded storage implementation for Netlify Functions
class MemStorage {
  private questions: Map<string, Question>;
  private animals: Map<string, Animal>;
  private quizResults: Map<string, QuizResult>;

  constructor() {
    this.questions = new Map();
    this.animals = new Map();
    this.quizResults = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize quiz questions
    const questionsData: Omit<Question, "id">[] = [
      {
        question: "When you're at a social gathering, you typically:",
        options: [
          {
            text: "Take charge and lead conversations",
            traits: { leadership: 3, confidence: 3, social: 2 },
          },
          {
            text: "Naturally participate and enjoy the company",
            traits: { social: 3, adaptability: 2, empathy: 2 },
          },
          {
            text: "Listen carefully and contribute thoughtfully",
            traits: { wisdom: 3, empathy: 2, introversion: 2 },
          },
          {
            text: "Prefer to observe from the sidelines",
            traits: { introversion: 3, independence: 2, caution: 2 },
          },
        ],
        order: 1,
      },
      {
        question: "When faced with a new challenge, your first instinct is to:",
        options: [
          {
            text: "Jump right in and figure it out as you go",
            traits: { adventure: 3, confidence: 2, impulsiveness: 2 },
          },
          {
            text: "Carefully plan your approach step by step",
            traits: { wisdom: 3, caution: 2, strategy: 3 },
          },
          {
            text: "Seek advice from others before proceeding",
            traits: { collaboration: 3, empathy: 2, humility: 2 },
          },
          {
            text: "Consider all possible risks first",
            traits: { caution: 3, wisdom: 2, introversion: 1 },
          },
        ],
        order: 2,
      },
      {
        question: "Your ideal way to spend a weekend is:",
        options: [
          {
            text: "Leading an outdoor adventure with friends",
            traits: { leadership: 2, adventure: 3, social: 2 },
          },
          {
            text: "Exploring a new place or trying new activities",
            traits: { adventure: 3, curiosity: 3, adaptability: 2 },
          },
          {
            text: "Reading a good book or learning something new",
            traits: { wisdom: 3, introversion: 2, curiosity: 2 },
          },
          {
            text: "Relaxing at home in your own space",
            traits: { introversion: 3, independence: 2, comfort: 2 },
          },
        ],
        order: 3,
      },
      {
        question: "When working in a team, you usually:",
        options: [
          {
            text: "Take the lead and delegate tasks",
            traits: { leadership: 3, confidence: 2, strategy: 2 },
          },
          {
            text: "Bring creative ideas and keep everyone motivated",
            traits: { creativity: 3, social: 2, optimism: 2 },
          },
          {
            text: "Provide thoughtful analysis and solutions",
            traits: { wisdom: 3, strategy: 2, introversion: 1 },
          },
          {
            text: "Work independently on your assigned part",
            traits: { independence: 3, introversion: 2, focus: 2 },
          },
        ],
        order: 4,
      },
      {
        question: "How do you handle stress and pressure?",
        options: [
          {
            text: "Face it head-on with determination",
            traits: { confidence: 3, leadership: 2, strength: 2 },
          },
          {
            text: "Stay flexible and adapt to the situation",
            traits: { adaptability: 3, optimism: 2, resilience: 2 },
          },
          {
            text: "Think through the problem systematically",
            traits: { wisdom: 3, strategy: 2, patience: 2 },
          },
          {
            text: "Take time alone to process and recharge",
            traits: { introversion: 3, self_care: 2, reflection: 2 },
          },
        ],
        order: 5,
      },
      {
        question: "Your approach to making important decisions is:",
        options: [
          {
            text: "Trust your instincts and decide quickly",
            traits: { confidence: 3, impulsiveness: 2, leadership: 2 },
          },
          {
            text: "Gather input from trusted friends and family",
            traits: { collaboration: 3, empathy: 2, humility: 2 },
          },
          {
            text: "Research thoroughly and weigh all options",
            traits: { wisdom: 3, caution: 2, strategy: 3 },
          },
          {
            text: "Go with what feels right emotionally",
            traits: { intuition: 3, empathy: 2, sensitivity: 2 },
          },
        ],
        order: 6,
      },
      {
        question: "In conflict situations, you tend to:",
        options: [
          {
            text: "Confront the issue directly and assertively",
            traits: { confidence: 3, leadership: 2, directness: 3 },
          },
          {
            text: "Try to find a compromise that works for everyone",
            traits: { empathy: 3, collaboration: 2, harmony: 2 },
          },
          {
            text: "Step back and analyze the situation objectively",
            traits: { wisdom: 3, caution: 2, objectivity: 2 },
          },
          {
            text: "Avoid confrontation when possible",
            traits: { harmony: 2, introversion: 2, sensitivity: 2 },
          },
        ],
        order: 7,
      },
      {
        question: "What motivates you most in life?",
        options: [
          {
            text: "Achieving greatness and being recognized",
            traits: { ambition: 3, confidence: 2, leadership: 2 },
          },
          {
            text: "Having meaningful connections with others",
            traits: { empathy: 3, social: 2, love: 3 },
          },
          {
            text: "Continuously learning and growing",
            traits: { curiosity: 3, wisdom: 2, growth: 3 },
          },
          {
            text: "Finding peace and personal fulfillment",
            traits: { harmony: 3, introversion: 2, contentment: 2 },
          },
        ],
        order: 8,
      },
      {
        question: "Your communication style is typically:",
        options: [
          {
            text: "Direct, clear, and commanding",
            traits: { leadership: 3, confidence: 2, directness: 3 },
          },
          {
            text: "Warm, expressive, and engaging",
            traits: { social: 3, empathy: 2, charisma: 2 },
          },
          {
            text: "Thoughtful, precise, and informative",
            traits: { wisdom: 3, communication: 2, clarity: 2 },
          },
          {
            text: "Gentle, considerate, and diplomatic",
            traits: { empathy: 3, harmony: 2, sensitivity: 2 },
          },
        ],
        order: 9,
      },
      {
        question: "When you think about your ideal environment, it's:",
        options: [
          {
            text: "Dynamic and challenging with opportunities to lead",
            traits: { leadership: 3, ambition: 2, energy: 2 },
          },
          {
            text: "Social and collaborative with lots of interaction",
            traits: { social: 3, collaboration: 2, energy: 2 },
          },
          {
            text: "Quiet and organized where you can focus deeply",
            traits: { introversion: 3, focus: 2, order: 2 },
          },
          {
            text: "Peaceful and natural where you can be yourself",
            traits: { harmony: 3, nature: 2, authenticity: 2 },
          },
        ],
        order: 10,
      },
    ];

    questionsData.forEach((q, index) => {
      const id = `q${index + 1}`;
      this.questions.set(id, { ...q, id });
    });

    // Initialize animal personalities
    const animalsData: Omit<Animal, "id">[] = [
      {
        name: "Lion",
        subtitle: "The Natural Born Leader",
        description:
          "You are a natural leader with incredible confidence and charisma. Like a lion, you command respect and aren't afraid to take charge in any situation.",
        personality:
          "You possess natural leadership qualities that others find inspiring. Your confidence is infectious, and you have the courage to make tough decisions when others hesitate. You're protective of those you care about and take responsibility seriously. While you can be bold and assertive, you also know when to show compassion and wisdom.",
        strengths: [
          "Strong leadership and natural charisma",
          "Confident decision-making abilities",
          "Protective and loyal to loved ones",
          "Courageous in facing challenges",
        ],
        compatibleAnimals: ["eagle", "dolphin", "wolf"],
        traits: { leadership: 95, confidence: 92, social: 85, ambition: 90, energy: 80, directness: 85 },
        imageUrl:
          "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
      {
        name: "Dolphin",
        subtitle: "The Joyful Connector",
        description:
          "You bring joy and harmony wherever you go. Like a dolphin, you're intelligent, social, and have an amazing ability to connect with others on a deep level.",
        personality:
          "Your warm and friendly nature makes you a natural people person. You have high emotional intelligence and can read social situations expertly. You love bringing people together and creating positive experiences for everyone around you. Your playful spirit and optimism are contagious, making others feel uplifted in your presence.",
        strengths: [
          "Exceptional emotional intelligence",
          "Natural ability to build connections",
          "Optimistic and uplifting personality",
          "Great team player and collaborator",
        ],
        compatibleAnimals: ["lion", "fox", "panda"],
        traits: { social: 95, empathy: 92, adaptability: 88, collaboration: 85, optimism: 90, energy: 88 },
        imageUrl:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
      {
        name: "Owl",
        subtitle: "The Wise Observer",
        description:
          "You possess deep wisdom and analytical thinking. Like an owl, you see what others miss and provide invaluable insights with your thoughtful perspective.",
        personality:
          "You are naturally observant and thoughtful, preferring to analyze situations carefully before acting. Your wisdom comes from your ability to see patterns and connections that others overlook. You value knowledge and continuous learning, often becoming the go-to person for advice and insights. While you may be quieter than others, your contributions are always meaningful and well-considered.",
        strengths: [
          "Deep analytical and critical thinking",
          "Excellent problem-solving abilities",
          "Wise and thoughtful decision-making",
          "Great listener and advisor",
        ],
        compatibleAnimals: ["fox", "cat", "panda"],
        traits: { wisdom: 95, strategy: 88, introversion: 85, caution: 90, clarity: 85, communication: 80 },
        imageUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
      {
        name: "Fox",
        subtitle: "The Clever Strategist",
        description:
          "You're incredibly clever and adaptable. Like a fox, you can navigate complex situations with intelligence and creativity, always finding innovative solutions.",
        personality:
          "Your intelligence is matched by your creativity and adaptability. You excel at thinking outside the box and finding clever solutions to complex problems. You're naturally curious and love learning new things, which makes you incredibly versatile. Your wit and charm help you navigate social situations effortlessly, and you have a talent for seeing opportunities others miss.",
        strengths: [
          "Highly intelligent and creative",
          "Excellent adaptability and flexibility",
          "Strategic thinking and planning",
          "Charming and persuasive communication",
        ],
        compatibleAnimals: ["owl", "dolphin", "eagle"],
        traits: {
          adaptability: 95,
          strategy: 92,
          wisdom: 88,
          confidence: 80,
          social: 75,
          leadership: 70,
        },
        imageUrl:
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
      {
        name: "Eagle",
        subtitle: "The Visionary Achiever",
        description:
          "You soar above challenges with determination and vision. Like an eagle, you have ambitious goals and the focus to achieve greatness.",
        personality:
          "You have a natural ability to see the big picture and set ambitious goals. Your determination and focus are unmatched when you set your mind to something. You value independence and prefer to chart your own course rather than follow others. Your high standards push you to excel, and you're not afraid to take calculated risks to achieve your vision.",
        strengths: [
          "Strong vision and goal-setting ability",
          "Exceptional focus and determination",
          "Independent and self-motivated",
          "High achiever with ambitious goals",
        ],
        compatibleAnimals: ["lion", "fox", "wolf"],
        traits: {
          independence: 95,
          leadership: 90,
          confidence: 92,
          ambition: 85,
          strategy: 80,
          energy: 88,
        },
        imageUrl:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
      {
        name: "Panda",
        subtitle: "The Peaceful Harmonizer",
        description:
          "You bring calm and balance to every situation. Like a panda, you value peace, harmony, and taking life at your own gentle pace.",
        personality:
          "You have a naturally calming presence that puts others at ease. You value harmony and prefer to avoid conflict, instead choosing to find peaceful solutions to problems. Your gentle nature doesn't mean you're weak - you have quiet strength and unwavering principles. You appreciate the simple pleasures in life and believe in the importance of balance and self-care.",
        strengths: [
          "Natural peacemaker and mediator",
          "Calm and balanced approach to life",
          "Strong moral compass and principles",
          "Excellent at stress management",
        ],
        compatibleAnimals: ["owl", "dolphin", "cat"],
        traits: { harmony: 95, empathy: 88, introversion: 85, contentment: 90, sensitivity: 80, comfort: 85 },
        imageUrl:
          "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
      {
        name: "Cat",
        subtitle: "The Independent Artist",
        description:
          "You value independence and have a unique perspective on life. Like a cat, you're selective with your energy and prefer quality over quantity in all things.",
        personality:
          "You are fiercely independent and value your autonomy above all else. You have a refined taste and appreciation for beauty and quality. While you can be social when you choose to be, you're selective about who you let into your inner circle. You have strong intuition and trust your instincts. Your mysterious and confident nature draws others to you, even when you're not trying to attract attention.",
        strengths: [
          "Strong independence and self-reliance",
          "Excellent intuition and instincts",
          "Refined taste and appreciation for quality",
          "Confident and mysterious charm",
        ],
        compatibleAnimals: ["owl", "fox", "panda"],
        traits: {
          independence: 95,
          confidence: 85,
          introversion: 80,
          sensitivity: 75,
          comfort: 88,
          wisdom: 70,
        },
        imageUrl:
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
      {
        name: "Wolf",
        subtitle: "The Loyal Guardian",
        description:
          "You're deeply loyal and protective of your pack. Like a wolf, you value family bonds and will go to great lengths to protect those you love.",
        personality:
          "You are intensely loyal and form deep, lasting relationships with those you care about. You have strong protective instincts and will defend your loved ones fiercely. While you can be independent, you also understand the power of working together toward common goals. You value trust and authenticity, and once someone earns your respect, you'll stand by them through anything.",
        strengths: [
          "Unwavering loyalty and devotion",
          "Strong protective instincts",
          "Excellent teamwork and collaboration",
          "Deep capacity for meaningful relationships",
        ],
        compatibleAnimals: ["lion", "eagle", "dolphin"],
        traits: { collaboration: 95, empathy: 90, harmony: 88, social: 75, introversion: 70, resilience: 85 },
        imageUrl:
          "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      },
    ];

    animalsData.forEach((animal, index) => {
      const id = animal.name.toLowerCase();
      this.animals.set(id, { ...animal, id });
    });
  }

  async getQuestions(): Promise<Question[]> {
    return Array.from(this.questions.values()).sort(
      (a, b) => a.order - b.order
    );
  }

  async getAnimals(): Promise<Animal[]> {
    return Array.from(this.animals.values());
  }

  async getAnimal(id: string): Promise<Animal | undefined> {
    return this.animals.get(id);
  }

  async createQuizResult(result: InsertQuizResult): Promise<QuizResult> {
    const id = randomUUID();
    const newResult: QuizResult = {
      ...result,
      id,
      createdAt: new Date().toISOString(),
    };
    this.quizResults.set(id, newResult);
    return newResult;
  }

  async getPopularAnimals(): Promise<{ animalId: string; count: number }[]> {
    const counts = new Map<string, number>();

    for (const result of Array.from(this.quizResults.values())) {
      const current = counts.get(result.animalId) || 0;
      counts.set(result.animalId, current + 1);
    }

    return Array.from(counts.entries())
      .map(([animalId, count]) => ({ animalId, count }))
      .sort((a, b) => b.count - a.count);
  }
}

const storage = new MemStorage();
