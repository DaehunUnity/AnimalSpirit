import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Clock, Heart, Play, Share } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Quiz from "./quiz";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    console.log('Starting quiz');
    setShowQuiz(true);
  };

  const handleRestartQuiz = () => {
    console.log('Restarting quiz from home');
    setShowQuiz(false);
  };

  if (showQuiz) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Quiz onRestartQuiz={handleRestartQuiz} />
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <section className="text-center mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
            alt="Various animals together in harmony"
            className="rounded-xl w-full h-64 object-cover mb-8"
          />

          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-blue mb-4">
            {language === "ko" ? (
              <>
                어떤 동물과 <span className="text-coral">가장 닮았나요?</span>
              </>
            ) : (
              <>
                What animal are you{" "}
                <span className="text-coral">most like?</span>
              </>
            )}
          </h2>
          <p className="text-lg text-gray-text mb-8 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral to-pink rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="text-white text-2xl" />
              </div>
              <p className="text-sm font-medium text-dark-blue">{t.minutes}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-mint to-golden rounded-full flex items-center justify-center mx-auto mb-2">
                <Share className="text-white text-2xl" />
              </div>
              <p className="text-sm font-medium text-dark-blue">
                {t.easySharing}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-golden to-coral rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="text-white text-2xl" />
              </div>
              <p className="text-sm font-medium text-dark-blue">{t.freeTest}</p>
            </div>
          </div>

          <Button
            onClick={handleStartQuiz}
            className="bg-gradient-to-r from-coral to-teal text-white font-poppins font-semibold text-lg px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            {t.startTest}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-12 mt-16 rounded-2xl">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-coral to-teal rounded-lg flex items-center justify-center">
                  <Heart className="text-white h-4 w-4" />
                </div>
                <span className="font-poppins font-bold text-lg">
                  {t.appTitle}
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                {language === "ko"
                  ? "재미있고 정확한 성격 테스트로 당신의 정신적 동물을 발견하세요. 결과를 공유하고 동물 성격을 통해 친구들과 소통하세요."
                  : "Discover your spirit animal with our fun and accurate personality test. Share your results and connect with friends through animal personalities."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-4">{language === "ko" ? "주요 페이지" : "Main Pages"}</h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>
                    <Link href="/about">
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {language === "ko" ? "서비스 소개" : "About Us"}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/careers">
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {language === "ko" ? "직업 가이드" : "Career Guide"}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/science">
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {language === "ko" ? "과학적 근거" : "Scientific Basis"}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/faq">
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {language === "ko" ? "자주 묻는 질문" : "FAQ"}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">{language === "ko" ? "법적 정보" : "Legal Info"}</h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>
                    <Link href="/privacy-policy">
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {language === "ko" ? "개인정보 처리방침" : "Privacy Policy"}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/terms-of-service">
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {language === "ko" ? "이용약관" : "Terms of Service"}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact">
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {language === "ko" ? "문의하기" : "Contact"}
                      </span>
                    </Link>
                  </div>
                  <p className="pt-2">📧 kimtrue38@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 mt-8 text-center text-sm text-gray-300">
            <p>
              &copy; 2025 {t.appTitle}.{" "}
              {language === "ko" ? "모든 권리 보유." : "All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
