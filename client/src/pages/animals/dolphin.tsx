import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Waves, Heart, Users, Zap, Smile, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function DolphinGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Waves className="text-blue-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-blue-800">
                {t.animals.dolphin.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {t.animals.dolphin.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.dolphin.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🐬</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "사교적" : "Social",
                  language === "ko" ? "공감능력" : "Empathetic", 
                  language === "ko" ? "낙천적" : "Optimistic",
                  language === "ko" ? "협력적" : "Collaborative"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
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
              <Smile className="text-blue-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.dolphin.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">타인과의 깊은 연결, 조화로운 관계 형성, 긍정적 분위기 조성</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">사회적 상호작용, 팀워크, 다른 사람을 도우며 기쁨을 주는 순간</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">갈등과 대립, 고립, 비관적이고 부정적인 환경</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">Deep connections with others, harmonious relationships, creating positive atmosphere</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Social interactions, teamwork, helping others and bringing joy</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Conflict and confrontation, isolation, pessimistic and negative environments</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-blue-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 교사, 강사</li>
                    <li>• 상담사, 코치</li>
                    <li>• HR 담당자</li>
                    <li>• 마케팅, 홍보</li>
                    <li>• 사회복지사</li>
                    <li>• 이벤트 플래너</li>
                    <li>• 고객 서비스</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 협업과 팀워크 중심</li>
                    <li>• 긍정적이고 지원적인 분위기</li>
                    <li>• 사람들과 소통할 수 있는 기회</li>
                    <li>• 창의성과 아이디어 교환</li>
                    <li>• 유연한 근무 환경</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Teacher, Instructor</li>
                    <li>• Counselor, Coach</li>
                    <li>• HR Specialist</li>
                    <li>• Marketing, PR</li>
                    <li>• Social Worker</li>
                    <li>• Event Planner</li>
                    <li>• Customer Service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Collaboration and teamwork focused</li>
                    <li>• Positive and supportive atmosphere</li>
                    <li>• Opportunities to communicate with people</li>
                    <li>• Creativity and idea exchange</li>
                    <li>• Flexible work environment</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="text-blue-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    돌고래형은 따뜻하고 배려 깊은 파트너가 됩니다. 상대방의 감정을 잘 이해하고 
                    관계에서 조화를 추구합니다. 갈등을 피하려 하지만, 솔직한 소통이 중요합니다.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">사자 (리더십 보완), 올빼미 (지적 자극), 판다 (평화 추구)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    많은 친구들과 좋은 관계를 유지하며, 그룹 내에서 화합을 도모하는 역할을 합니다. 
                    진심어린 관심과 배려로 깊은 우정을 쌓습니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Dolphins become warm and caring partners. They understand their partner's emotions well 
                    and seek harmony in relationships. While they avoid conflict, honest communication is important.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Lion (leadership complement), Owl (intellectual stimulation), Panda (peace seeking)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They maintain good relationships with many friends and promote harmony within groups. 
                    They build deep friendships through genuine care and consideration.
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
              {t.animals.dolphin.strengths.map((strength, index) => (
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
                <li>• 건설적 갈등 대처법 배우기</li>
                <li>• 개인적 경계선 설정</li>
                <li>• 자기주장 능력 향상</li>
                <li>• 독립적 의사결정 연습</li>
                <li>• 비판적 피드백 수용</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Learn constructive conflict resolution</li>
                <li>• Set personal boundaries</li>
                <li>• Improve assertiveness skills</li>
                <li>• Practice independent decision-making</li>
                <li>• Accept critical feedback</li>
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
                { animal: language === "ko" ? "사자" : "Lion", emoji: "🦁", compatibility: "95%" },
                { animal: language === "ko" ? "올빼미" : "Owl", emoji: "🦉", compatibility: "88%" },
                { animal: language === "ko" ? "판다" : "Panda", emoji: "🐼", compatibility: "92%" }
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