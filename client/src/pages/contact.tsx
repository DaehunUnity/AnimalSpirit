import { useLanguage } from "@/contexts/language-context";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue mb-6">
          {language === "ko" ? "문의하기" : "Contact Us"}
        </h1>

        {language === "ko" ? (
          <div className="space-y-8">
            <section>
              <p className="text-gray-text text-lg leading-relaxed mb-8">
                동물 성격 테스트에 대한 문의사항이나 피드백이 있으시면 언제든지 연락주세요. 
                더 나은 서비스를 제공하기 위해 여러분의 소중한 의견을 기다리고 있습니다.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-coral/10 to-pink/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mail className="text-coral mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">이메일 문의</h3>
                  </div>
                  <p className="text-gray-text mb-4">
                    가장 빠르고 확실한 연락 방법입니다. 24시간 내에 답변드리겠습니다.
                  </p>
                  <a 
                    href="mailto:kimtrue38@gmail.com"
                    className="text-coral font-semibold hover:underline"
                  >
                    kimtrue38@gmail.com
                  </a>
                </div>

                <div className="bg-gradient-to-br from-teal/10 to-sky/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Clock className="text-teal mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">응답 시간</h3>
                  </div>
                  <ul className="text-gray-text space-y-2">
                    <li>• 일반 문의: 24시간 내</li>
                    <li>• 기술적 문제: 12시간 내</li>
                    <li>• 긴급 문의: 6시간 내</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-mint/10 to-golden/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="text-golden mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">문의 유형</h3>
                  </div>
                  <ul className="text-gray-text space-y-2">
                    <li>• 테스트 결과 관련 문의</li>
                    <li>• 기술적 오류 신고</li>
                    <li>• 개선사항 제안</li>
                    <li>• 비즈니스 문의</li>
                    <li>• 기타 피드백</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-golden/10 to-coral/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-coral mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">서비스 지역</h3>
                  </div>
                  <p className="text-gray-text">
                    전 세계 어디에서나 이용 가능한 온라인 서비스입니다. 
                    한국어와 영어로 지원해드립니다.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-blue mb-4">자주 묻는 질문</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-dark-blue mb-2">Q: 테스트 결과가 정확한가요?</h4>
                  <p className="text-gray-text text-sm">
                    A: 이 테스트는 재미있고 교육적인 목적으로 제작되었습니다. 
                    전문적인 심리 검사의 대체재가 아닌 자기 탐구의 도구로 활용해주세요.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-dark-blue mb-2">Q: 개인정보가 저장되나요?</h4>
                  <p className="text-gray-text text-sm">
                    A: 개인을 식별할 수 있는 정보는 저장하지 않습니다. 
                    테스트 결과는 익명화되어 통계 목적으로만 활용됩니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-dark-blue mb-2">Q: 모바일에서도 잘 작동하나요?</h4>
                  <p className="text-gray-text text-sm">
                    A: 네, 모든 기기(데스크톱, 태블릿, 스마트폰)에서 최적화되어 작동합니다.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h3 className="text-xl font-semibold text-dark-blue mb-4">빠른 문의</h3>
              <Button 
                className="bg-gradient-to-r from-coral to-teal text-white font-poppins font-semibold text-lg px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:kimtrue38@gmail.com?subject=동물 성격 테스트 문의'}
              >
                <Mail className="mr-2 h-5 w-5" />
                이메일로 문의하기
              </Button>
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            <section>
              <p className="text-gray-text text-lg leading-relaxed mb-8">
                If you have any questions or feedback about the Animal Personality Test, please feel free to contact us anytime. 
                We're waiting for your valuable opinions to provide better service.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-coral/10 to-pink/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mail className="text-coral mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">Email Inquiry</h3>
                  </div>
                  <p className="text-gray-text mb-4">
                    The fastest and most reliable way to contact us. We'll respond within 24 hours.
                  </p>
                  <a 
                    href="mailto:kimtrue38@gmail.com"
                    className="text-coral font-semibold hover:underline"
                  >
                    kimtrue38@gmail.com
                  </a>
                </div>

                <div className="bg-gradient-to-br from-teal/10 to-sky/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Clock className="text-teal mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">Response Time</h3>
                  </div>
                  <ul className="text-gray-text space-y-2">
                    <li>• General inquiries: Within 24 hours</li>
                    <li>• Technical issues: Within 12 hours</li>
                    <li>• Urgent matters: Within 6 hours</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-mint/10 to-golden/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="text-golden mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">Inquiry Types</h3>
                  </div>
                  <ul className="text-gray-text space-y-2">
                    <li>• Test result related questions</li>
                    <li>• Technical error reports</li>
                    <li>• Improvement suggestions</li>
                    <li>• Business inquiries</li>
                    <li>• Other feedback</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-golden/10 to-coral/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-coral mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-dark-blue">Service Area</h3>
                  </div>
                  <p className="text-gray-text">
                    Online service available worldwide. 
                    We provide support in Korean and English.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-blue mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-dark-blue mb-2">Q: Are the test results accurate?</h4>
                  <p className="text-gray-text text-sm">
                    A: This test is created for fun and educational purposes. 
                    Please use it as a tool for self-exploration, not as a substitute for professional psychological testing.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-dark-blue mb-2">Q: Is personal information stored?</h4>
                  <p className="text-gray-text text-sm">
                    A: We do not store any personally identifiable information. 
                    Test results are anonymized and used solely for statistical purposes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-dark-blue mb-2">Q: Does it work well on mobile?</h4>
                  <p className="text-gray-text text-sm">
                    A: Yes, it's optimized to work on all devices (desktop, tablet, smartphone).
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h3 className="text-xl font-semibold text-dark-blue mb-4">Quick Inquiry</h3>
              <Button 
                className="bg-gradient-to-r from-coral to-teal text-white font-poppins font-semibold text-lg px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:kimtrue38@gmail.com?subject=Animal Personality Test Inquiry'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email Inquiry
              </Button>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}