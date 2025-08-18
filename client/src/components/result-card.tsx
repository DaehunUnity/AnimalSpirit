import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, CheckCircle, Users, RotateCcw } from "lucide-react";
import ShareButtons from "./share-buttons";
import type { Animal } from "@shared/schema";
import { useLocation } from "wouter";

interface ResultCardProps {
  animal: Animal;
  matchScore: number;
}

export default function ResultCard({ animal, matchScore }: ResultCardProps) {
  const [, setLocation] = useLocation();

  const handleRestartQuiz = () => {
    setLocation("/");
  };

  return (
    <div className="text-center mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-golden to-coral rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="text-white text-4xl" />
          </div>
          <h2 className="text-3xl font-poppins font-bold text-dark-blue mb-2">Test Complete!</h2>
          <p className="text-gray-text">We found your perfect animal match</p>
        </div>

        {/* Result Animal Display */}
        <div className="bg-gradient-to-r from-coral to-teal rounded-2xl p-8 text-white mb-8">
          <img 
            src={animal.imageUrl} 
            alt={animal.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white object-cover"
          />
          
          <h3 className="text-4xl font-poppins font-bold mb-2">{animal.name}</h3>
          <p className="text-xl opacity-90 mb-4">{animal.subtitle}</p>
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="font-semibold">Match Score</div>
              <div className="opacity-75">{matchScore}%</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">Personality</div>
              <div className="opacity-75">Perfect Fit</div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-xl font-poppins font-semibold text-dark-blue mb-3 flex items-center">
              🎯 Personality Overview
            </h4>
            <p className="text-gray-text leading-relaxed">
              {animal.personality}
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-poppins font-semibold text-dark-blue mb-3 flex items-center">
              💪 Your Strengths
            </h4>
            <ul className="text-gray-text space-y-2">
              {animal.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-mint mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-poppins font-semibold text-dark-blue mb-3 flex items-center">
              🤝 Compatible Animals
            </h4>
            <div className="flex flex-wrap gap-2">
              {(animal.compatibleAnimals as string[]).map((compatibleAnimal, index) => (
                <Badge key={index} variant="secondary" className="capitalize">
                  {compatibleAnimal}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Sharing Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-poppins font-semibold text-dark-blue mb-4">Share your result with friends!</h4>
          <ShareButtons animal={animal} />
          
          <Button 
            onClick={handleRestartQuiz}
            className="mt-6 bg-gradient-to-r from-teal to-sky text-white font-poppins font-semibold px-8 py-3 rounded-full hover:shadow-lg"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Take Test Again
          </Button>
        </div>
      </div>
    </div>
  );
}
