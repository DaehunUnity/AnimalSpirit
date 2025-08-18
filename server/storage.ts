import { randomUUID } from "crypto";
import {
  type Animal,
  type InsertAnimal,
  type InsertQuestion,
  type InsertQuizResult,
  type Question,
  type QuizResult,
} from "../shared/schema";

export interface IStorage {
  // Questions
  getQuestions(): Promise<Question[]>;
  createQuestion(question: InsertQuestion): Promise<Question>;

  // Animals
  getAnimals(): Promise<Animal[]>;
  getAnimal(id: string): Promise<Animal | undefined>;
  createAnimal(animal: InsertAnimal): Promise<Animal>;

  // Quiz Results
  createQuizResult(result: InsertQuizResult): Promise<QuizResult>;
  getPopularAnimals(): Promise<{ animalId: string; count: number }[]>;
}

export class MemStorage implements IStorage {
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
        traits: { leadership: 95, confidence: 92, social: 85, strength: 90 },
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
        traits: { social: 95, empathy: 92, adaptability: 88, joy: 90 },
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
        traits: { wisdom: 95, intelligence: 92, introversion: 85, insight: 90 },
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
          intelligence: 92,
          creativity: 90,
          adaptability: 95,
          strategy: 88,
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
          ambition: 95,
          independence: 90,
          vision: 92,
          determination: 88,
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
        traits: { harmony: 95, empathy: 88, calm: 92, balance: 90 },
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
          intuition: 90,
          selectivity: 88,
          confidence: 85,
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
        traits: { loyalty: 95, protection: 92, teamwork: 88, devotion: 90 },
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

  async createQuestion(question: InsertQuestion): Promise<Question> {
    const id = randomUUID();
    const newQuestion: Question = { ...question, id };
    this.questions.set(id, newQuestion);
    return newQuestion;
  }

  async getAnimals(): Promise<Animal[]> {
    return Array.from(this.animals.values());
  }

  async getAnimal(id: string): Promise<Animal | undefined> {
    return this.animals.get(id);
  }

  async createAnimal(animal: InsertAnimal): Promise<Animal> {
    const id = randomUUID();
    const newAnimal: Animal = { ...animal, id };
    this.animals.set(id, newAnimal);
    return newAnimal;
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

    for (const result of this.quizResults.values()) {
      const current = counts.get(result.animalId) || 0;
      counts.set(result.animalId, current + 1);
    }

    return Array.from(counts.entries())
      .map(([animalId, count]) => ({ animalId, count }))
      .sort((a, b) => b.count - a.count);
  }
}

export const storage = new MemStorage();
