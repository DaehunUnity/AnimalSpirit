import { pgTable, text, varchar, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const questions = pgTable("questions", {
  id: varchar("id").primaryKey(),
  question: text("question").notNull(),
  options: jsonb("options").notNull(), // Array of {text: string, traits: Record<string, number>}
  order: integer("order").notNull(),
});

export const animals = pgTable("animals", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  subtitle: text("subtitle").notNull(),
  description: text("description").notNull(),
  personality: text("personality").notNull(),
  strengths: jsonb("strengths").notNull(), // Array of strings
  compatibleAnimals: jsonb("compatible_animals").notNull(), // Array of animal IDs
  traits: jsonb("traits").notNull(), // Record<string, number>
  imageUrl: text("image_url").notNull(),
});

export const quizResults = pgTable("quiz_results", {
  id: varchar("id").primaryKey(),
  animalId: varchar("animal_id").notNull().references(() => animals.id),
  answers: jsonb("answers").notNull(), // Array of selected option indices
  createdAt: text("created_at").notNull(),
});


export const insertQuestionSchema = createInsertSchema(questions);
export const insertAnimalSchema = createInsertSchema(animals);
export const insertQuizResultSchema = createInsertSchema(quizResults).omit({ id: true, createdAt: true });

export type Question = typeof questions.$inferSelect;
export type Animal = typeof animals.$inferSelect;
export type QuizResult = typeof quizResults.$inferSelect;
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;
export type InsertAnimal = z.infer<typeof insertAnimalSchema>;
export type InsertQuizResult = z.infer<typeof insertQuizResultSchema>;

// Quiz option type
export type QuizOption = {
  text: string;
  traits: Record<string, number>;
};

// Quiz answer type
export type QuizAnswer = {
  questionId: string;
  optionIndex: number;
};
