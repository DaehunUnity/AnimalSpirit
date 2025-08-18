import { Heart } from "lucide-react";
import LanguageSelector from "@/components/language-selector";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";

export default function QuizHeader() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-coral to-teal rounded-lg flex items-center justify-center">
              <Heart className="text-white text-xl" />
            </div>
            <h1 className="text-xl font-poppins font-bold text-dark-blue">{t.appTitle}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <span className="text-sm text-gray-text">{language === 'ko' ? '14만명 이상이' : 'Over'} <span className="font-semibold text-coral">142,543</span>{language === 'ko' ? '명이 이 테스트를 받았습니다!' : ' people have taken this test!'}</span>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
