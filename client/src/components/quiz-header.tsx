import { Heart, Menu } from "lucide-react";
import LanguageSelector from "@/components/language-selector";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Link } from "wouter";
import { useState } from "react";

export default function QuizHeader() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-coral to-teal rounded-lg flex items-center justify-center">
                <Heart className="text-white text-xl" />
              </div>
              <h1 className="text-xl font-poppins font-bold text-dark-blue">{t.appTitle}</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            <nav className="flex items-center space-x-3">
              <Link href="/about">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer text-sm">
                  {language === "ko" ? "소개" : "About"}
                </span>
              </Link>
              <Link href="/careers">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer text-sm">
                  {language === "ko" ? "직업" : "Career"}
                </span>
              </Link>
              <Link href="/science">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer text-sm">
                  {language === "ko" ? "과학" : "Science"}
                </span>
              </Link>
              <Link href="/faq">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer text-sm">
                  FAQ
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer text-sm">
                  {language === "ko" ? "문의" : "Contact"}
                </span>
              </Link>
            </nav>
            <div className="hidden 2xl:flex items-center">
              <span className="text-xs text-gray-text">{language === 'ko' ? '14만+' : 'Over'} <span className="font-semibold text-coral">142k</span> {language === 'ko' ? '참여' : 'users'}</span>
            </div>
            <LanguageSelector />
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-text hover:text-dark-blue"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link href="/about">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer">
                  {language === "ko" ? "소개" : "About"}
                </span>
              </Link>
              <Link href="/careers">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer">
                  {language === "ko" ? "직업 가이드" : "Careers"}
                </span>
              </Link>
              <Link href="/science">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer">
                  {language === "ko" ? "과학적 근거" : "Science"}
                </span>
              </Link>
              <Link href="/faq">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer">
                  {language === "ko" ? "FAQ" : "FAQ"}
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-text hover:text-dark-blue transition-colors cursor-pointer">
                  {language === "ko" ? "문의" : "Contact"}
                </span>
              </Link>
              <div className="pt-2">
                <span className="text-sm text-gray-text">{language === 'ko' ? '14만+ 명 참여' : 'Over 142k users'}</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
