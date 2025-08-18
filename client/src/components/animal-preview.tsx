import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import type { Animal } from "@shared/schema";

interface AnimalPreviewProps {
  animals: Animal[];
}

export default function AnimalPreview({ animals }: AnimalPreviewProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h4 className="text-2xl font-poppins font-bold text-dark-blue mb-6 text-center">
        {language === 'ko' ? '다른 동물 성격들이 궁금하신가요?' : 'Curious about other animal personalities?'}
      </h4>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {animals.slice(0, 8).map((animal) => (
          <div 
            key={animal.id}
            className="text-center p-4 border border-gray-200 rounded-xl hover:border-coral hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gray-100 flex items-center justify-center text-2xl">
              {animal.name === 'Lion' && '🦁'}
              {animal.name === 'Dolphin' && '🐬'}
              {animal.name === 'Owl' && '🦉'}
              {animal.name === 'Fox' && '🦊'}
              {animal.name === 'Eagle' && '🦅'}
              {animal.name === 'Panda' && '🐼'}
              {animal.name === 'Cat' && '🐱'}
              {animal.name === 'Wolf' && '🐺'}
            </div>
            <h5 className="font-semibold text-dark-blue mb-1">
              {language === 'ko' ? t.animals[animal.name.toLowerCase() as keyof typeof t.animals]?.name || animal.name : animal.name}
            </h5>
            <p className="text-xs text-gray-text">
              {language === 'ko' ? t.animals[animal.name.toLowerCase() as keyof typeof t.animals]?.subtitle || animal.subtitle : animal.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
