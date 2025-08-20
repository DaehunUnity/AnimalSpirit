import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Lightbulb, Puzzle, Users, Zap, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FoxGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Lightbulb className="text-orange-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-orange-800">
                {t.animals.fox.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-orange-700 mb-4">
              {t.animals.fox.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.fox.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🦊</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "창의적" : "Creative",
                  language === "ko" ? "적응력" : "Adaptable", 
                  language === "ko" ? "영리한" : "Clever",
                  language === "ko" ? "전략적" : "Strategic"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
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
              <Sparkles className="text-orange-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.fox.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">혁신과 창의성, 새로운 해결책 발견, 지적 호기심 충족</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">복잡한 퍼즐 해결, 새로운 경험과 학습, 창의적 프로젝트</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">단조로운 반복 업무, 경직된 규칙, 창의성을 제한하는 환경</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">Innovation and creativity, discovering new solutions, satisfying intellectual curiosity</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Solving complex puzzles, new experiences and learning, creative projects</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Monotonous repetitive tasks, rigid rules, environments limiting creativity</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Puzzle className="text-orange-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 제품 기획자</li>
                    <li>• 크리에이티브 디렉터</li>
                    <li>• 전략 컨설턴트</li>
                    <li>• 스타트업 창업자</li>
                    <li>• 마케팅 전문가</li>
                    <li>• 디자이너, 예술가</li>
                    <li>• 혁신 매니저</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 자유롭고 유연한 근무 환경</li>
                    <li>• 창의적 사고가 장려되는 문화</li>
                    <li>• 다양한 프로젝트와 도전</li>
                    <li>• 빠른 변화와 혁신 추진</li>
                    <li>• 자율성과 실험 정신 존중</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Product Manager</li>
                    <li>• Creative Director</li>
                    <li>• Strategy Consultant</li>
                    <li>• Startup Founder</li>
                    <li>• Marketing Specialist</li>
                    <li>• Designer, Artist</li>
                    <li>• Innovation Manager</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free and flexible work environment</li>
                    <li>• Culture encouraging creative thinking</li>
                    <li>• Diverse projects and challenges</li>
                    <li>• Rapid change and innovation drive</li>
                    <li>• Respect for autonomy and experimentation</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="text-orange-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    여우형은 매력적이고 재치 있는 파트너가 됩니다. 관계에서도 창의성과 재미를 추구하며, 
                    상대방과 지적 교감을 나누는 것을 즐깁니다. 변화와 모험을 함께 할 파트너를 선호합니다.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">올빼미 (지적 교감), 독수리 (모험 추구), 돌고래 (사회적 조화)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    다양한 사람들과 쉽게 친해지며, 흥미로운 대화와 새로운 경험을 공유합니다. 
                    유머와 창의성으로 친구들에게 영감을 줍니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Foxes become charming and witty partners. They seek creativity and fun in relationships 
                    and enjoy intellectual connection with their partners. They prefer partners who embrace change and adventure.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Owl (intellectual connection), Eagle (adventure seeking), Dolphin (social harmony)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They easily befriend diverse people and share interesting conversations and new experiences. 
                    They inspire friends with their humor and creativity.
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
              {t.animals.fox.strengths.map((strength, index) => (
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
              <TrendingUp className="text-orange-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "성장 포인트" : "Growth Areas"}
              </h3>
            </div>
            {language === "ko" ? (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 집중력과 끈기 향상</li>
                <li>• 세부사항 관리 능력 개발</li>
                <li>• 일관성 있는 실행력 강화</li>
                <li>• 감정적 안정성 기르기</li>
                <li>• 장기적 계획 수립 연습</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Improve focus and persistence</li>
                <li>• Develop attention to detail</li>
                <li>• Strengthen consistent execution</li>
                <li>• Cultivate emotional stability</li>
                <li>• Practice long-term planning</li>
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
                { animal: language === "ko" ? "올빼미" : "Owl", emoji: "🦉", compatibility: "93%" },
                { animal: language === "ko" ? "독수리" : "Eagle", emoji: "🦅", compatibility: "87%" },
                { animal: language === "ko" ? "돌고래" : "Dolphin", emoji: "🐬", compatibility: "84%" }
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