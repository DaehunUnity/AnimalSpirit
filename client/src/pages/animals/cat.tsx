import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Star, Palette, Users, Zap, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CatGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Star className="text-pink-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-pink-800">
                {t.animals.cat.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-pink-700 mb-4">
              {t.animals.cat.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.cat.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🐱</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "독립적" : "Independent",
                  language === "ko" ? "직관적" : "Intuitive", 
                  language === "ko" ? "예술적" : "Artistic",
                  language === "ko" ? "신비로운" : "Mysterious"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Personality Overview */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="text-pink-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.cat.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">개인적 자유와 독립성, 미적 감각 추구, 자기만의 공간과 시간</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">혼자만의 시간, 창작 활동, 아름다운 것들, 직관적 통찰</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">강제적인 사교 활동, 지나친 간섭, 융통성 없는 규칙</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">Personal freedom and independence, pursuing aesthetic sense, personal space and time</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Alone time, creative activities, beautiful things, intuitive insights</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Forced social activities, excessive interference, inflexible rules</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Palette className="text-pink-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 작가, 시인</li>
                    <li>• 예술가, 디자이너</li>
                    <li>• 프리랜서</li>
                    <li>• 사진작가</li>
                    <li>• 인테리어 디자이너</li>
                    <li>• 큐레이터</li>
                    <li>• 심리치료사</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 창의적이고 미적인 공간</li>
                    <li>• 유연한 근무 시간</li>
                    <li>• 개인 작업 공간 확보</li>
                    <li>• 자율성과 독립성 보장</li>
                    <li>• 질 높은 작업 환경</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Writer, Poet</li>
                    <li>• Artist, Designer</li>
                    <li>• Freelancer</li>
                    <li>• Photographer</li>
                    <li>• Interior Designer</li>
                    <li>• Curator</li>
                    <li>• Psychotherapist</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Creative and aesthetic space</li>
                    <li>• Flexible working hours</li>
                    <li>• Personal workspace secured</li>
                    <li>• Autonomy and independence guaranteed</li>
                    <li>• High-quality work environment</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="text-pink-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    고양이형은 신비롭고 매력적인 파트너가 됩니다. 깊은 감정을 가지고 있지만 
                    표현에 신중하며, 서로의 독립성을 존중하는 관계를 선호합니다. 진정한 사랑을 찾으면 매우 충실합니다.
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-pink-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">독수리 (독립성 공유), 올빼미 (깊이 있는 교감), 여우 (창의적 자극)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    선택적이고 신중한 친구 관계를 맺으며, 진정성을 중시합니다. 
                    표면적인 관계보다는 깊이 있고 의미 있는 소수의 친구를 선호합니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Cats become mysterious and attractive partners. They have deep emotions but are careful in expression, 
                    preferring relationships that respect each other's independence. They are very faithful when they find true love.
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-pink-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Eagle (shared independence), Owl (deep connection), Fox (creative stimulation)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They form selective and careful friendships, valuing authenticity. 
                    They prefer a few deep and meaningful friends over superficial relationships.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Strengths */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="text-yellow-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "주요 강점" : "Key Strengths"}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.animals.cat.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Areas */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-pink-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "성장 포인트" : "Growth Areas"}
              </h3>
            </div>
            {language === "ko" ? (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 타인과의 소통 능력 향상</li>
                <li>• 협업과 팀워크 기술 개발</li>
                <li>• 감정 표현 연습</li>
                <li>• 사회적 참여 확대</li>
                <li>• 일관성 있는 실행력 강화</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Improve communication with others</li>
                <li>• Develop collaboration and teamwork skills</li>
                <li>• Practice emotional expression</li>
                <li>• Expand social participation</li>
                <li>• Strengthen consistent execution</li>
              </ul>
            )}
          </div>

          {/* Compatible Animals */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="text-purple-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "궁합 동물" : "Compatible Animals"}
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { animal: language === "ko" ? "올빼미" : "Owl", emoji: "🦉", compatibility: "85%" },
                { animal: language === "ko" ? "독수리" : "Eagle", emoji: "🦅", compatibility: "82%" },
                { animal: language === "ko" ? "여우" : "Fox", emoji: "🦊", compatibility: "78%" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.emoji}</span>
                    <span className="font-medium text-gray-700">{item.animal}</span>
                  </div>
                  <span className="text-green-600 font-bold">{item.compatibility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}