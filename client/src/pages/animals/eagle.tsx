import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Mountain, Target, Users, Zap, Trophy, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function EagleGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Mountain className="text-yellow-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-yellow-800">
                {t.animals.eagle.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-yellow-700 mb-4">
              {t.animals.eagle.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.eagle.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🦅</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "야심가" : "Ambitious",
                  language === "ko" ? "목표지향" : "Goal-oriented", 
                  language === "ko" ? "독립적" : "Independent",
                  language === "ko" ? "결단력" : "Decisive"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
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
              <Trophy className="text-yellow-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.eagle.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">높은 성취와 성공, 개인적 우수성 추구, 독립성과 자유</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">도전적인 목표 달성, 경쟁과 성과, 개인적 성장과 발전</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">미시관리, 느린 진행, 평범함과 정체</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">High achievement and success, pursuing personal excellence, independence and freedom</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Achieving challenging goals, competition and performance, personal growth and development</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Micromanagement, slow progress, mediocrity and stagnation</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="text-yellow-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 경영진, C-레벨</li>
                    <li>• 투자자, 벤처캐피털</li>
                    <li>• 독립 사업가</li>
                    <li>• 프리랜서 전문가</li>
                    <li>• 세일즈 리더</li>
                    <li>• 부동산 개발업자</li>
                    <li>• 운동선수, 코치</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 높은 자율성과 독립성</li>
                    <li>• 성과와 결과 중심 평가</li>
                    <li>• 도전적이고 경쟁적 분위기</li>
                    <li>• 빠른 의사결정과 실행</li>
                    <li>• 개인적 성장 기회 풍부</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Executive, C-level</li>
                    <li>• Investor, Venture Capital</li>
                    <li>• Independent Entrepreneur</li>
                    <li>• Freelance Professional</li>
                    <li>• Sales Leader</li>
                    <li>• Real Estate Developer</li>
                    <li>• Athlete, Coach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• High autonomy and independence</li>
                    <li>• Performance and results-based evaluation</li>
                    <li>• Challenging and competitive atmosphere</li>
                    <li>• Fast decision-making and execution</li>
                    <li>• Abundant personal growth opportunities</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="text-yellow-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    독수리형은 강하고 독립적인 파트너가 됩니다. 서로의 목표를 지지하고 개인적 성장을 
                    격려하는 관계를 선호합니다. 때로는 일에 몰두하여 관계에 소홀할 수 있어 균형이 필요합니다.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">사자 (리더십 공유), 여우 (지적 자극), 고양이 (독립성 존중)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    성공 지향적인 친구들과 네트워킹을 중시하며, 서로에게 영감과 동기를 주는 관계를 선호합니다. 
                    충성스럽지만 친구 수는 많지 않을 수 있습니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Eagles become strong and independent partners. They prefer relationships where partners support 
                    each other's goals and encourage personal growth. Sometimes they may neglect relationships due to work focus.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Lion (shared leadership), Fox (intellectual stimulation), Cat (respect for independence)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They value networking with success-oriented friends and prefer relationships that provide mutual inspiration and motivation. 
                    Loyal but may not have many friends.
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
              {t.animals.eagle.strengths.map((strength, index) => (
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
              <TrendingUp className="text-yellow-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "성장 포인트" : "Growth Areas"}
              </h3>
            </div>
            {language === "ko" ? (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 타인과의 협력 능력 향상</li>
                <li>• 인내심과 장기적 관점 개발</li>
                <li>• 감정적 연결 능력 강화</li>
                <li>• 실패에 대한 관용 기르기</li>
                <li>• 워라밸 균형 맞추기</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Improve collaboration with others</li>
                <li>• Develop patience and long-term perspective</li>
                <li>• Strengthen emotional connection abilities</li>
                <li>• Cultivate tolerance for failure</li>
                <li>• Balance work and life</li>
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
                { animal: language === "ko" ? "사자" : "Lion", emoji: "🦁", compatibility: "85%" },
                { animal: language === "ko" ? "여우" : "Fox", emoji: "🦊", compatibility: "87%" },
                { animal: language === "ko" ? "고양이" : "Cat", emoji: "🐱", compatibility: "82%" }
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