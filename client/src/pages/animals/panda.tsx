import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Leaf, Smile, Users, Zap, Heart, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PandaGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="text-green-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-green-800">
                {t.animals.panda.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              {t.animals.panda.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.panda.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🐼</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "평화로운" : "Peaceful",
                  language === "ko" ? "균형감" : "Balanced", 
                  language === "ko" ? "신중한" : "Thoughtful",
                  language === "ko" ? "조화로운" : "Harmonious"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
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
              <Smile className="text-green-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.panda.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">내적 평화와 조화, 균형 잡힌 삶, 안정과 평온함 추구</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">자연과 고요한 환경, 명상과 사색, 의미 있는 인간관계</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">갈등과 대립, 과도한 경쟁, 급진적인 변화</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">Inner peace and harmony, balanced life, seeking stability and tranquility</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Nature and quiet environments, meditation and reflection, meaningful relationships</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Conflict and confrontation, excessive competition, radical changes</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Leaf className="text-green-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 상담사, 치료사</li>
                    <li>• 명상 지도자</li>
                    <li>• 도서관 사서</li>
                    <li>• 환경 보호 활동가</li>
                    <li>• 예술가, 공예가</li>
                    <li>• 요가 강사</li>
                    <li>• 가드너, 농부</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 평화롭고 조용한 분위기</li>
                    <li>• 협력적이고 지원적인 문화</li>
                    <li>• 업무와 삶의 균형 보장</li>
                    <li>• 스트레스가 적은 환경</li>
                    <li>• 의미와 가치가 있는 일</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Counselor, Therapist</li>
                    <li>• Meditation Teacher</li>
                    <li>• Librarian</li>
                    <li>• Environmental Activist</li>
                    <li>• Artist, Craftsperson</li>
                    <li>• Yoga Instructor</li>
                    <li>• Gardener, Farmer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Peaceful and quiet atmosphere</li>
                    <li>• Collaborative and supportive culture</li>
                    <li>• Work-life balance guaranteed</li>
                    <li>• Low-stress environment</li>
                    <li>• Meaningful and valuable work</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="text-green-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    판다형은 안정적이고 신뢰할 수 있는 파트너가 됩니다. 관계에서 조화와 평화를 추구하며, 
                    상대방을 깊이 이해하고 배려합니다. 갈등을 피하려 하지만, 필요시 단호함을 보이기도 합니다.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">돌고래 (평화 추구), 올빼미 (신중함), 늑대 (깊은 유대)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    진실하고 깊은 우정을 중시하며, 친구들의 좋은 상담자이자 든든한 지지자 역할을 합니다. 
                    많은 친구보다는 몇 명의 진실한 친구를 선호합니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Pandas become stable and trustworthy partners. They seek harmony and peace in relationships, 
                    deeply understanding and caring for their partners. While they avoid conflict, they can be firm when necessary.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Dolphin (peace seeking), Owl (thoughtfulness), Wolf (deep bonds)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They value genuine and deep friendships, serving as good counselors and strong supporters for their friends. 
                    They prefer a few genuine friends over many acquaintances.
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
              {t.animals.panda.strengths.map((strength, index) => (
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
              <TrendingUp className="text-green-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "성장 포인트" : "Growth Areas"}
              </h3>
            </div>
            {language === "ko" ? (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 적극적인 의사표현 연습</li>
                <li>• 변화에 대한 적응력 향상</li>
                <li>• 리더십 역할 수용</li>
                <li>• 목표 설정과 추진력 강화</li>
                <li>• 건설적 갈등 해결 능력</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Practice active self-expression</li>
                <li>• Improve adaptability to change</li>
                <li>• Accept leadership roles</li>
                <li>• Strengthen goal setting and drive</li>
                <li>• Constructive conflict resolution</li>
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
                { animal: language === "ko" ? "돌고래" : "Dolphin", emoji: "🐬", compatibility: "92%" },
                { animal: language === "ko" ? "늑대" : "Wolf", emoji: "🐺", compatibility: "89%" },
                { animal: language === "ko" ? "올빼미" : "Owl", emoji: "🦉", compatibility: "86%" }
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