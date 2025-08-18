import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import type { Question, QuizOption } from "@shared/schema";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOption: number | null;
  onOptionSelect: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onOptionSelect,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious
}: QuestionCardProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  // Get localized question and options
  const questionKey = `q${questionNumber}` as keyof typeof t.questions;
  const localizedQuestion = t.questions[questionKey];
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-golden to-coral rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="text-white text-3xl" />
        </div>
        <h3 className="text-2xl font-poppins font-bold text-dark-blue mb-4">
          {localizedQuestion?.question || question.question}
        </h3>
      </div>

      <div className="space-y-4">
        {(question.options as QuizOption[]).map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-300 ${
              selectedOption === index
                ? 'border-coral bg-coral bg-opacity-5'
                : 'border-gray-200 hover:border-coral hover:bg-coral hover:bg-opacity-5'
            }`}
            onClick={() => onOptionSelect(index)}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 border-2 rounded-full mr-4 flex-shrink-0 ${
                selectedOption === index
                  ? 'bg-coral border-coral'
                  : 'border-gray-300'
              }`} />
              <span className="font-medium text-dark-blue">
                {localizedQuestion?.options[index] || option.text}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="px-6 py-3"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t.previous}
        </Button>
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className="px-6 py-3 bg-gradient-to-r from-coral to-teal hover:shadow-lg"
        >
          {questionNumber === totalQuestions ? t.seeResults : t.next}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
