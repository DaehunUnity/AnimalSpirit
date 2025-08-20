import { useLanguage } from "@/contexts/language-context";
import { Briefcase, TrendingUp, Users, Star, Building, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Careers() {
  const { language } = useLanguage();
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);

  const animalCareers = language === "ko" ? {
    lion: {
      name: "사자",
      emoji: "🦁",
      subtitle: "타고난 리더",
      idealCareers: [
        { title: "CEO / 임원", description: "기업 최고 경영진으로서 전략적 의사결정과 조직 운영", salary: "1억~20억+" },
        { title: "프로젝트 매니저", description: "복잡한 프로젝트를 이끌고 팀을 조율하는 역할", salary: "6천만~1억2천만" },
        { title: "세일즈 디렉터", description: "영업 조직을 이끌고 매출 목표 달성", salary: "8천만~2억" },
        { title: "창업가 / 사업가", description: "새로운 비즈니스를 시작하고 성장시키는 기업가", salary: "변동적" },
        { title: "정치인 / 공직자", description: "공공 정책을 만들고 사회를 이끄는 리더", salary: "5천만~1억" },
        { title: "변호사 (리티게이션)", description: "법정에서 고객을 대변하는 소송 변호사", salary: "1억~5억+" }
      ],
      workEnvironment: [
        "높은 자율성과 의사결정 권한",
        "도전적이고 성과 중심적인 분위기",
        "빠른 변화와 동적인 환경",
        "리더십을 발휘할 수 있는 기회"
      ],
      skills: ["전략적 사고", "의사결정력", "커뮤니케이션", "문제해결력"]
    },
    dolphin: {
      name: "돌고래",
      emoji: "🐬",
      subtitle: "즐거운 연결자",
      idealCareers: [
        { title: "교사 / 강사", description: "학생들에게 지식을 전달하고 성장을 돕는 교육자", salary: "4천만~7천만" },
        { title: "상담사 / 코치", description: "개인의 심리적 문제나 목표 달성을 지원", salary: "3천만~8천만" },
        { title: "HR 담당자", description: "직원 채용, 교육, 복지를 담당하는 인사 전문가", salary: "5천만~9천만" },
        { title: "마케팅 전문가", description: "브랜드와 고객을 연결하는 마케팅 전략 수립", salary: "5천만~1억2천만" },
        { title: "사회복지사", description: "취약계층을 돕고 사회 문제를 해결하는 전문가", salary: "3천만~5천만" },
        { title: "이벤트 플래너", description: "다양한 행사와 이벤트를 기획하고 운영", salary: "4천만~8천만" }
      ],
      workEnvironment: [
        "협업과 팀워크가 중시되는 문화",
        "긍정적이고 지원적인 분위기",
        "사람들과 소통할 수 있는 기회",
        "창의적 아이디어를 공유하는 환경"
      ],
      skills: ["감정 지능", "커뮤니케이션", "팀워크", "공감 능력"]
    },
    owl: {
      name: "올빼미",
      emoji: "🦉",
      subtitle: "지혜로운 관찰자",
      idealCareers: [
        { title: "연구원 / 과학자", description: "새로운 지식을 발견하고 연구하는 전문가", salary: "5천만~1억5천만" },
        { title: "데이터 분석가", description: "복잡한 데이터를 분석해 인사이트를 도출", salary: "6천만~1억4천만" },
        { title: "소프트웨어 개발자", description: "프로그래밍을 통해 시스템과 앱을 개발", salary: "5천만~2억+" },
        { title: "교수 / 학자", description: "대학에서 연구하고 학생들을 가르치는 학자", salary: "6천만~1억5천만" },
        { title: "컨설턴트", description: "전문 지식으로 기업 문제 해결을 돕는 전문가", salary: "8천만~3억+" },
        { title: "회계사 / 감사", description: "재무 정보를 분석하고 검증하는 전문가", salary: "5천만~1억2천만" }
      ],
      workEnvironment: [
        "조용하고 집중할 수 있는 작업 공간",
        "충분한 분석과 사고 시간 제공",
        "전문성이 인정받는 환경",
        "지속적인 학습 기회 제공"
      ],
      skills: ["분석적 사고", "문제 해결", "연구 능력", "논리적 추론"]
    },
    fox: {
      name: "여우",
      emoji: "🦊",
      subtitle: "영리한 전략가",
      idealCareers: [
        { title: "제품 기획자", description: "시장 요구를 분석해 새로운 제품을 기획", salary: "7천만~1억8천만" },
        { title: "크리에이티브 디렉터", description: "창의적 프로젝트의 전체적인 방향을 주도", salary: "8천만~2억5천만" },
        { title: "전략 컨설턴트", description: "기업의 전략적 문제 해결을 위한 조언 제공", salary: "1억~5억+" },
        { title: "스타트업 창업자", description: "혁신적인 아이디어로 새로운 기업을 설립", salary: "변동적" },
        { title: "디자이너", description: "시각적, 기능적으로 뛰어난 디자인 창조", salary: "4천만~1억5천만" },
        { title: "마케팅 전략가", description: "브랜드 전략과 마케팅 캠페인을 설계", salary: "7천만~2억" }
      ],
      workEnvironment: [
        "자유롭고 유연한 근무 환경",
        "창의적 사고가 장려되는 문화",
        "다양한 프로젝트와 새로운 도전",
        "혁신을 추진할 수 있는 여건"
      ],
      skills: ["창의적 사고", "전략 수립", "적응력", "혁신 능력"]
    },
    eagle: {
      name: "독수리",
      emoji: "🦅",
      subtitle: "비전을 가진 성취자",
      idealCareers: [
        { title: "투자자 / 펀드매니저", description: "자금을 운용하고 투자 결정을 내리는 전문가", salary: "1억~10억+" },
        { title: "독립 사업가", description: "자신만의 비즈니스를 운영하는 기업가", salary: "변동적" },
        { title: "세일즈 리더", description: "높은 성과를 추구하는 영업 전문가", salary: "8천만~3억+" },
        { title: "부동산 개발업자", description: "부동산 프로젝트를 기획하고 개발", salary: "1억~수십억" },
        { title: "경영진 (C-Level)", description: "기업의 최고 경영진으로서 전략적 의사결정", salary: "2억~50억+" },
        { title: "프리랜서 전문가", description: "전문 분야에서 독립적으로 활동하는 전문가", salary: "5천만~3억+" }
      ],
      workEnvironment: [
        "높은 성과와 결과가 인정받는 곳",
        "경쟁적이고 도전적인 분위기",
        "개인의 능력에 따른 보상",
        "빠른 성장과 승진 기회"
      ],
      skills: ["목표 설정", "성과 달성", "독립성", "추진력"]
    },
    panda: {
      name: "판다",
      emoji: "🐼",
      subtitle: "평화로운 조화자",
      idealCareers: [
        { title: "상담사 / 치료사", description: "개인의 심리적 문제 해결을 돕는 전문가", salary: "4천만~8천만" },
        { title: "명상 지도자", description: "명상과 마음챙김을 가르치는 지도자", salary: "3천만~7천만" },
        { title: "도서관 사서", description: "도서관 운영과 정보 서비스를 담당", salary: "3천만~5천만" },
        { title: "환경 보호 활동가", description: "환경 보호와 지속가능성을 위한 활동", salary: "3천만~6천만" },
        { title: "예술가 / 공예가", description: "창작 활동을 통해 예술적 가치를 창조", salary: "변동적" },
        { title: "요가 강사", description: "요가와 웰빙 프로그램을 지도", salary: "3천만~6천만" }
      ],
      workEnvironment: [
        "평화롭고 스트레스가 적은 환경",
        "협력적이고 지원적인 문화",
        "워라밸이 잘 보장되는 곳",
        "의미와 가치가 있는 일"
      ],
      skills: ["평화 조정", "스트레스 관리", "균형 감각", "공감 능력"]
    },
    cat: {
      name: "고양이",
      emoji: "🐱",
      subtitle: "독립적인 예술가",
      idealCareers: [
        { title: "작가 / 시인", description: "창작을 통해 문학적 가치를 만드는 예술가", salary: "변동적" },
        { title: "예술가 / 디자이너", description: "시각예술이나 디자인 분야의 창작자", salary: "3천만~2억+" },
        { title: "프리랜서", description: "다양한 분야에서 독립적으로 활동", salary: "변동적" },
        { title: "사진작가", description: "사진을 통해 예술적 표현을 하는 전문가", salary: "3천만~1억+" },
        { title: "인테리어 디자이너", description: "공간을 아름답고 기능적으로 설계", salary: "4천만~1억5천만" },
        { title: "큐레이터", description: "예술품과 전시를 기획하고 관리하는 전문가", salary: "4천만~8천만" }
      ],
      workEnvironment: [
        "창의적이고 미적인 작업 공간",
        "유연한 근무 시간과 방식",
        "개인 작업에 집중할 수 있는 환경",
        "자율성과 독립성이 보장되는 곳"
      ],
      skills: ["창의성", "미적 감각", "독립성", "직관력"]
    },
    wolf: {
      name: "늑대",
      emoji: "🐺",
      subtitle: "충실한 수호자",
      idealCareers: [
        { title: "팀 리더 / 매니저", description: "팀을 이끌고 구성원들을 지원하는 관리자", salary: "6천만~1억5천만" },
        { title: "간호사", description: "환자를 돌보고 치료를 돕는 의료 전문가", salary: "4천만~7천만" },
        { title: "소방관 / 구급대원", description: "생명을 구하고 안전을 지키는 공공서비스", salary: "4천만~7천만" },
        { title: "상담사 / 사회복지사", description: "어려운 사람들을 돕고 지원하는 전문가", salary: "3천만~6천만" },
        { title: "교사 / 코치", description: "학생이나 선수를 가르치고 성장시키는 교육자", salary: "4천만~8천만" },
        { title: "비영리단체 활동가", description: "사회적 가치 실현을 위해 활동하는 전문가", salary: "3천만~6천만" }
      ],
      workEnvironment: [
        "강한 팀워크와 동료애",
        "신뢰와 충성심이 중시되는 문화",
        "명확한 사명감과 목적의식",
        "타인을 도울 수 있는 기회"
      ],
      skills: ["충성심", "팀워크", "보호 본능", "헌신"]
    }
  } : {
    lion: {
      name: "Lion",
      emoji: "🦁",
      subtitle: "The Natural Born Leader",
      idealCareers: [
        { title: "CEO / Executive", description: "Top corporate leadership making strategic decisions", salary: "$150k-$2M+" },
        { title: "Project Manager", description: "Leading complex projects and coordinating teams", salary: "$80k-$150k" },
        { title: "Sales Director", description: "Leading sales organizations to achieve targets", salary: "$120k-$300k" },
        { title: "Entrepreneur", description: "Starting and growing new businesses", salary: "Variable" },
        { title: "Politician / Public Leader", description: "Creating public policy and leading society", salary: "$80k-$200k" },
        { title: "Litigation Lawyer", description: "Representing clients in court proceedings", salary: "$150k-$500k+" }
      ],
      workEnvironment: [
        "High autonomy and decision-making authority",
        "Challenging and performance-driven atmosphere",
        "Fast-paced and dynamic environment",
        "Opportunities to demonstrate leadership"
      ],
      skills: ["Strategic thinking", "Decision-making", "Communication", "Problem-solving"]
    },
    dolphin: {
      name: "Dolphin",
      emoji: "🐬",
      subtitle: "The Joyful Connector",
      idealCareers: [
        { title: "Teacher / Instructor", description: "Educating and helping students grow", salary: "$50k-$80k" },
        { title: "Counselor / Coach", description: "Supporting personal growth and problem-solving", salary: "$45k-$100k" },
        { title: "HR Specialist", description: "Managing recruitment, training, and employee welfare", salary: "$60k-$120k" },
        { title: "Marketing Professional", description: "Developing strategies to connect brands with customers", salary: "$60k-$150k" },
        { title: "Social Worker", description: "Helping vulnerable populations and solving social issues", salary: "$40k-$70k" },
        { title: "Event Planner", description: "Planning and organizing various events", salary: "$50k-$100k" }
      ],
      workEnvironment: [
        "Collaborative and teamwork-focused culture",
        "Positive and supportive atmosphere",
        "Opportunities to communicate with people",
        "Environment for sharing creative ideas"
      ],
      skills: ["Emotional intelligence", "Communication", "Teamwork", "Empathy"]
    },
    owl: {
      name: "Owl",
      emoji: "🦉",
      subtitle: "The Wise Observer",
      idealCareers: [
        { title: "Researcher / Scientist", description: "Discovering and researching new knowledge", salary: "$70k-$180k" },
        { title: "Data Analyst", description: "Analyzing complex data to derive insights", salary: "$80k-$160k" },
        { title: "Software Developer", description: "Creating systems and applications through programming", salary: "$70k-$250k+" },
        { title: "Professor / Scholar", description: "Researching and teaching students at universities", salary: "$80k-$180k" },
        { title: "Consultant", description: "Helping solve business problems with expertise", salary: "$100k-$400k+" },
        { title: "Accountant / Auditor", description: "Analyzing and verifying financial information", salary: "$60k-$150k" }
      ],
      workEnvironment: [
        "Quiet workspace for concentration",
        "Adequate time for analysis and thinking",
        "Environment where expertise is recognized",
        "Continuous learning opportunities"
      ],
      skills: ["Analytical thinking", "Problem solving", "Research abilities", "Logical reasoning"]
    },
    fox: {
      name: "Fox",
      emoji: "🦊",
      subtitle: "The Clever Strategist",
      idealCareers: [
        { title: "Product Manager", description: "Analyzing market needs and planning new products", salary: "$90k-$200k" },
        { title: "Creative Director", description: "Leading overall direction of creative projects", salary: "$100k-$300k" },
        { title: "Strategy Consultant", description: "Providing strategic problem-solving advice", salary: "$120k-$500k+" },
        { title: "Startup Founder", description: "Establishing new companies with innovative ideas", salary: "Variable" },
        { title: "Designer", description: "Creating visually and functionally excellent designs", salary: "$50k-$180k" },
        { title: "Marketing Strategist", description: "Designing brand strategies and campaigns", salary: "$80k-$250k" }
      ],
      workEnvironment: [
        "Free and flexible work environment",
        "Culture encouraging creative thinking",
        "Diverse projects and new challenges",
        "Conditions to drive innovation"
      ],
      skills: ["Creative thinking", "Strategy development", "Adaptability", "Innovation"]
    },
    eagle: {
      name: "Eagle",
      emoji: "🦅",
      subtitle: "The Visionary Achiever",
      idealCareers: [
        { title: "Investor / Fund Manager", description: "Managing funds and making investment decisions", salary: "$150k-$1M+" },
        { title: "Independent Entrepreneur", description: "Running own business ventures", salary: "Variable" },
        { title: "Sales Leader", description: "High-performing sales professional", salary: "$100k-$400k+" },
        { title: "Real Estate Developer", description: "Planning and developing real estate projects", salary: "$120k-$Multi-million" },
        { title: "C-Level Executive", description: "Top corporate leadership making strategic decisions", salary: "$250k-$5M+" },
        { title: "Freelance Expert", description: "Independent professional in specialized field", salary: "$60k-$400k+" }
      ],
      workEnvironment: [
        "High performance and results recognition",
        "Competitive and challenging atmosphere",
        "Performance-based compensation",
        "Fast growth and promotion opportunities"
      ],
      skills: ["Goal setting", "Achievement", "Independence", "Drive"]
    },
    panda: {
      name: "Panda",
      emoji: "🐼",
      subtitle: "The Peaceful Harmonizer",
      idealCareers: [
        { title: "Counselor / Therapist", description: "Helping solve personal psychological problems", salary: "$50k-$100k" },
        { title: "Meditation Teacher", description: "Teaching meditation and mindfulness", salary: "$40k-$80k" },
        { title: "Librarian", description: "Managing libraries and information services", salary: "$40k-$70k" },
        { title: "Environmental Activist", description: "Working for environmental protection and sustainability", salary: "$35k-$75k" },
        { title: "Artist / Craftsperson", description: "Creating artistic value through creative work", salary: "Variable" },
        { title: "Yoga Instructor", description: "Teaching yoga and wellness programs", salary: "$35k-$75k" }
      ],
      workEnvironment: [
        "Peaceful and low-stress environment",
        "Collaborative and supportive culture",
        "Good work-life balance",
        "Meaningful and valuable work"
      ],
      skills: ["Peace mediation", "Stress management", "Balance", "Empathy"]
    },
    cat: {
      name: "Cat",
      emoji: "🐱",
      subtitle: "The Independent Artist",
      idealCareers: [
        { title: "Writer / Poet", description: "Creating literary value through writing", salary: "Variable" },
        { title: "Artist / Designer", description: "Creator in visual arts or design fields", salary: "$40k-$250k+" },
        { title: "Freelancer", description: "Independent work in various fields", salary: "Variable" },
        { title: "Photographer", description: "Artistic expression through photography", salary: "$40k-$150k+" },
        { title: "Interior Designer", description: "Designing beautiful and functional spaces", salary: "$50k-$180k" },
        { title: "Curator", description: "Planning and managing art exhibitions", salary: "$50k-$100k" }
      ],
      workEnvironment: [
        "Creative and aesthetic workspace",
        "Flexible working hours and methods",
        "Environment for focused individual work",
        "Autonomy and independence guaranteed"
      ],
      skills: ["Creativity", "Aesthetic sense", "Independence", "Intuition"]
    },
    wolf: {
      name: "Wolf",
      emoji: "🐺",
      subtitle: "The Loyal Guardian",
      idealCareers: [
        { title: "Team Leader / Manager", description: "Leading teams and supporting members", salary: "$80k-$180k" },
        { title: "Nurse", description: "Caring for patients and assisting in treatment", salary: "$50k-$90k" },
        { title: "Firefighter / Paramedic", description: "Saving lives and ensuring public safety", salary: "$50k-$90k" },
        { title: "Counselor / Social Worker", description: "Helping and supporting those in need", salary: "$40k-$80k" },
        { title: "Teacher / Coach", description: "Educating and developing students or athletes", salary: "$45k-$100k" },
        { title: "Non-profit Activist", description: "Working to realize social values", salary: "$35k-$80k" }
      ],
      workEnvironment: [
        "Strong teamwork and camaraderie",
        "Culture valuing trust and loyalty",
        "Clear sense of mission and purpose",
        "Opportunities to help others"
      ],
      skills: ["Loyalty", "Teamwork", "Protective instinct", "Dedication"]
    }
  };

  const animals = Object.keys(animalCareers);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Briefcase className="text-indigo-600 mr-3 h-8 w-8" />
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue">
            {language === "ko" ? "동물 성격별 직업 가이드" : "Career Guide by Animal Personality"}
          </h1>
        </div>
        <p className="text-gray-text text-lg max-w-3xl mx-auto">
          {language === "ko" 
            ? "당신의 동물 성격에 맞는 이상적인 직업과 업무 환경을 탐색해보세요. 성격 특성에 기반한 커리어 조언을 제공합니다." 
            : "Explore ideal careers and work environments that match your animal personality. Get career advice based on your personality traits."
          }
        </p>
      </div>

      {/* Animal Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {animals.map((animalKey) => {
          const animal = animalCareers[animalKey as keyof typeof animalCareers];
          return (
            <button
              key={animalKey}
              onClick={() => setSelectedAnimal(animalKey)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedAnimal === animalKey
                  ? 'border-indigo-500 bg-indigo-50 shadow-lg scale-105'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              <div className="text-4xl mb-2">{animal.emoji}</div>
              <div className="text-sm font-medium text-gray-800">{animal.name}</div>
            </button>
          );
        })}
      </div>

      {/* Career Details */}
      {selectedAnimal && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {animalCareers[selectedAnimal as keyof typeof animalCareers].emoji}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {animalCareers[selectedAnimal as keyof typeof animalCareers].name}
            </h2>
            <p className="text-xl text-gray-600">
              {animalCareers[selectedAnimal as keyof typeof animalCareers].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ideal Careers */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Star className="text-yellow-600 mr-3 h-6 w-6" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {language === "ko" ? "추천 직업" : "Recommended Careers"}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {animalCareers[selectedAnimal as keyof typeof animalCareers].idealCareers.map((career, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">{career.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{career.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {language === "ko" ? "예상 연봉" : "Salary Range"}
                      </span>
                      <span className="font-medium text-green-600">{career.salary}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Environment & Skills */}
            <div className="space-y-6">
              {/* Work Environment */}
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Building className="text-green-600 mr-3 h-5 w-5" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {language === "ko" ? "이상적인 업무 환경" : "Ideal Work Environment"}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {animalCareers[selectedAnimal as keyof typeof animalCareers].workEnvironment.map((env, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      {env}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Skills */}
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="text-orange-600 mr-3 h-5 w-5" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {language === "ko" ? "핵심 역량" : "Key Skills"}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {animalCareers[selectedAnimal as keyof typeof animalCareers].skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Development Tips */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-purple-600 mr-3 h-5 w-5" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {language === "ko" ? "커리어 발전 팁" : "Career Development Tips"}
                  </h4>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  {language === "ko" ? (
                    <>
                      <p>• 자신의 강점을 살릴 수 있는 역할을 찾으세요</p>
                      <p>• 네트워킹을 통해 기회를 확장하세요</p>
                      <p>• 지속적인 학습과 스킬 개발을 추구하세요</p>
                      <p>• 업무 환경이 성격과 맞는지 고려하세요</p>
                    </>
                  ) : (
                    <>
                      <p>• Find roles that leverage your strengths</p>
                      <p>• Expand opportunities through networking</p>
                      <p>• Pursue continuous learning and skill development</p>
                      <p>• Consider if work environment matches your personality</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {language === "ko" ? "아직 자신의 동물 유형을 모르시나요?" : "Don't know your animal type yet?"}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === "ko" 
                ? "3분만에 나만의 동물 성격을 발견하고 맞춤 직업 추천을 받아보세요!" 
                : "Discover your animal personality in 3 minutes and get personalized career recommendations!"
              }
            </p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                {language === "ko" ? "성격 테스트 하러가기" : "Take Personality Test"}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}