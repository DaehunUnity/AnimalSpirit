import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Crown, Target, Users, Zap, Heart, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function LionGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Crown className="text-red-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-red-800">
                {t.animals.lion.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-red-700 mb-4">
              {t.animals.lion.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.lion.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🦁</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "리더십" : "Leadership",
                  language === "ko" ? "자신감" : "Confidence", 
                  language === "ko" ? "보호본능" : "Protective",
                  language === "ko" ? "카리스마" : "Charismatic"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
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
              <Target className="text-red-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.lion.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">성과 달성과 인정받기, 자신과 타인을 이끌고 영감을 주는 것</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">도전적인 상황, 리더십 기회, 팀을 이끄는 순간</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">통제력 상실, 의사결정권 부족, 무의미한 규칙과 제약</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">Achieving results and recognition, leading and inspiring others</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Challenging situations, leadership opportunities, guiding teams</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Loss of control, lack of decision-making power, meaningless rules</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-red-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• CEO, 임원</li>
                    <li>• 프로젝트 매니저</li>
                    <li>• 세일즈 디렉터</li>
                    <li>• 기업가, 창업자</li>
                    <li>• 정치인, 공공 리더</li>
                    <li>• 변호사, 판사</li>
                    <li>• 군인, 경찰관</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 자율성과 권한이 주어지는 환경</li>
                    <li>• 목표 지향적이고 성과 중심적</li>
                    <li>• 빠른 의사결정이 가능한 구조</li>
                    <li>• 혁신과 변화를 추진할 수 있는 곳</li>
                    <li>• 팀을 이끌고 멘토링할 기회</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• CEO, Executive</li>
                    <li>• Project Manager</li>
                    <li>• Sales Director</li>
                    <li>• Entrepreneur, Founder</li>
                    <li>• Politician, Public Leader</li>
                    <li>• Lawyer, Judge</li>
                    <li>• Military Officer, Police</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Autonomy and authority granted</li>
                    <li>• Goal-oriented and results-focused</li>
                    <li>• Fast decision-making structure</li>
                    <li>• Innovation and change-driving opportunities</li>
                    <li>• Team leadership and mentoring chances</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="text-red-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    사자형은 파트너십에서도 리더십을 발휘하며, 상대방을 보호하고 이끌어주려 합니다. 
                    충성스럽고 헌신적이지만, 때로는 지나치게 주도적일 수 있어 균형이 필요합니다.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">돌고래 (상호 보완), 늑대 (충성심 공유), 독수리 (목표 지향성)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    넓은 인맥을 가지고 있으며 그룹의 중심이 되는 경우가 많습니다. 
                    진정한 친구들에게는 매우 충성스럽고 보호적입니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Lions show leadership in partnerships, protecting and guiding their partners. 
                    They are loyal and devoted, but sometimes overly dominant, requiring balance.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Dolphin (complementary), Wolf (shared loyalty), Eagle (goal-oriented)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They have wide networks and often become the center of groups. 
                    They are very loyal and protective of their true friends.
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
              {t.animals.lion.strengths.map((strength, index) => (
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
              <TrendingUp className="text-blue-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "성장 포인트" : "Growth Areas"}
              </h3>
            </div>
            {language === "ko" ? (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 다른 사람의 의견 경청하기</li>
                <li>• 인내심 기르기</li>
                <li>• 감정적 지능 향상</li>
                <li>• 권한 위임 연습</li>
                <li>• 세부사항에 더 주의 기울이기</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Listen to others' opinions</li>
                <li>• Develop patience</li>
                <li>• Improve emotional intelligence</li>
                <li>• Practice delegation</li>
                <li>• Pay attention to details</li>
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
                { animal: language === "ko" ? "돌고래" : "Dolphin", emoji: "🐬", compatibility: "95%" },
                { animal: language === "ko" ? "늑대" : "Wolf", emoji: "🐺", compatibility: "90%" },
                { animal: language === "ko" ? "독수리" : "Eagle", emoji: "🦅", compatibility: "85%" }
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