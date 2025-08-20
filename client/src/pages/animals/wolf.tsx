import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Shield, Heart, Users, Zap, Moon, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function WolfGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="text-gray-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800">
                {t.animals.wolf.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {t.animals.wolf.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.wolf.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-gray-600 to-slate-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-100 to-slate-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🐺</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "충성스러운" : "Loyal",
                  language === "ko" ? "보호본능" : "Protective", 
                  language === "ko" ? "협력적" : "Cooperative",
                  language === "ko" ? "진실한" : "Authentic"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
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
              <Moon className="text-gray-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.wolf.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">깊은 유대 관계 형성, 사랑하는 사람들 보호, 팀과 가족의 안녕</p>
                </div>
                <div className="border-l-4 border-slate-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">팀워크와 협력, 의미 있는 관계, 공동 목표 달성</p>
                </div>
                <div className="border-l-4 border-zinc-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">신뢰 배신, 고립, 사랑하는 사람들의 위험</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">Forming deep bonds, protecting loved ones, well-being of team and family</p>
                </div>
                <div className="border-l-4 border-slate-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Teamwork and cooperation, meaningful relationships, achieving common goals</p>
                </div>
                <div className="border-l-4 border-zinc-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Betrayal of trust, isolation, danger to loved ones</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-gray-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 팀 리더, 매니저</li>
                    <li>• 간호사, 의료진</li>
                    <li>• 소방관, 구급대원</li>
                    <li>• 상담사, 사회복지사</li>
                    <li>• 군인, 경찰</li>
                    <li>• 교사, 코치</li>
                    <li>• 비영리단체 활동가</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 강한 팀워크와 동료애</li>
                    <li>• 신뢰와 충성심이 중시되는 문화</li>
                    <li>• 명확한 목표와 사명감</li>
                    <li>• 타인을 도울 수 있는 기회</li>
                    <li>• 안정적이고 지원적인 조직</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Team Leader, Manager</li>
                    <li>• Nurse, Medical Staff</li>
                    <li>• Firefighter, Paramedic</li>
                    <li>• Counselor, Social Worker</li>
                    <li>• Military, Police</li>
                    <li>• Teacher, Coach</li>
                    <li>• Non-profit Activist</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Strong teamwork and camaraderie</li>
                    <li>• Culture valuing trust and loyalty</li>
                    <li>• Clear goals and sense of mission</li>
                    <li>• Opportunities to help others</li>
                    <li>• Stable and supportive organization</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="text-gray-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    늑대형은 매우 헌신적이고 충실한 파트너가 됩니다. 깊은 감정적 연결을 추구하며, 
                    파트너와 가족을 보호하고 지지하기 위해 모든 것을 바칩니다. 장기적이고 안정적인 관계를 선호합니다.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">사자 (보호 본능), 판다 (조화 추구), 돌고래 (감정적 연결)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    평생의 친구를 만드는 능력이 뛰어나며, 친구들에게 언제나 의지할 수 있는 존재가 됩니다. 
                    그룹 내에서 화합을 도모하고 모든 구성원을 챙기는 역할을 맡습니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Wolves become very devoted and faithful partners. They seek deep emotional connections 
                    and dedicate everything to protect and support their partners and families. They prefer long-term, stable relationships.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Lion (protective instinct), Panda (harmony seeking), Dolphin (emotional connection)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They excel at making lifelong friends and become reliable supporters for their friends. 
                    They promote harmony within groups and take care of all members.
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
              {t.animals.wolf.strengths.map((strength, index) => (
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
              <TrendingUp className="text-gray-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "성장 포인트" : "Growth Areas"}
              </h3>
            </div>
            {language === "ko" ? (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 독립적 의사결정 능력 강화</li>
                <li>• 과도한 희생 자제하기</li>
                <li>• 개인적 목표 설정과 추구</li>
                <li>• 변화에 대한 적응력 향상</li>
                <li>• 건전한 경계선 설정</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Strengthen independent decision-making</li>
                <li>• Moderate excessive self-sacrifice</li>
                <li>• Set and pursue personal goals</li>
                <li>• Improve adaptability to change</li>
                <li>• Establish healthy boundaries</li>
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
                { animal: language === "ko" ? "사자" : "Lion", emoji: "🦁", compatibility: "90%" },
                { animal: language === "ko" ? "판다" : "Panda", emoji: "🐼", compatibility: "89%" },
                { animal: language === "ko" ? "돌고래" : "Dolphin", emoji: "🐬", compatibility: "87%" }
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