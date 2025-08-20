import { useLanguage } from "@/contexts/language-context";

export default function TermsOfService() {
  const { language } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue mb-6">
          {language === "ko" ? "이용약관" : "Terms of Service"}
        </h1>

        {language === "ko" ? (
          <div className="prose max-w-none text-gray-text">
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">최종 업데이트: 2025년 1월 20일</p>
              
              <h2 className="text-xl font-semibold text-dark-blue mb-4">제1조 (목적)</h2>
              <p className="mb-6">
                본 약관은 동물 성격 테스트 웹사이트(이하 "서비스")를 이용함에 있어 서비스 제공자와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제2조 (정의)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">"서비스"란 동물 성격 테스트 및 관련 정보를 제공하는 웹사이트를 의미합니다.</li>
                <li className="mb-2">"이용자"란 본 약관에 따라 서비스를 이용하는 자를 의미합니다.</li>
                <li className="mb-2">"콘텐츠"란 서비스에서 제공하는 모든 정보, 텍스트, 이미지, 동영상 등을 의미합니다.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제3조 (약관의 효력 및 변경)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</li>
                <li className="mb-2">서비스 제공자는 필요에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.</li>
                <li className="mb-2">이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제4조 (서비스의 제공)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">서비스는 동물 성격 테스트를 통해 이용자의 성격 유형을 분석하고 결과를 제공합니다.</li>
                <li className="mb-2">서비스는 24시간 이용 가능하나, 시스템 점검, 서버 장애 등으로 일시 중단될 수 있습니다.</li>
                <li className="mb-2">서비스 제공자는 서비스 개선을 위해 기능을 추가하거나 변경할 수 있습니다.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제5조 (이용자의 의무)</h2>
              <p className="mb-4">이용자는 다음 행위를 하여서는 안 됩니다:</p>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">서비스의 정상적인 운영을 방해하는 행위</li>
                <li className="mb-2">다른 이용자의 개인정보를 수집, 저장, 공개하는 행위</li>
                <li className="mb-2">서비스를 상업적 목적으로 이용하는 행위</li>
                <li className="mb-2">저작권 등 타인의 권리를 침해하는 행위</li>
                <li className="mb-2">법령에 위반되는 행위</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제6조 (지적재산권)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">서비스에 포함된 모든 콘텐츠의 저작권은 서비스 제공자에게 있습니다.</li>
                <li className="mb-2">이용자는 서비스를 이용함으로써 얻은 정보를 서비스 제공자의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제7조 (면책조항)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">서비스 제공자는 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.</li>
                <li className="mb-2">성격 테스트 결과는 오락 목적이며, 전문적인 심리 상담의 대체재가 될 수 없습니다.</li>
                <li className="mb-2">서비스 제공자는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제8조 (분쟁해결)</h2>
              <p className="mb-6">
                서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우, 서비스 제공자의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
              </p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">제9조 (기타)</h2>
              <p className="mb-6">
                본 약관에서 정하지 아니한 사항과 본 약관의 해석에 관하여는 대한민국 관련 법령 또는 상관례에 따릅니다.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>문의사항:</strong> kimtrue38@gmail.com</p>
                <p><strong>시행일자:</strong> 2025년 1월 20일</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="prose max-w-none text-gray-text">
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">Last updated: January 20, 2025</p>
              
              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 1 (Purpose)</h2>
              <p className="mb-6">
                These Terms of Service aim to define the rights, obligations, responsibilities, and other necessary matters between the service provider and users regarding the use of the Animal Personality Test website (the "Service").
              </p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 2 (Definitions)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">"Service" refers to the website that provides animal personality tests and related information.</li>
                <li className="mb-2">"User" refers to any person who uses the Service in accordance with these Terms.</li>
                <li className="mb-2">"Content" refers to all information, text, images, videos, etc. provided by the Service.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 3 (Effectiveness and Amendment of Terms)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">These Terms take effect for all users who wish to use the Service.</li>
                <li className="mb-2">The Service provider may amend these Terms as necessary, and amended Terms become effective upon posting on the website.</li>
                <li className="mb-2">Users who disagree with the amended Terms may discontinue using the Service.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 4 (Service Provision)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">The Service analyzes users' personality types through animal personality tests and provides results.</li>
                <li className="mb-2">The Service is available 24 hours a day but may be temporarily suspended due to system maintenance, server failures, etc.</li>
                <li className="mb-2">The Service provider may add or modify features to improve the Service.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 5 (User Obligations)</h2>
              <p className="mb-4">Users shall not engage in the following activities:</p>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">Activities that interfere with the normal operation of the Service</li>
                <li className="mb-2">Collecting, storing, or disclosing other users' personal information</li>
                <li className="mb-2">Using the Service for commercial purposes</li>
                <li className="mb-2">Infringing on copyrights or other rights of third parties</li>
                <li className="mb-2">Activities that violate applicable laws</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 6 (Intellectual Property Rights)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">The copyright of all content included in the Service belongs to the Service provider.</li>
                <li className="mb-2">Users may not reproduce, transmit, publish, distribute, broadcast, or otherwise use information obtained through the Service for commercial purposes or allow third parties to use it without prior consent from the Service provider.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 7 (Disclaimer)</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">The Service provider shall be exempted from responsibility for Service provision when unable to provide the Service due to natural disasters, wars, or other force majeure events.</li>
                <li className="mb-2">Personality test results are for entertainment purposes and cannot substitute professional psychological counseling.</li>
                <li className="mb-2">The Service provider shall not be liable for Service usage disruptions caused by users' fault.</li>
              </ol>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 8 (Dispute Resolution)</h2>
              <p className="mb-6">
                In case of litigation arising from Service usage disputes, the court with jurisdiction over the Service provider's headquarters shall be the competent court.
              </p>

              <h2 className="text-xl font-semibold text-dark-blue mb-4">Article 9 (Miscellaneous)</h2>
              <p className="mb-6">
                Matters not stipulated in these Terms and interpretation of these Terms shall be governed by relevant laws of the Republic of Korea or commercial customs.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Contact:</strong> kimtrue38@gmail.com</p>
                <p><strong>Effective Date:</strong> January 20, 2025</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}