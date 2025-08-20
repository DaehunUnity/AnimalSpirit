import { useLanguage } from "@/contexts/language-context";
import { ChevronDown, ChevronRight, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = language === "ko" ? [
    {
      category: "테스트 관련",
      question: "동물 성격 테스트는 얼마나 정확한가요?",
      answer: "이 테스트는 심리학의 성격 유형 이론을 바탕으로 개발되었지만, 오락과 자기 탐구 목적으로 제작되었습니다. 결과는 참고용이며 전문적인 심리 검사를 대체할 수 없습니다."
    },
    {
      category: "테스트 관련",
      question: "테스트를 다시 받으면 결과가 달라질 수 있나요?",
      answer: "네, 그럴 수 있습니다. 기분이나 상황에 따라 답변이 달라질 수 있고, 시간이 지나면서 성격이 변화하기도 합니다. 여러 번 테스트해보면 더 정확한 결과를 얻을 수 있습니다."
    },
    {
      category: "테스트 관련",
      question: "질문에 애매한 답변이 있을 때는 어떻게 해야 하나요?",
      answer: "대부분의 상황에서 가장 자연스럽게 선택할 것 같은 답을 고르세요. 너무 깊게 생각하지 말고 첫 번째 직감을 따르는 것이 좋습니다."
    },
    {
      category: "개인정보",
      question: "내 테스트 결과나 개인정보가 저장되나요?",
      answer: "개인을 식별할 수 있는 정보는 저장하지 않습니다. 테스트 결과는 익명화되어 통계 목적으로만 활용됩니다. 자세한 내용은 개인정보 처리방침을 참고해주세요."
    },
    {
      category: "개인정보",
      question: "쿠키를 사용하나요?",
      answer: "네, 사용자 경험 향상을 위해 쿠키를 사용합니다. Google Analytics와 Google AdSense도 쿠키를 사용할 수 있습니다. 브라우저 설정에서 쿠키를 거부할 수 있습니다."
    },
    {
      category: "기술적 문제",
      question: "모바일에서도 잘 작동하나요?",
      answer: "네, 모든 기기(데스크톱, 태블릿, 스마트폰)에서 최적화되어 작동합니다. 만약 문제가 있다면 브라우저를 업데이트하거나 다른 브라우저를 시도해보세요."
    },
    {
      category: "기술적 문제",
      question: "테스트가 로딩되지 않아요.",
      answer: "페이지를 새로고침하거나 브라우저 캐시를 삭제해보세요. 여전히 문제가 있다면 kimtrue38@gmail.com으로 문의해주세요."
    },
    {
      category: "결과 해석",
      question: "내 결과가 마음에 들지 않아요.",
      answer: "모든 동물 유형은 고유한 장점과 특성을 가지고 있습니다. 결과는 하나의 관점일 뿐이며, 당신의 가치를 정의하지 않습니다. 다양한 상황에서 다른 면이 나타날 수 있습니다."
    },
    {
      category: "결과 해석",
      question: "동물 유형은 몇 개나 있나요?",
      answer: "총 8가지 동물 유형이 있습니다: 사자, 돌고래, 올빼미, 여우, 독수리, 판다, 고양이, 늑대. 각각은 독특한 성격 특성과 강점을 나타냅니다."
    },
    {
      category: "결과 해석",
      question: "궁합이 좋지 않은 동물과는 관계를 피해야 하나요?",
      answer: "아닙니다. 궁합 정보는 참고사항일 뿐입니다. 실제 인간관계는 훨씬 복잡하며, 서로 다른 성향이 오히려 보완적 관계를 만들 수도 있습니다."
    },
    {
      category: "서비스 이용",
      question: "테스트는 무료인가요?",
      answer: "네, 완전히 무료입니다. 광고를 통해 서비스를 운영하고 있으며, 어떠한 비용도 청구하지 않습니다."
    },
    {
      category: "서비스 이용",
      question: "회원가입이 필요한가요?",
      answer: "아니오, 회원가입 없이 바로 테스트를 받을 수 있습니다. 간단하고 편리하게 이용하실 수 있습니다."
    },
    {
      category: "서비스 이용",
      question: "결과를 친구들과 공유할 수 있나요?",
      answer: "네, 결과 페이지에서 소셜 미디어나 링크 복사를 통해 쉽게 공유할 수 있습니다. 친구들과 함께 테스트해보고 비교해보세요!"
    }
  ] : [
    {
      category: "About the Test",
      question: "How accurate is the animal personality test?",
      answer: "This test is developed based on psychological personality type theories but is created for entertainment and self-exploration purposes. Results are for reference only and cannot replace professional psychological testing."
    },
    {
      category: "About the Test",
      question: "Can results change if I retake the test?",
      answer: "Yes, they can. Your answers may vary depending on your mood or situation, and personality can change over time. Taking the test multiple times can help you get more accurate results."
    },
    {
      category: "About the Test",
      question: "What should I do when there are ambiguous answer choices?",
      answer: "Choose the answer that feels most natural for you in most situations. Don't overthink it - following your first instinct is usually best."
    },
    {
      category: "Privacy",
      question: "Are my test results or personal information stored?",
      answer: "We do not store any personally identifiable information. Test results are anonymized and used solely for statistical purposes. Please refer to our Privacy Policy for details."
    },
    {
      category: "Privacy",
      question: "Do you use cookies?",
      answer: "Yes, we use cookies to enhance user experience. Google Analytics and Google AdSense may also use cookies. You can refuse cookies in your browser settings."
    },
    {
      category: "Technical Issues",
      question: "Does it work well on mobile devices?",
      answer: "Yes, it's optimized to work on all devices (desktop, tablet, smartphone). If you experience issues, try updating your browser or using a different browser."
    },
    {
      category: "Technical Issues",
      question: "The test won't load.",
      answer: "Try refreshing the page or clearing your browser cache. If the problem persists, please contact us at kimtrue38@gmail.com."
    },
    {
      category: "Result Interpretation",
      question: "I don't like my result.",
      answer: "All animal types have unique strengths and characteristics. The result is just one perspective and doesn't define your worth. Different aspects may show in various situations."
    },
    {
      category: "Result Interpretation",
      question: "How many animal types are there?",
      answer: "There are 8 animal types in total: Lion, Dolphin, Owl, Fox, Eagle, Panda, Cat, and Wolf. Each represents unique personality traits and strengths."
    },
    {
      category: "Result Interpretation",
      question: "Should I avoid relationships with incompatible animals?",
      answer: "No. Compatibility information is just for reference. Real relationships are much more complex, and different personalities can actually create complementary relationships."
    },
    {
      category: "Service Usage",
      question: "Is the test free?",
      answer: "Yes, it's completely free. We operate the service through advertising and don't charge any fees."
    },
    {
      category: "Service Usage",
      question: "Do I need to register?",
      answer: "No, you can take the test immediately without registration. It's designed to be simple and convenient."
    },
    {
      category: "Service Usage",
      question: "Can I share my results with friends?",
      answer: "Yes, you can easily share through social media or link copying on the results page. Try taking the test with friends and compare results!"
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="text-blue-600 mr-3 h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue">
              {language === "ko" ? "자주 묻는 질문" : "Frequently Asked Questions"}
            </h1>
          </div>
          <p className="text-gray-text text-lg">
            {language === "ko" 
              ? "동물 성격 테스트에 대해 궁금한 점들을 확인해보세요." 
              : "Check out common questions about the Animal Personality Test."
            }
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold text-dark-blue mb-4 border-b-2 border-blue-100 pb-2">
              {category}
            </h2>
            
            <div className="space-y-3">
              {faqData
                .filter(item => item.category === category)
                .map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex; // Unique index
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div
                      key={globalIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium text-dark-blue pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronDown className="text-blue-600 h-5 w-5 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="text-blue-600 h-5 w-5 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 py-4 bg-white border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-dark-blue mb-3">
            {language === "ko" ? "더 궁금한 점이 있으신가요?" : "Still have questions?"}
          </h3>
          <p className="text-gray-text mb-4">
            {language === "ko" 
              ? "위에서 답을 찾지 못하셨다면 언제든 연락해주세요." 
              : "If you couldn't find your answer above, feel free to contact us anytime."
            }
          </p>
          <a
            href="mailto:kimtrue38@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📧 kimtrue38@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}