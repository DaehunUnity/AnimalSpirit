import { useLanguage } from "@/contexts/language-context";
import { Brain, BookOpen, BarChart3, Users, Lightbulb, Target } from "lucide-react";

export default function Science() {
  const { language } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="text-purple-600 mr-3 h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue">
              {language === "ko" ? "성격 테스트의 과학적 근거" : "Scientific Basis of Personality Tests"}
            </h1>
          </div>
          <p className="text-gray-text text-lg">
            {language === "ko" 
              ? "동물 성격 테스트가 어떤 심리학적 이론을 바탕으로 만들어졌는지 알아보세요." 
              : "Learn about the psychological theories behind our Animal Personality Test."
            }
          </p>
        </div>

        {language === "ko" ? (
          <div className="space-y-8">
            {/* Historical Background */}
            <section>
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">성격 심리학의 역사</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  성격 심리학은 20세기 초부터 본격적으로 발전하기 시작했습니다. 
                  칼 융(Carl Jung)의 성격 유형 이론, 한스 아이젱크(Hans Eysenck)의 차원 이론, 
                  그리고 현대의 빅파이브 모델까지 다양한 이론들이 발전해왔습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🧠 칼 융 (1875-1961)</h4>
                    <p className="text-gray-600 text-sm">내향성-외향성, 사고-감정-감각-직관의 4가지 정신 기능을 제시</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">📊 한스 아이젱크 (1916-1997)</h4>
                    <p className="text-gray-600 text-sm">성격을 외향성-내향성, 신경성-안정성의 2차원으로 설명</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Big Five Model */}
            <section>
              <div className="flex items-center mb-4">
                <BarChart3 className="text-green-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">빅파이브 성격 모델</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                현재 심리학에서 가장 널리 인정받는 성격 모델은 '빅파이브(Big Five)' 또는 'OCEAN' 모델입니다. 
                우리의 동물 성격 테스트는 이 모델의 핵심 요소들을 참고하여 개발되었습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { 
                    initial: "O", 
                    trait: "개방성 (Openness)", 
                    description: "새로운 경험에 대한 개방성, 창의성, 호기심",
                    animal: "여우, 돌고래" 
                  },
                  { 
                    initial: "C", 
                    trait: "성실성 (Conscientiousness)", 
                    description: "목표 지향성, 자기 통제, 책임감",
                    animal: "올빼미, 독수리" 
                  },
                  { 
                    initial: "E", 
                    trait: "외향성 (Extraversion)", 
                    description: "사교성, 활동성, 긍정적 감정",
                    animal: "사자, 돌고래" 
                  },
                  { 
                    initial: "A", 
                    trait: "친화성 (Agreeableness)", 
                    description: "협력성, 신뢰, 타인에 대한 배려",
                    animal: "판다, 늑대" 
                  },
                  { 
                    initial: "N", 
                    trait: "신경성 (Neuroticism)", 
                    description: "정서적 안정성, 스트레스 반응",
                    animal: "고양이 (낮음)" 
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-2">
                        {item.initial}
                      </div>
                      <h4 className="font-semibold text-gray-800">{item.trait}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <p className="text-green-700 text-xs font-medium">관련 동물: {item.animal}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Methodology */}
            <section>
              <div className="flex items-center mb-4">
                <Target className="text-purple-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">우리의 테스트 방법론</h2>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-4">🎯 평가 차원</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">1. 리더십 성향</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• 주도권을 잡으려는 경향</li>
                      <li>• 의사결정 스타일</li>
                      <li>• 영향력 발휘 방식</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">2. 사회적 성향</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• 대인관계 선호도</li>
                      <li>• 의사소통 스타일</li>
                      <li>• 그룹 내 역할</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">3. 문제해결 방식</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• 분석적 vs 직관적 접근</li>
                      <li>• 정보 처리 방식</li>
                      <li>• 의사결정 과정</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">4. 스트레스 대처</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• 압박 상황에서의 반응</li>
                      <li>• 적응력과 유연성</li>
                      <li>• 회복력 정도</li>
                    </ul>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-800 mb-4">🧮 알고리즘 방식</h3>
                <div className="space-y-3 text-gray-700">
                  <p>각 질문은 특정 성격 차원을 측정하도록 설계되었으며, 답변에 따라 가중치가 적용됩니다.</p>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-medium mb-2">계산 과정:</h5>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>10개 질문의 답변을 4가지 성격 차원별로 점수화</li>
                      <li>각 차원의 점수를 8개 동물 프로필과 비교</li>
                      <li>가장 높은 일치도를 보이는 동물 유형 선택</li>
                      <li>일치도 백분율 계산 및 결과 제시</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Validation */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="text-orange-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">검증 및 신뢰성</h2>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">✅ 강점</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 기존 심리학 이론 기반 설계</li>
                      <li>• 직관적이고 이해하기 쉬운 결과</li>
                      <li>• 자기 성찰과 대화의 시작점 제공</li>
                      <li>• 문화적 편견 최소화</li>
                      <li>• 14만+ 명의 테스트 데이터 활용</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">⚠️ 한계</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 간소화된 성격 모델</li>
                      <li>• 상황적 맥락 고려 부족</li>
                      <li>• 전문적 심리 검사 대체 불가</li>
                      <li>• 개인의 복잡성 완전 반영 어려움</li>
                      <li>• 시간에 따른 변화 미반영</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Support */}
            <section>
              <div className="flex items-center mb-4">
                <Lightbulb className="text-yellow-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">관련 연구 및 참고문헌</h2>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">📚 핵심 연구</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• McCrae, R. R., & Costa, P. T. (1987). Validation of the five-factor model</li>
                      <li>• Goldberg, L. R. (1993). The structure of phenotypic personality traits</li>
                      <li>• John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy</li>
                      <li>• Soto, C. J., & John, O. P. (2017). Short and extra-short forms of the Big Five</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">🎭 동물 상징 연구</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Furnham, A. (1996). Animal personality research</li>
                      <li>• Gosling, S. D. (2001). From mice to men: Animal personality research</li>
                      <li>• Weiss, A., King, J. E., & Hopkins, W. D. (2007). Comparative approach</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-yellow-200 mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>면책조항:</strong> 이 테스트는 교육 및 오락 목적으로 제작되었습니다. 
                      심각한 심리적 문제나 의사결정에는 전문가의 도움을 받으시기 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Historical Background */}
            <section>
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">History of Personality Psychology</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Personality psychology began to develop seriously from the early 20th century. 
                  Various theories have evolved from Carl Jung's personality type theory, Hans Eysenck's dimensional theory, 
                  to the modern Big Five model.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🧠 Carl Jung (1875-1961)</h4>
                    <p className="text-gray-600 text-sm">Proposed introversion-extraversion and 4 psychological functions: thinking-feeling-sensing-intuition</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">📊 Hans Eysenck (1916-1997)</h4>
                    <p className="text-gray-600 text-sm">Explained personality through 2 dimensions: extraversion-introversion and neuroticism-stability</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Big Five Model */}
            <section>
              <div className="flex items-center mb-4">
                <BarChart3 className="text-green-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">Big Five Personality Model</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The most widely accepted personality model in psychology today is the 'Big Five' or 'OCEAN' model. 
                Our Animal Personality Test was developed based on the core elements of this model.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { 
                    initial: "O", 
                    trait: "Openness", 
                    description: "Openness to new experiences, creativity, curiosity",
                    animal: "Fox, Dolphin" 
                  },
                  { 
                    initial: "C", 
                    trait: "Conscientiousness", 
                    description: "Goal orientation, self-control, responsibility",
                    animal: "Owl, Eagle" 
                  },
                  { 
                    initial: "E", 
                    trait: "Extraversion", 
                    description: "Sociability, activity, positive emotions",
                    animal: "Lion, Dolphin" 
                  },
                  { 
                    initial: "A", 
                    trait: "Agreeableness", 
                    description: "Cooperation, trust, consideration for others",
                    animal: "Panda, Wolf" 
                  },
                  { 
                    initial: "N", 
                    trait: "Neuroticism", 
                    description: "Emotional stability, stress response",
                    animal: "Cat (Low)" 
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-2">
                        {item.initial}
                      </div>
                      <h4 className="font-semibold text-gray-800">{item.trait}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <p className="text-green-700 text-xs font-medium">Related Animals: {item.animal}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Methodology */}
            <section>
              <div className="flex items-center mb-4">
                <Target className="text-purple-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">Our Test Methodology</h2>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-4">🎯 Assessment Dimensions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">1. Leadership Tendency</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• Tendency to take initiative</li>
                      <li>• Decision-making style</li>
                      <li>• Way of exerting influence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">2. Social Orientation</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• Interpersonal relationship preferences</li>
                      <li>• Communication style</li>
                      <li>• Role within groups</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">3. Problem-Solving Approach</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• Analytical vs intuitive approach</li>
                      <li>• Information processing method</li>
                      <li>• Decision-making process</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">4. Stress Management</h4>
                    <ul className="text-gray-600 text-sm space-y-1 pl-4">
                      <li>• Response to pressure situations</li>
                      <li>• Adaptability and flexibility</li>
                      <li>• Level of resilience</li>
                    </ul>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-800 mb-4">🧮 Algorithm Method</h3>
                <div className="space-y-3 text-gray-700">
                  <p>Each question is designed to measure specific personality dimensions, with weights applied according to responses.</p>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-medium mb-2">Calculation Process:</h5>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Score responses to 10 questions across 4 personality dimensions</li>
                      <li>Compare each dimension's score with 8 animal profiles</li>
                      <li>Select animal type with highest match percentage</li>
                      <li>Calculate match percentage and present results</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Validation */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="text-orange-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">Validation and Reliability</h2>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">✅ Strengths</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Based on established psychological theories</li>
                      <li>• Intuitive and easy-to-understand results</li>
                      <li>• Provides starting point for self-reflection</li>
                      <li>• Minimized cultural bias</li>
                      <li>• Utilizes 142k+ test data points</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">⚠️ Limitations</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Simplified personality model</li>
                      <li>• Limited contextual consideration</li>
                      <li>• Cannot replace professional assessment</li>
                      <li>• Difficulty fully reflecting individual complexity</li>
                      <li>• Doesn't account for changes over time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Support */}
            <section>
              <div className="flex items-center mb-4">
                <Lightbulb className="text-yellow-600 mr-3 h-6 w-6" />
                <h2 className="text-2xl font-bold text-gray-800">Related Research & References</h2>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">📚 Core Research</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• McCrae, R. R., & Costa, P. T. (1987). Validation of the five-factor model</li>
                      <li>• Goldberg, L. R. (1993). The structure of phenotypic personality traits</li>
                      <li>• John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy</li>
                      <li>• Soto, C. J., & John, O. P. (2017). Short and extra-short forms of the Big Five</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">🎭 Animal Symbolism Research</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Furnham, A. (1996). Animal personality research</li>
                      <li>• Gosling, S. D. (2001). From mice to men: Animal personality research</li>
                      <li>• Weiss, A., King, J. E., & Hopkins, W. D. (2007). Comparative approach</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-yellow-200 mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>Disclaimer:</strong> This test is created for educational and entertainment purposes. 
                      For serious psychological issues or important decisions, please seek professional help.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}