import AnimalPreview from "@/components/animal-preview";
import ResultCard from "@/components/result-card";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import type { Animal } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";

interface QuizResult {
  animal: Animal;
  matchScore: number;
  breakdown: {
    animal: {
      id: string;
      name: string;
    };
    percentage: number;
  }[];
}

interface ResultProps {
  animalId?: string;
  quizResult?: QuizResult;
  onRestartQuiz?: () => void;
}

export default function Result({ animalId: propAnimalId, quizResult, onRestartQuiz }: ResultProps = {}) {
  const { animalId: urlAnimalId } = useParams();
  const animalId = propAnimalId || urlAnimalId;
  const { language } = useLanguage();
  const t = useTranslation(language);

  const { data: animal, isLoading: isLoadingAnimal } = useQuery<Animal>({
    queryKey: ["/api/animals", animalId],
    enabled: !!animalId,
  });

  const { data: allAnimals, isLoading: isLoadingAnimals } = useQuery<Animal[]>({
    queryKey: ["/api/animals"],
  });

  if (isLoadingAnimal || isLoadingAnimals) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
          <p className="text-gray-text mt-4">
            {language === "ko"
              ? "결과를 불러오는 중..."
              : "Loading your results..."}
          </p>
        </div>
      </main>
    );
  }

  if (!animal) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-red-500">
            {language === "ko"
              ? "동물을 찾을 수 없습니다. 퀴즈를 다시 시도해주세요."
              : "Animal not found. Please take the quiz again."}
          </p>
        </div>
      </main>
    );
  }

  const otherAnimals = allAnimals?.filter((a) => a.id !== animal.id) || [];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <ResultCard 
        animal={animal} 
        matchScore={quizResult?.matchScore || 95} 
        breakdown={quizResult?.breakdown}
        onRestartQuiz={onRestartQuiz}
      />

      <AnimalPreview animals={otherAnimals} />
    </main>
  );
}
