import type { Question, QuizAnswer, Animal } from "@shared/schema";

export function calculateAnimalMatch(answers: QuizAnswer[], questions: Question[], animals: Animal[]): Animal {
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
  
  return bestMatch;
}

export function validateQuizAnswers(answers: QuizAnswer[], totalQuestions: number): boolean {
  return answers.length === totalQuestions && answers.every(answer => 
    answer.questionId && typeof answer.optionIndex === 'number' && answer.optionIndex >= 0
  );
}
