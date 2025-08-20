import { useLanguage } from "@/contexts/language-context";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue mb-6">
          {language === "ko" ? "개인정보 처리방침" : "Privacy Policy"}
        </h1>

        {language === "ko" ? (
          <div className="prose max-w-none text-gray-text">
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">최종 업데이트: 2025년 1월 20일</p>
              
              <h2 className="text-xl font-semibold text-dark-blue mb-4">1. 개인정보 수집 및 이용</h2>
              <h3 className="text-lg font-medium text-dark-blue mb-2">1.1 수집하는 개인정보</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보가 생성되어 수집될 수 있습니다.</li>
                <li>성격 테스트 결과는 개인을 식별할 수 없는 익명화된 형태로 통계 목적으로만 활용됩니다.</li>
              </ul>

              <h3 className="text-lg font-medium text-dark-blue mb-2">1.2 개인정보 이용 목적</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>서비스 제공 및 운영</li>
                <li>서비스 개선 및 통계 분석</li>
                <li>부정 이용 방지</li>
              </ul>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">2. 개인정보 보유 및 이용 기간</h2>
              <p className="mb-6">수집된 개인정보는 이용 목적이 달성된 후 지체없이 파기됩니다. 단, 법령에 의해 보관이 필요한 경우 해당 법령에 따라 보관합니다.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">3. 개인정보 제3자 제공</h2>
              <p className="mb-6">회사는 개인정보를 제3자에게 제공하지 않습니다. 단, 다음의 경우는 예외로 합니다:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                <li>공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우</li>
              </ul>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">4. 쿠키 사용</h2>
              <p className="mb-6">본 웹사이트는 사용자 경험 향상을 위해 쿠키를 사용합니다. 쿠키는 웹사이트 방문 시 브라우저에 저장되는 작은 텍스트 파일입니다.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">5. Google Analytics</h2>
              <p className="mb-6">본 웹사이트는 Google Analytics를 사용하여 웹사이트 이용 통계를 수집합니다. Google Analytics는 쿠키를 사용하여 익명화된 정보를 수집합니다.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">6. Google AdSense</h2>
              <p className="mb-6">본 웹사이트는 Google AdSense를 통해 광고를 게재합니다. Google은 광고 서비스 제공을 위해 쿠키를 사용할 수 있습니다.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">7. 개인정보보호 책임자</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p><strong>이메일:</strong> kimtrue38@gmail.com</p>
                <p><strong>담당 업무:</strong> 개인정보 보호 업무 총괄, 개인정보 처리 관련 고충처리</p>
              </div>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">8. 개인정보 처리방침 변경</h2>
              <p className="mb-6">본 개인정보 처리방침은 2025년 1월 20일부터 적용됩니다. 개인정보 처리방침이 변경되는 경우 웹사이트를 통해 고지하겠습니다.</p>
            </div>
          </div>
        ) : (
          <div className="prose max-w-none text-gray-text">
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">Last updated: January 20, 2025</p>
              
              <h2 className="text-xl font-semibold text-dark-blue mb-4">1. Information Collection and Use</h2>
              <h3 className="text-lg font-medium text-dark-blue mb-2">1.1 Information We Collect</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>During service usage, IP addresses, cookies, service usage records, and device information may be automatically collected.</li>
                <li>Personality test results are anonymized and used solely for statistical purposes without personal identification.</li>
              </ul>

              <h3 className="text-lg font-medium text-dark-blue mb-2">1.2 Purpose of Information Use</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Service provision and operation</li>
                <li>Service improvement and statistical analysis</li>
                <li>Prevention of fraudulent use</li>
              </ul>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">2. Data Retention Period</h2>
              <p className="mb-6">Collected personal information is deleted without delay after the purpose of use is achieved. However, information may be retained as required by applicable laws.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">3. Third-Party Data Sharing</h2>
              <p className="mb-6">We do not share personal information with third parties, except in the following cases:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>When required by law or to comply with legal obligations</li>
                <li>When necessary for public institutions to perform their statutory duties</li>
              </ul>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">4. Cookie Usage</h2>
              <p className="mb-6">This website uses cookies to enhance user experience. Cookies are small text files stored in your browser when you visit our website.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">5. Google Analytics</h2>
              <p className="mb-6">This website uses Google Analytics to collect website usage statistics. Google Analytics uses cookies to collect anonymized information.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">6. Google AdSense</h2>
              <p className="mb-6">This website displays advertisements through Google AdSense. Google may use cookies to provide advertising services.</p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">7. Data Protection Officer</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p><strong>Email:</strong> kimtrue38@gmail.com</p>
                <p><strong>Responsibilities:</strong> Overall data protection management and handling privacy-related complaints</p>
              </div>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">8. Privacy Policy Changes</h2>
              <p className="mb-6">This Privacy Policy is effective from January 20, 2025. Any changes to this privacy policy will be announced through our website.</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}