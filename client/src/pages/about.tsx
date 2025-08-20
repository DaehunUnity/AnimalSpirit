import { useLanguage } from "@/contexts/language-context";
import { Heart, Users, Target, Lightbulb } from "lucide-react";

export default function About() {
  const { language } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue mb-6">
          {language === "ko" ? "동물 성격 테스트 소개" : "About Animal Personality Test"}
        </h1>

        {language === "ko" ? (
          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Heart className="text-coral mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">우리의 미션</h2>
              </div>
              <p className="text-gray-text leading-relaxed">
                동물 성격 테스트는 재미있고 과학적인 접근을 통해 사람들이 자신의 성격을 더 잘 이해할 수 있도록 돕습니다. 
                각자의 고유한 특성을 동물의 특성과 연결하여, 자기 발견의 여정을 흥미롭게 만드는 것이 우리의 목표입니다.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Target className="text-teal mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">테스트의 목적</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-coral/10 to-pink/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">자기 이해 증진</h3>
                  <p className="text-gray-text text-sm">
                    자신의 강점, 성격 특성, 행동 패턴을 객관적으로 파악할 수 있습니다.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-teal/10 to-sky/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">관계 개선</h3>
                  <p className="text-gray-text text-sm">
                    다른 사람들과의 호환성을 이해하고 더 나은 인간관계를 구축할 수 있습니다.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-mint/10 to-golden/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">진로 탐색</h3>
                  <p className="text-gray-text text-sm">
                    성격에 맞는 직업과 환경을 찾는 데 도움이 되는 통찰력을 제공합니다.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-golden/10 to-coral/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">개인적 성장</h3>
                  <p className="text-gray-text text-sm">
                    자신의 장단점을 인식하고 지속적인 자기계발의 방향을 제시합니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Lightbulb className="text-golden mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">테스트 방법론</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-text leading-relaxed mb-4">
                  우리의 동물 성격 테스트는 심리학의 성격 유형 이론을 바탕으로 개발되었습니다. 
                  10개의 신중하게 선별된 질문을 통해 다음과 같은 성격 차원을 평가합니다:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-text">
                  <li><strong>리더십 성향:</strong> 주도성과 영향력</li>
                  <li><strong>사회적 성향:</strong> 대인관계와 소통 방식</li>
                  <li><strong>문제해결 방식:</strong> 분석적 vs 직관적 접근</li>
                  <li><strong>스트레스 대처:</strong> 적응성과 회복력</li>
                  <li><strong>동기와 가치관:</strong> 삶의 우선순위와 목표</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Users className="text-sky mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">8가지 동물 유형</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "사자", subtitle: "리더", color: "from-red-100 to-red-200" },
                  { name: "돌고래", subtitle: "연결자", color: "from-blue-100 to-blue-200" },
                  { name: "올빼미", subtitle: "관찰자", color: "from-purple-100 to-purple-200" },
                  { name: "여우", subtitle: "전략가", color: "from-orange-100 to-orange-200" },
                  { name: "독수리", subtitle: "성취자", color: "from-yellow-100 to-yellow-200" },
                  { name: "판다", subtitle: "조화자", color: "from-green-100 to-green-200" },
                  { name: "고양이", subtitle: "예술가", color: "from-pink-100 to-pink-200" },
                  { name: "늑대", subtitle: "수호자", color: "from-gray-100 to-gray-200" }
                ].map((animal, index) => (
                  <div key={index} className={`bg-gradient-to-br ${animal.color} p-4 rounded-lg text-center`}>
                    <div className="font-semibold text-dark-blue">{animal.name}</div>
                    <div className="text-sm text-gray-600">{animal.subtitle}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-coral/10 to-teal/10 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark-blue mb-4">주의사항</h2>
              <p className="text-gray-text leading-relaxed">
                이 테스트는 오락과 자기 탐구 목적으로 제작되었습니다. 결과는 참고용이며, 
                전문적인 심리 상담이나 진단의 대체재로 사용될 수 없습니다. 
                모든 사람은 고유하며, 테스트 결과보다 개인의 경험과 성장이 더 중요합니다.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Heart className="text-coral mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">Our Mission</h2>
              </div>
              <p className="text-gray-text leading-relaxed">
                Animal Personality Test helps people better understand their personality through a fun and scientific approach. 
                Our goal is to make the journey of self-discovery exciting by connecting individual characteristics with animal traits.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Target className="text-teal mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">Purpose of the Test</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-coral/10 to-pink/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">Self-Understanding</h3>
                  <p className="text-gray-text text-sm">
                    Objectively identify your strengths, personality traits, and behavioral patterns.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-teal/10 to-sky/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">Relationship Improvement</h3>
                  <p className="text-gray-text text-sm">
                    Understand compatibility with others and build better interpersonal relationships.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-mint/10 to-golden/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">Career Exploration</h3>
                  <p className="text-gray-text text-sm">
                    Gain insights to help find careers and environments that suit your personality.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-golden/10 to-coral/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-dark-blue mb-2">Personal Growth</h3>
                  <p className="text-gray-text text-sm">
                    Recognize strengths and weaknesses while providing direction for continuous self-development.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Lightbulb className="text-golden mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">Test Methodology</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-text leading-relaxed mb-4">
                  Our animal personality test is developed based on psychological personality type theories. 
                  Through 10 carefully selected questions, we assess the following personality dimensions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-text">
                  <li><strong>Leadership Tendency:</strong> Initiative and influence</li>
                  <li><strong>Social Orientation:</strong> Interpersonal relationships and communication style</li>
                  <li><strong>Problem-Solving Approach:</strong> Analytical vs intuitive methods</li>
                  <li><strong>Stress Management:</strong> Adaptability and resilience</li>
                  <li><strong>Motivation and Values:</strong> Life priorities and goals</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Users className="text-sky mr-3 h-6 w-6" />
                <h2 className="text-2xl font-semibold text-dark-blue">8 Animal Types</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Lion", subtitle: "Leader", color: "from-red-100 to-red-200" },
                  { name: "Dolphin", subtitle: "Connector", color: "from-blue-100 to-blue-200" },
                  { name: "Owl", subtitle: "Observer", color: "from-purple-100 to-purple-200" },
                  { name: "Fox", subtitle: "Strategist", color: "from-orange-100 to-orange-200" },
                  { name: "Eagle", subtitle: "Achiever", color: "from-yellow-100 to-yellow-200" },
                  { name: "Panda", subtitle: "Harmonizer", color: "from-green-100 to-green-200" },
                  { name: "Cat", subtitle: "Artist", color: "from-pink-100 to-pink-200" },
                  { name: "Wolf", subtitle: "Guardian", color: "from-gray-100 to-gray-200" }
                ].map((animal, index) => (
                  <div key={index} className={`bg-gradient-to-br ${animal.color} p-4 rounded-lg text-center`}>
                    <div className="font-semibold text-dark-blue">{animal.name}</div>
                    <div className="text-sm text-gray-600">{animal.subtitle}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-coral/10 to-teal/10 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark-blue mb-4">Important Notice</h2>
              <p className="text-gray-text leading-relaxed">
                This test is created for entertainment and self-exploration purposes. Results are for reference only 
                and cannot substitute professional psychological counseling or diagnosis. 
                Every person is unique, and individual experiences and growth are more important than test results.
              </p>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}