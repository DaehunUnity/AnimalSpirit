import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import type { Animal } from "@shared/schema";
import { CheckCircle, RotateCcw, Trophy } from "lucide-react";
import { useLocation } from "wouter";
import ShareButtons from "./share-buttons";

interface ResultCardProps {
  animal: Animal;
  matchScore: number;
  breakdown?: {
    animal: {
      id: string;
      name: string;
    };
    percentage: number;
  }[];
  onRestartQuiz?: () => void;
}

export default function ResultCard({ animal, matchScore, breakdown, onRestartQuiz }: ResultCardProps) {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  // Temporary debug logging
  console.log('[DEBUG] ResultCard props:', {
    matchScore,
    breakdown,
    breakdownLength: breakdown?.length,
    breakdownType: typeof breakdown
  });


  // Get localized animal data
  const animalKey = animal.name.toLowerCase() as keyof typeof t.animals;
  const localizedAnimal = t.animals[animalKey];

  const handleRestartQuiz = () => {
    console.log('Restart quiz clicked, navigating to home');
    if (onRestartQuiz) {
      onRestartQuiz();
    } else {
      setLocation("/");
    }
  };

  return (
    <div className="text-center mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-golden to-coral rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="text-white text-4xl" />
          </div>
          <h2 className="text-3xl font-poppins font-bold text-dark-blue mb-2">
            {t.testComplete}
          </h2>
          <p className="text-gray-text">{t.perfectMatch}</p>
        </div>

        {/* Result Animal Display */}
        <div className="bg-gradient-to-r from-coral to-teal rounded-2xl p-8 text-white mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white bg-white flex items-center justify-center text-6xl">
            {animal.name === "Lion" && "🦁"}
            {animal.name === "Dolphin" && "🐬"}
            {animal.name === "Owl" && "🦉"}
            {animal.name === "Fox" && "🦊"}
            {animal.name === "Eagle" && "🦅"}
            {animal.name === "Panda" && "🐼"}
            {animal.name === "Cat" && "🐱"}
            {animal.name === "Wolf" && "🐺"}
          </div>

          <h3 className="text-4xl font-poppins font-bold mb-2">
            {localizedAnimal?.name || animal.name}
          </h3>
          <p className="text-xl opacity-90 mb-4">
            {localizedAnimal?.subtitle || animal.subtitle}
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="font-semibold">{t.matchScore}</div>
              <div className="opacity-75">{matchScore}% (Type: {typeof matchScore}, Value: {JSON.stringify(matchScore)})</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{t.personality}</div>
              <div className="opacity-75">{t.perfectFit}</div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-xl font-poppins font-semibold text-dark-blue mb-3 flex items-center">
              {t.personalityOverview}
            </h4>
            <p className="text-gray-text leading-relaxed">
              {localizedAnimal?.personality || animal.personality}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-poppins font-semibold text-dark-blue mb-3 flex items-center">
              {t.yourStrengths}
            </h4>
            <ul className="text-gray-text space-y-2">
              {(
                localizedAnimal?.strengths || (animal.strengths as string[])
              ).map((strength: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-mint mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-poppins font-semibold text-dark-blue mb-3 flex items-center">
              {t.compatibleAnimals}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(animal.compatibleAnimals as string[]).map(
                (compatibleAnimal, index) => {
                  const compatibleKey =
                    compatibleAnimal as keyof typeof t.animals;
                  const localizedCompatible = t.animals[compatibleKey];
                  return (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="capitalize cursor-pointer hover:bg-gray-200"
                      role="button"
                      tabIndex={0}
                      onClick={() => setLocation(`/result/${compatibleAnimal}`)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setLocation(`/result/${compatibleAnimal}`);
                        }
                      }}
                    >
                      {localizedCompatible?.name || compatibleAnimal}
                    </Badge>
                  );
                }
              )}
            </div>
          </div>

          {/* Personality Breakdown */}
          <div>
            <h4 className="text-xl font-poppins font-semibold text-dark-blue mb-3 flex items-center">
              🧬 {language === "ko" ? "성격 분석" : "Personality Analysis"}
            </h4>
            
            
            <div style={{color: 'red', fontSize: '12px', marginBottom: '10px'}}>
              DEBUG: breakdown={JSON.stringify(breakdown)}, isArray={Array.isArray(breakdown)}, length={breakdown?.length}
            </div>
            {true ? ( // Temporarily force to show
              <div className="space-y-3">
                {breakdown.map((item, index) => {
                  console.log(`[DEBUG] Processing breakdown item ${index}:`, item);
                  if (!item || !item.animal || !item.animal.name) {
                    console.log(`[DEBUG] Item ${index} failed validation:`, { item, hasAnimal: !!item?.animal, hasName: !!item?.animal?.name });
                    return null;
                  }
                  
                  const animalKey = item.animal.name.toLowerCase() as keyof typeof t.animals;
                  const localizedName = t.animals[animalKey]?.name || item.animal.name;
                  
                  // Get animal emoji
                  const getAnimalEmoji = (name: string) => {
                    switch (name) {
                      case "Lion": return "🦁";
                      case "Dolphin": return "🐬";
                      case "Owl": return "🦉";
                      case "Fox": return "🦊";
                      case "Eagle": return "🦅";
                      case "Panda": return "🐼";
                      case "Cat": return "🐱";
                      case "Wolf": return "🐺";
                      default: return "🐾";
                    }
                  };
                  
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 text-xl">
                          {getAnimalEmoji(item.animal.name)}
                        </div>
                        <span className="text-gray-text font-medium">{localizedName}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-coral to-teal h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${typeof item.percentage === 'number' ? Math.min(Math.max(item.percentage, 0), 100) : 0}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-dark-blue w-10 text-right">
                          {typeof item.percentage === 'number' ? item.percentage : 0}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
) : (
              <div className="text-center text-gray-500 py-4">
                <p>성격 분석 데이터를 불러오는 중...</p>
              </div>
            )}
          </div>
        </div>

        {/* Sharing Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-poppins font-semibold text-dark-blue mb-4">
            {t.shareResult}
          </h4>
          <ShareButtons animal={animal} />

          <Button
            onClick={handleRestartQuiz}
            className="mt-6 bg-gradient-to-r from-teal to-sky text-white font-poppins font-semibold px-8 py-3 rounded-full hover:shadow-lg"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {t.takeTestAgain}
          </Button>
        </div>
      </div>
    </div>
  );
}
