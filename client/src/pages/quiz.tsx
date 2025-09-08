import ProgressBar from "@/components/progress-bar";
import QuestionCard from "@/components/question-card";
import { useLanguage } from "@/contexts/language-context";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useTranslation } from "@/lib/translations";
import type { Question, QuizAnswer } from "@shared/schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Result from "./result";

export default function Quiz() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizResult, setQuizResult] = useState<{
    animal: { id: string };
  } | null>(null);

  const { data: questions, isLoading } = useQuery<Question[]>({
    queryKey: ["/api/questions"],
  });

  const calculateMutation = useMutation({
    mutationFn: async (quizAnswers: QuizAnswer[]) => {
      const response = await apiRequest("POST", "/api/calculate-match", {
        answers: quizAnswers,
      });
      return response.json();
    },
    onSuccess: (data) => {
      setQuizResult(data);
    },
    onError: (error) => {
      toast({
        title: language === "ko" ? "오류" : "Error",
        description:
          language === "ko"
            ? "결과 계산에 실패했습니다. 다시 시도해주세요."
            : "Failed to calculate your result. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Load saved answer for current question
  useEffect(() => {
    if (questions && questions[currentQuestion]) {
      const existingAnswer = answers.find(
        (a) => a.questionId === questions[currentQuestion].id
      );
      setSelectedOption(existingAnswer ? existingAnswer.optionIndex : null);
    }
  }, [currentQuestion, answers, questions]);

  const handleOptionSelect = (optionIndex: number) => {
    if (!questions) return;

    const questionId = questions[currentQuestion].id;
    const newAnswers = answers.filter((a) => a.questionId !== questionId);
    newAnswers.push({ questionId, optionIndex });

    setAnswers(newAnswers);
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (!questions) return;

    if (currentQuestion === questions.length - 1) {
      // Submit quiz
      calculateMutation.mutate(answers);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // Show result if quiz is completed
  if (quizResult) {
    return <Result animalId={quizResult.animal.id} quizResult={quizResult} />;
  }

  if (isLoading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
          <p className="text-gray-text mt-4">{t.loadingQuestions}</p>
        </div>
      </main>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-red-500">
            {language === "ko"
              ? "퀴즈 질문을 불러올 수 없습니다. 나중에 다시 시도해주세요."
              : "Failed to load quiz questions. Please try again later."}
          </p>
        </div>
      </main>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <ProgressBar current={currentQuestion + 1} total={questions.length} />

      <QuestionCard
        question={currentQuestionData}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        onNext={handleNext}
        onPrevious={handlePrevious}
        canGoNext={selectedOption !== null && !calculateMutation.isPending}
        canGoPrevious={currentQuestion > 0}
      />

      {calculateMutation.isPending && (
        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
          <div className="animate-pulse">
            <p className="text-gray-text">{t.calculatingMatch}</p>
          </div>
        </div>
      )}
    </main>
  );
}
