export type Language = 'ko' | 'en';

export interface Translations {
  // Header
  appTitle: string;
  testTakenCount: string;
  
  // Home page
  heroTitle: string;
  heroSubtitle: string;
  startTest: string;
  minutes: string;
  taken: string;
  easySharing: string;
  freeTest: string;
  
  // Quiz
  progress: string;
  previous: string;
  next: string;
  seeResults: string;
  loadingQuestions: string;
  calculatingMatch: string;
  
  // Results
  testComplete: string;
  perfectMatch: string;
  matchScore: string;
  personality: string;
  perfectFit: string;
  personalityOverview: string;
  yourStrengths: string;
  compatibleAnimals: string;
  shareResult: string;
  takeTestAgain: string;
  
  // Social sharing
  facebook: string;
  twitter: string;
  whatsapp: string;
  copyLink: string;
  linkCopied: string;
  linkCopiedDesc: string;
  failedToCopy: string;
  failedToCopyDesc: string;
  
  // Footer
  popularTests: string;
  contactUs: string;
  
  // Animals
  animals: {
    lion: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
    dolphin: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
    owl: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
    fox: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
    eagle: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
    panda: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
    cat: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
    wolf: {
      name: string;
      subtitle: string;
      description: string;
      personality: string;
      strengths: string[];
    };
  };
  
  // Questions
  questions: {
    q1: {
      question: string;
      options: string[];
    };
    q2: {
      question: string;
      options: string[];
    };
    q3: {
      question: string;
      options: string[];
    };
    q4: {
      question: string;
      options: string[];
    };
    q5: {
      question: string;
      options: string[];
    };
    q6: {
      question: string;
      options: string[];
    };
    q7: {
      question: string;
      options: string[];
    };
    q8: {
      question: string;
      options: string[];
    };
    q9: {
      question: string;
      options: string[];
    };
    q10: {
      question: string;
      options: string[];
    };
  };
}

export const translations: Record<Language, Translations> = {
  ko: {
    appTitle: "동물 성격 테스트",
    testTakenCount: "명이 이 테스트를 받았습니다!",
    
    heroTitle: "어떤 동물과 가장 닮았나요?",
    heroSubtitle: "10가지 간단한 질문으로 나만의 정신적 동물을 찾아보세요. 정확하고 재미있는 결과를 얻고 친구들과 공유하세요!",
    startTest: "테스트 시작",
    minutes: "3분 소요",
    taken: "14만명+ 참여",
    easySharing: "쉬운 공유",
    freeTest: "무료 테스트",
    
    progress: "진행도",
    previous: "이전",
    next: "다음",
    seeResults: "결과 보기",
    loadingQuestions: "질문을 불러오는 중...",
    calculatingMatch: "당신에게 완벽한 동물을 찾는 중...",
    
    testComplete: "테스트 완료!",
    perfectMatch: "완벽한 동물 매치를 찾았습니다",
    matchScore: "일치도",
    personality: "성격",
    perfectFit: "완벽한 매치",
    personalityOverview: "🎯 성격 개요",
    yourStrengths: "💪 당신의 강점",
    compatibleAnimals: "🤝 궁합이 맞는 동물들",
    shareResult: "친구들과 결과를 공유하세요!",
    takeTestAgain: "다시 테스트하기",
    
    facebook: "페이스북",
    twitter: "트위터",
    whatsapp: "왓츠앱",
    copyLink: "링크 복사",
    linkCopied: "링크가 복사되었습니다!",
    linkCopiedDesc: "링크가 클립보드에 복사되었습니다.",
    failedToCopy: "복사 실패",
    failedToCopyDesc: "링크를 클립보드에 복사할 수 없습니다.",
    
    popularTests: "인기 테스트",
    contactUs: "문의하기",
    
    animals: {
      lion: {
        name: "사자",
        subtitle: "타고난 리더",
        description: "당신은 놀라운 자신감과 카리스마를 가진 타고난 리더입니다. 사자처럼 존경받으며 어떤 상황에서든 주도권을 잡는 것을 두려워하지 않습니다.",
        personality: "당신은 다른 사람들이 영감을 받는 타고난 리더십 자질을 가지고 있습니다. 당신의 자신감은 전염성이 있으며, 다른 사람들이 주저할 때 과감한 결정을 내릴 용기가 있습니다. 당신이 아끼는 사람들을 보호하고 책임을 진지하게 받아들입니다. 대담하고 적극적일 수 있지만, 언제 연민과 지혜를 보여야 하는지도 알고 있습니다.",
        strengths: [
          "강한 리더십과 타고난 카리스마",
          "자신감 있는 의사결정 능력",
          "사랑하는 사람들을 보호하고 충성함",
          "도전에 맞서는 용기"
        ]
      },
      dolphin: {
        name: "돌고래",
        subtitle: "즐거운 연결자",
        description: "당신은 어디를 가든 기쁨과 조화를 가져다줍니다. 돌고래처럼 지적이고 사교적이며 다른 사람들과 깊은 차원에서 연결할 수 있는 놀라운 능력을 가지고 있습니다.",
        personality: "당신의 따뜻하고 친근한 성격은 당신을 타고난 사교가로 만듭니다. 높은 감정 지능을 가지고 있으며 사회적 상황을 전문적으로 읽을 수 있습니다. 사람들을 하나로 모으고 주변의 모든 사람들에게 긍정적인 경험을 만들어주는 것을 좋아합니다. 당신의 장난스러운 정신과 낙관주의는 전염성이 있어 다른 사람들이 당신의 존재에서 기운을 얻게 됩니다.",
        strengths: [
          "뛰어난 감정 지능",
          "관계를 구축하는 타고난 능력",
          "낙관적이고 기운을 북돋우는 성격",
          "훌륭한 팀플레이어이자 협력자"
        ]
      },
      owl: {
        name: "올빼미",
        subtitle: "지혜로운 관찰자",
        description: "당신은 깊은 지혜와 분석적 사고를 가지고 있습니다. 올빼미처럼 다른 사람들이 놓치는 것을 보고 사려 깊은 관점으로 귀중한 통찰력을 제공합니다.",
        personality: "당신은 자연스럽게 관찰력이 있고 사려 깊으며, 행동하기 전에 상황을 신중하게 분석하는 것을 선호합니다. 당신의 지혜는 다른 사람들이 놓치는 패턴과 연결고리를 볼 수 있는 능력에서 나옵니다. 지식과 지속적인 학습을 중시하며, 종종 조언과 통찰력을 구하는 사람이 됩니다. 다른 사람들보다 조용할 수 있지만, 당신의 기여는 항상 의미 있고 잘 고려된 것입니다.",
        strengths: [
          "깊은 분석적 비판적 사고",
          "뛰어난 문제 해결 능력",
          "지혜롭고 사려 깊은 의사결정",
          "훌륭한 경청자이자 조언자"
        ]
      },
      fox: {
        name: "여우",
        subtitle: "영리한 전략가",
        description: "당신은 믿을 수 없을 정도로 영리하고 적응력이 뛰어납니다. 여우처럼 지능과 창의력으로 복잡한 상황을 헤쳐나가며 항상 혁신적인 해결책을 찾아냅니다.",
        personality: "당신의 지능은 창의력과 적응력과 맞먹습니다. 틀에 박힌 사고를 뛰어넘어 복잡한 문제에 대한 영리한 해결책을 찾는 데 뛰어납니다. 자연스럽게 호기심이 많고 새로운 것을 배우는 것을 좋아해서 믿을 수 없을 정도로 다재다능합니다. 당신의 재치와 매력은 사회적 상황을 쉽게 헤쳐나가는 데 도움이 되며, 다른 사람들이 놓치는 기회를 보는 재능이 있습니다.",
        strengths: [
          "높은 지능과 창의력",
          "뛰어난 적응력과 유연성",
          "전략적 사고와 계획 수립",
          "매력적이고 설득력 있는 의사소통"
        ]
      },
      eagle: {
        name: "독수리",
        subtitle: "비전을 가진 성취자",
        description: "당신은 결단력과 비전으로 도전을 뛰어넘습니다. 독수리처럼 야심찬 목표를 가지고 있으며 위대함을 달성할 집중력을 가지고 있습니다.",
        personality: "당신은 큰 그림을 보고 야심찬 목표를 설정하는 타고난 능력을 가지고 있습니다. 마음에 두는 것이 있을 때 당신의 결단력과 집중력은 타의 추종을 불허합니다. 독립성을 중시하며 다른 사람을 따르기보다는 자신만의 길을 개척하는 것을 선호합니다. 높은 기준은 당신을 뛰어나게 만들며, 비전을 달성하기 위해 계산된 위험을 감수하는 것을 두려워하지 않습니다.",
        strengths: [
          "강한 비전과 목표 설정 능력",
          "뛰어난 집중력과 결단력",
          "독립적이고 자기 동기 부여가 강함",
          "야심찬 목표를 가진 높은 성취자"
        ]
      },
      panda: {
        name: "판다",
        subtitle: "평화로운 조화자",
        description: "당신은 모든 상황에 평온함과 균형을 가져다줍니다. 판다처럼 평화와 조화를 중시하며 자신만의 부드러운 속도로 삶을 살아갑니다.",
        personality: "당신은 다른 사람들을 편안하게 만드는 자연스럽게 진정시키는 존재감을 가지고 있습니다. 조화를 중시하고 갈등을 피하는 것을 선호하며, 대신 문제에 대한 평화로운 해결책을 찾는 것을 선택합니다. 당신의 부드러운 성격이 약하다는 뜻은 아닙니다 - 당신은 조용한 힘과 흔들리지 않는 원칙을 가지고 있습니다. 삶의 단순한 즐거움을 인정하며 균형과 자기 관리의 중요성을 믿습니다.",
        strengths: [
          "타고난 평화 중재자이자 조정자",
          "평온하고 균형 잡힌 삶의 접근법",
          "강한 도덕적 나침반과 원칙",
          "뛰어난 스트레스 관리 능력"
        ]
      },
      cat: {
        name: "고양이",
        subtitle: "독립적인 예술가",
        description: "당신은 독립성을 중시하고 삶에 대한 독특한 관점을 가지고 있습니다. 고양이처럼 에너지를 선택적으로 사용하며 모든 것에서 양보다 질을 선호합니다.",
        personality: "당신은 강렬하게 독립적이며 무엇보다 자율성을 중시합니다. 세련된 취향과 아름다움과 품질에 대한 감상을 가지고 있습니다. 선택할 때 사교적일 수 있지만, 내적 서클에 들어오는 사람들을 선별적으로 고릅니다. 강한 직감을 가지고 있으며 본능을 신뢰합니다. 당신의 신비롭고 자신감 있는 성격은 관심을 끌려고 노력하지 않을 때조차 다른 사람들을 끌어들입니다.",
        strengths: [
          "강한 독립성과 자립심",
          "뛰어난 직감과 본능",
          "세련된 취향과 품질에 대한 감상",
          "자신감 있고 신비로운 매력"
        ]
      },
      wolf: {
        name: "늑대",
        subtitle: "충실한 수호자",
        description: "당신은 무리에 깊이 충성하고 보호적입니다. 늑대처럼 가족 유대를 중시하며 사랑하는 사람들을 보호하기 위해 큰 노력을 기울입니다.",
        personality: "당신은 강렬하게 충성스럽고 당신이 아끼는 사람들과 깊고 지속적인 관계를 형성합니다. 강한 보호 본능을 가지고 있으며 사랑하는 사람들을 맹렬히 보호할 것입니다. 독립적일 수 있지만, 공통 목표를 향해 함께 일하는 힘도 이해합니다. 신뢰와 진정성을 중시하며, 누군가가 당신의 존경을 얻으면 어떤 일이 있어도 그들 곁에 서있을 것입니다.",
        strengths: [
          "흔들리지 않는 충성심과 헌신",
          "강한 보호 본능",
          "뛰어난 팀워크와 협력",
          "깊은 감정적 연결과 공감"
        ]
      }
    },
    
    questions: {
      q1: {
        question: "사교 모임에서 당신은 보통:",
        options: [
          "주도권을 잡고 대화를 이끌어나간다",
          "자연스럽게 참여하고 사람들과의 시간을 즐긴다",
          "신중하게 들으며 사려 깊게 기여한다",
          "옆에서 관찰하는 것을 선호한다"
        ]
      },
      q2: {
        question: "새로운 도전에 직면했을 때, 첫 번째 본능은:",
        options: [
          "바로 뛰어들어 하면서 배운다",
          "단계별로 신중하게 접근법을 계획한다",
          "진행하기 전에 다른 사람들의 조언을 구한다",
          "먼저 모든 가능한 위험을 고려한다"
        ]
      },
      q3: {
        question: "이상적인 주말 보내는 방법은:",
        options: [
          "친구들과 야외 모험을 이끌어나가기",
          "새로운 장소를 탐험하거나 새로운 활동 시도하기",
          "좋은 책을 읽거나 새로운 것을 배우기",
          "집에서 나만의 공간에서 휴식하기"
        ]
      },
      q4: {
        question: "팀에서 일할 때, 당신은 보통:",
        options: [
          "리더십을 맡고 업무를 분배한다",
          "창의적인 아이디어를 제공하고 모든 사람의 동기를 부여한다",
          "사려 깊은 분석과 해결책을 제공한다",
          "맡은 부분을 독립적으로 작업한다"
        ]
      },
      q5: {
        question: "스트레스와 압박을 어떻게 처리하나요?",
        options: [
          "결단력으로 정면 대결한다",
          "유연하게 상황에 적응한다",
          "문제를 체계적으로 생각한다",
          "혼자 시간을 갖고 처리하며 재충전한다"
        ]
      },
      q6: {
        question: "중요한 결정을 내리는 접근법은:",
        options: [
          "직감을 믿고 빠르게 결정한다",
          "신뢰하는 친구와 가족의 의견을 수집한다",
          "철저히 조사하고 모든 선택지를 검토한다",
          "감정적으로 옳다고 느끼는 것을 따른다"
        ]
      },
      q7: {
        question: "갈등 상황에서 당신은:",
        options: [
          "문제를 직접적이고 단호하게 맞선다",
          "모두에게 효과적인 타협점을 찾으려 한다",
          "한 발 물러서서 객관적으로 상황을 분석한다",
          "가능하면 대립을 피한다"
        ]
      },
      q8: {
        question: "인생에서 가장 동기를 주는 것은:",
        options: [
          "위대함을 달성하고 인정받는 것",
          "다른 사람들과 의미 있는 관계를 갖는 것",
          "지속적으로 배우고 성장하는 것",
          "평화와 개인적 만족을 찾는 것"
        ]
      },
      q9: {
        question: "당신의 의사소통 스타일은 일반적으로:",
        options: [
          "직접적이고 명확하며 권위적이다",
          "따뜻하고 표현력이 풍부하며 매력적이다",
          "사려 깊고 정확하며 정보가 풍부하다",
          "부드럽고 배려하며 외교적이다"
        ]
      },
      q10: {
        question: "이상적인 환경을 생각할 때:",
        options: [
          "리더십 기회가 있는 역동적이고 도전적인 환경",
          "많은 상호작용이 있는 사교적이고 협력적인 환경",
          "깊이 집중할 수 있는 조용하고 체계적인 환경",
          "자신다울 수 있는 평화롭고 자연스러운 환경"
        ]
      }
    }
  },
  
  en: {
    appTitle: "Animal Personality Test",
    testTakenCount: "people have taken this test!",
    
    heroTitle: "What animal are you most like?",
    heroSubtitle: "Discover your spirit animal with 10 simple questions. Get accurate, fun results that reveal your personality traits and share them with friends!",
    startTest: "Start Test",
    minutes: "3 minutes",
    taken: "142k+ taken",
    easySharing: "Easy sharing",
    freeTest: "Free test",
    
    progress: "Progress",
    previous: "Previous",
    next: "Next",
    seeResults: "See Results",
    loadingQuestions: "Loading questions...",
    calculatingMatch: "Calculating your perfect animal match...",
    
    testComplete: "Test Complete!",
    perfectMatch: "We found your perfect animal match",
    matchScore: "Match Score",
    personality: "Personality",
    perfectFit: "Perfect Fit",
    personalityOverview: "🎯 Personality Overview",
    yourStrengths: "💪 Your Strengths",
    compatibleAnimals: "🤝 Compatible Animals",
    shareResult: "Share your result with friends!",
    takeTestAgain: "Take Test Again",
    
    facebook: "Facebook",
    twitter: "Twitter",
    whatsapp: "WhatsApp",
    copyLink: "Copy Link",
    linkCopied: "Link copied!",
    linkCopiedDesc: "The link has been copied to your clipboard.",
    failedToCopy: "Failed to copy",
    failedToCopyDesc: "Unable to copy link to clipboard.",
    
    popularTests: "Popular Tests",
    contactUs: "Contact Us",
    
    animals: {
      lion: {
        name: "Lion",
        subtitle: "The Natural Born Leader",
        description: "You are a natural leader with incredible confidence and charisma. Like a lion, you command respect and aren't afraid to take charge in any situation.",
        personality: "You possess natural leadership qualities that others find inspiring. Your confidence is infectious, and you have the courage to make tough decisions when others hesitate. You're protective of those you care about and take responsibility seriously. While you can be bold and assertive, you also know when to show compassion and wisdom.",
        strengths: [
          "Strong leadership and natural charisma",
          "Confident decision-making abilities",
          "Protective and loyal to loved ones",
          "Courageous in facing challenges"
        ]
      },
      dolphin: {
        name: "Dolphin",
        subtitle: "The Joyful Connector",
        description: "You bring joy and harmony wherever you go. Like a dolphin, you're intelligent, social, and have an amazing ability to connect with others on a deep level.",
        personality: "Your warm and friendly nature makes you a natural people person. You have high emotional intelligence and can read social situations expertly. You love bringing people together and creating positive experiences for everyone around you. Your playful spirit and optimism are contagious, making others feel uplifted in your presence.",
        strengths: [
          "Exceptional emotional intelligence",
          "Natural ability to build connections",
          "Optimistic and uplifting personality",
          "Great team player and collaborator"
        ]
      },
      owl: {
        name: "Owl",
        subtitle: "The Wise Observer",
        description: "You possess deep wisdom and analytical thinking. Like an owl, you see what others miss and provide invaluable insights with your thoughtful perspective.",
        personality: "You are naturally observant and thoughtful, preferring to analyze situations carefully before acting. Your wisdom comes from your ability to see patterns and connections that others overlook. You value knowledge and continuous learning, often becoming the go-to person for advice and insights. While you may be quieter than others, your contributions are always meaningful and well-considered.",
        strengths: [
          "Deep analytical and critical thinking",
          "Excellent problem-solving abilities",
          "Wise and thoughtful decision-making",
          "Great listener and advisor"
        ]
      },
      fox: {
        name: "Fox",
        subtitle: "The Clever Strategist",
        description: "You're incredibly clever and adaptable. Like a fox, you can navigate complex situations with intelligence and creativity, always finding innovative solutions.",
        personality: "Your intelligence is matched by your creativity and adaptability. You excel at thinking outside the box and finding clever solutions to complex problems. You're naturally curious and love learning new things, which makes you incredibly versatile. Your wit and charm help you navigate social situations effortlessly, and you have a talent for seeing opportunities others miss.",
        strengths: [
          "Highly intelligent and creative",
          "Excellent adaptability and flexibility",
          "Strategic thinking and planning",
          "Charming and persuasive communication"
        ]
      },
      eagle: {
        name: "Eagle",
        subtitle: "The Visionary Achiever",
        description: "You soar above challenges with determination and vision. Like an eagle, you have ambitious goals and the focus to achieve greatness.",
        personality: "You have a natural ability to see the big picture and set ambitious goals. Your determination and focus are unmatched when you set your mind to something. You value independence and prefer to chart your own course rather than follow others. Your high standards push you to excel, and you're not afraid to take calculated risks to achieve your vision.",
        strengths: [
          "Strong vision and goal-setting ability",
          "Exceptional focus and determination",
          "Independent and self-motivated",
          "High achiever with ambitious goals"
        ]
      },
      panda: {
        name: "Panda",
        subtitle: "The Peaceful Harmonizer",
        description: "You bring calm and balance to every situation. Like a panda, you value peace, harmony, and taking life at your own gentle pace.",
        personality: "You have a naturally calming presence that puts others at ease. You value harmony and prefer to avoid conflict, instead choosing to find peaceful solutions to problems. Your gentle nature doesn't mean you're weak - you have quiet strength and unwavering principles. You appreciate the simple pleasures in life and believe in the importance of balance and self-care.",
        strengths: [
          "Natural peacemaker and mediator",
          "Calm and balanced approach to life",
          "Strong moral compass and principles",
          "Excellent at stress management"
        ]
      },
      cat: {
        name: "Cat",
        subtitle: "The Independent Artist",
        description: "You value independence and have a unique perspective on life. Like a cat, you're selective with your energy and prefer quality over quantity in all things.",
        personality: "You are fiercely independent and value your autonomy above all else. You have a refined taste and appreciation for beauty and quality. While you can be social when you choose to be, you're selective about who you let into your inner circle. You have strong intuition and trust your instincts. Your mysterious and confident nature draws others to you, even when you're not trying to attract attention.",
        strengths: [
          "Strong independence and self-reliance",
          "Excellent intuition and instincts",
          "Refined taste and appreciation for quality",
          "Confident and mysterious charm"
        ]
      },
      wolf: {
        name: "Wolf",
        subtitle: "The Loyal Guardian",
        description: "You're deeply loyal and protective of your pack. Like a wolf, you value family bonds and will go to great lengths to protect those you love.",
        personality: "You are intensely loyal and form deep, lasting relationships with those you care about. You have strong protective instincts and will defend your loved ones fiercely. While you can be independent, you also understand the power of working together toward common goals. You value trust and authenticity, and once someone earns your respect, you'll stand by them through anything.",
        strengths: [
          "Unwavering loyalty and devotion",
          "Strong protective instincts",
          "Excellent teamwork and collaboration",
          "Deep emotional connections and empathy"
        ]
      }
    },
    
    questions: {
      q1: {
        question: "When you're at a social gathering, you typically:",
        options: [
          "Take charge and lead conversations",
          "Naturally participate and enjoy the company",
          "Listen carefully and contribute thoughtfully",
          "Prefer to observe from the sidelines"
        ]
      },
      q2: {
        question: "When faced with a new challenge, your first instinct is to:",
        options: [
          "Jump right in and figure it out as you go",
          "Carefully plan your approach step by step",
          "Seek advice from others before proceeding",
          "Consider all possible risks first"
        ]
      },
      q3: {
        question: "Your ideal way to spend a weekend is:",
        options: [
          "Leading an outdoor adventure with friends",
          "Exploring a new place or trying new activities",
          "Reading a good book or learning something new",
          "Relaxing at home in your own space"
        ]
      },
      q4: {
        question: "When working in a team, you usually:",
        options: [
          "Take the lead and delegate tasks",
          "Bring creative ideas and keep everyone motivated",
          "Provide thoughtful analysis and solutions",
          "Work independently on your assigned part"
        ]
      },
      q5: {
        question: "How do you handle stress and pressure?",
        options: [
          "Face it head-on with determination",
          "Stay flexible and adapt to the situation",
          "Think through the problem systematically",
          "Take time alone to process and recharge"
        ]
      },
      q6: {
        question: "Your approach to making important decisions is:",
        options: [
          "Trust your instincts and decide quickly",
          "Gather input from trusted friends and family",
          "Research thoroughly and weigh all options",
          "Go with what feels right emotionally"
        ]
      },
      q7: {
        question: "In conflict situations, you tend to:",
        options: [
          "Confront the issue directly and assertively",
          "Try to find a compromise that works for everyone",
          "Step back and analyze the situation objectively",
          "Avoid confrontation when possible"
        ]
      },
      q8: {
        question: "What motivates you most in life?",
        options: [
          "Achieving greatness and being recognized",
          "Having meaningful connections with others",
          "Continuously learning and growing",
          "Finding peace and personal fulfillment"
        ]
      },
      q9: {
        question: "Your communication style is typically:",
        options: [
          "Direct, clear, and commanding",
          "Warm, expressive, and engaging",
          "Thoughtful, precise, and informative",
          "Gentle, considerate, and diplomatic"
        ]
      },
      q10: {
        question: "When you think about your ideal environment, it's:",
        options: [
          "Dynamic and challenging with opportunities to lead",
          "Social and collaborative with lots of interaction",
          "Quiet and organized where you can focus deeply",
          "Peaceful and natural where you can be yourself"
        ]
      }
    }
  }
};

export function useTranslation(language: Language): Translations {
  return translations[language];
}