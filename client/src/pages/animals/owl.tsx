import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import { Eye, BookOpen, Users, Zap, Brain, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function OwlGuide() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Eye className="text-purple-600 mr-3 h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-purple-800">
                {t.animals.owl.name}
              </h1>
            </div>
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              {t.animals.owl.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.animals.owl.description}
            </p>
            
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  {language === "ko" ? "테스트 하러 가기" : "Take the Test"}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-8xl">🦉</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm text-gray-600">
                {language === "ko" ? "대표 특성" : "Key Traits"}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  language === "ko" ? "지혜로운" : "Wise",
                  language === "ko" ? "분석적" : "Analytical", 
                  language === "ko" ? "신중한" : "Thoughtful",
                  language === "ko" ? "관찰력" : "Observant"
                ].map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
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
              <Brain className="text-purple-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "성격 분석" : "Personality Analysis"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.animals.owl.personality}
            </p>
            
            {language === "ko" ? (
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 핵심 동기</h4>
                  <p className="text-gray-600">지식 습득, 문제 해결, 깊이 있는 이해와 통찰력 발휘</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ 에너지원</h4>
                  <p className="text-gray-600">혼자만의 집중 시간, 복잡한 문제 분석, 새로운 학습과 연구</p>
                </div>
                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 스트레스 요인</h4>
                  <p className="text-gray-600">성급한 결정 압박, 과도한 사교 활동, 표면적인 대화</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Core Motivation</h4>
                  <p className="text-gray-600">Knowledge acquisition, problem solving, deep understanding and insight</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">⚡ Energy Source</h4>
                  <p className="text-gray-600">Solo focus time, complex problem analysis, new learning and research</p>
                </div>
                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚫 Stress Triggers</h4>
                  <p className="text-gray-600">Pressure for hasty decisions, excessive social activities, superficial conversations</p>
                </div>
              </div>
            )}
          </section>

          {/* Career & Work Style */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="text-purple-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "직업 & 업무 스타일" : "Career & Work Style"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 이상적인 직업</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 연구원, 과학자</li>
                    <li>• 데이터 분석가</li>
                    <li>• 소프트웨어 개발자</li>
                    <li>• 교수, 학자</li>
                    <li>• 컨설턴트</li>
                    <li>• 작가, 편집자</li>
                    <li>• 회계사, 감사</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 업무 환경</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 조용하고 집중할 수 있는 공간</li>
                    <li>• 충분한 사고와 분석 시간</li>
                    <li>• 깊이 있는 전문성이 인정되는 곳</li>
                    <li>• 체계적이고 논리적인 업무 프로세스</li>
                    <li>• 지속적인 학습 기회 제공</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Ideal Careers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Researcher, Scientist</li>
                    <li>• Data Analyst</li>
                    <li>• Software Developer</li>
                    <li>• Professor, Scholar</li>
                    <li>• Consultant</li>
                    <li>• Writer, Editor</li>
                    <li>• Accountant, Auditor</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💼 Work Environment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Quiet, focused workspace</li>
                    <li>• Adequate time for thinking and analysis</li>
                    <li>• Recognition of deep expertise</li>
                    <li>• Systematic and logical work processes</li>
                    <li>• Continuous learning opportunities</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Relationships */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="text-purple-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-800">
                {language === "ko" ? "인간관계" : "Relationships"}
              </h3>
            </div>
            
            {language === "ko" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 연애 & 결혼</h4>
                  <p className="text-gray-600 mb-4">
                    올빼미형은 깊이 있는 관계를 선호하며, 파트너와 지적 교감을 나누는 것을 중요하게 여깁니다. 
                    감정 표현에 서툴 수 있지만, 진정성 있는 사랑을 보여줍니다.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-700 font-medium">궁합이 좋은 타입</p>
                    <p className="text-gray-600">돌고래 (감정적 지원), 여우 (지적 자극), 고양이 (독립성 존중)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 친구관계</h4>
                  <p className="text-gray-600">
                    소수의 깊은 친구 관계를 선호하며, 의미 있는 대화와 지적 교류를 중시합니다. 
                    신뢰할 수 있는 조언자 역할을 자주 맡습니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💑 Love & Marriage</h4>
                  <p className="text-gray-600 mb-4">
                    Owls prefer deep relationships and value intellectual connection with their partners. 
                    While they may struggle with emotional expression, they show genuine love.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-700 font-medium">Compatible Types</p>
                    <p className="text-gray-600">Dolphin (emotional support), Fox (intellectual stimulation), Cat (respect for independence)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">👥 Friendships</h4>
                  <p className="text-gray-600">
                    They prefer a few deep friendships and value meaningful conversations and intellectual exchange. 
                    They often take on the role of trusted advisor.
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
              {t.animals.owl.strengths.map((strength, index) => (
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
              <TrendingUp className="text-purple-600 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-800">
                {language === "ko" ? "성장 포인트" : "Growth Areas"}
              </h3>
            </div>
            {language === "ko" ? (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 감정 표현 능력 향상</li>
                <li>• 사회적 소통 기술 개발</li>
                <li>• 완벽주의 성향 조절</li>
                <li>• 빠른 의사결정 연습</li>
                <li>• 팀워크 능력 강화</li>
              </ul>
            ) : (
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Improve emotional expression</li>
                <li>• Develop social communication skills</li>
                <li>• Manage perfectionist tendencies</li>
                <li>• Practice quick decision-making</li>
                <li>• Strengthen teamwork abilities</li>
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
                { animal: language === "ko" ? "여우" : "Fox", emoji: "🦊", compatibility: "93%" },
                { animal: language === "ko" ? "돌고래" : "Dolphin", emoji: "🐬", compatibility: "88%" },
                { animal: language === "ko" ? "고양이" : "Cat", emoji: "🐱", compatibility: "85%" }
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