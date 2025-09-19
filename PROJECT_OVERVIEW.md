# AnimalSpirit 프로젝트 개요

## 📋 프로젝트 정보
- **이름**: AnimalSpirit (심리테스트 웹 프로젝트)
- **타입**: 동물 성향 심리테스트 웹 애플리케이션
- **배포**: Netlify (서버리스 함수 사용)
- **상태**: 운영 중

## 🛠 기술 스택
### Frontend
- **React** + **TypeScript**
- **Vite** (빌드 도구)
- **TailwindCSS** (스타일링)
- **Wouter** (라우팅)
- **TanStack Query** (데이터 페칭)

### Backend
- **Express.js** + **TypeScript** (개발용)
- **Netlify Functions** (프로덕션)
- **SQLite** (데이터베이스)
- **Drizzle ORM** (데이터베이스 ORM)

### 배포
- **Netlify** (정적 호스팅 + 서버리스 함수)
- **Git 자동 배포** (푸시 시 자동 빌드/배포)

## 📁 프로젝트 구조
```
AnimalSpirit/
├── client/                 # React 클라이언트
│   ├── src/
│   │   ├── components/     # UI 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── lib/           # 유틸리티 함수
│   │   ├── contexts/      # React 컨텍스트
│   │   └── hooks/         # 커스텀 훅
├── server/                # Express 서버 (개발용)
│   ├── routes.ts          # API 라우트
│   ├── storage.ts         # 데이터베이스 로직
│   └── index.ts           # 서버 진입점
├── netlify/               # Netlify 배포용
│   └── functions/
│       └── api.ts         # 서버리스 함수 (프로덕션)
├── shared/                # 공통 타입/스키마
└── dist/                  # 빌드 결과물
```

## 🚀 주요 명령어
```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 타입 체크
npm run check

# 데이터베이스 스키마 push
npm run db:push
```

## 🔧 주요 기능
1. **다국어 지원** (한국어/영어)
2. **12개 질문 심리테스트**
3. **8가지 동물 성향** (사자, 돌고래, 부엉이, 여우, 독수리, 판다, 고양이, 늑대)
4. **호환성 분석** 및 **성격 분석 차트**
5. **결과 공유 기능**
6. **반응형 디자인**

## 📊 API 엔드포인트
```
GET  /api/questions          # 퀴즈 질문 목록
GET  /api/animals            # 동물 정보 목록
GET  /api/animals/:id        # 특정 동물 정보
POST /api/calculate-match    # 퀴즈 결과 계산
GET  /api/stats/popular      # 인기 동물 통계
```

## 🐛 최근 해결된 주요 이슈들

### 1. 일치율 100% 초과 문제 (2025-01-09 해결)
**증상**: 결과에서 일치율이 120%, 150% 등으로 표시
**원인**: 퍼센티지 정규화 로직 오류
**해결**: 
- 점수 합계를 정확히 100%로 정규화
- 반올림 오차 보정 로직 추가
- 최소/최대값 제한 (1-100%)

### 2. 성격 분석 데이터 로딩 무한대기 (2025-01-09 해결)
**증상**: "성격 분석 데이터를 불러오는 중..." 메시지에서 멈춤
**원인**: `breakdown` 데이터가 undefined일 때 처리 부족
**해결**:
- 서버에서 항상 유효한 breakdown 데이터 전송 보장
- 클라이언트에서 스마트 폴백 로직 구현
- 실제 동물 이름만 표시하도록 검증 강화

### 3. 일치도와 성격 분석 퍼센티지 불일치 (2025-01-09 해결)
**증상**: 상단 일치도는 100%인데 성격 분석에서는 60%로 표시
**원인**: 일치도와 breakdown 계산이 별도로 진행됨
**해결**:
- 로직 순서 변경: breakdown 계산 → 최고값을 일치도로 설정
- 논리적 일관성 확보

### 4. Netlify 배포 시 변경사항 미반영 (2025-01-09 해결)
**증상**: 로컬에서는 정상 작동하나 Netlify에서는 이전 버전 동작
**원인**: `server/routes.ts`와 `netlify/functions/api.ts`의 코드 불일치
**해결**:
- `netlify/functions/api.ts`를 최신 로직으로 완전 교체
- 서버리스 함수와 로컬 서버 로직 동기화

## 💡 핵심 알고리즘

### 동물 매칭 알고리즘
```typescript
// 1. 사용자 답변을 특성 점수로 변환
const traitScores: Record<string, number> = {};
for (const answer of answers) {
  const traits = selectedOption.traits || {};
  for (const [trait, score] of Object.entries(traits)) {
    traitScores[trait] = (traitScores[trait] || 0) + score;
  }
}

// 2. 각 동물과의 호환성 계산
const animalScores = animals.map(animal => {
  let totalSimilarity = 0;
  let traitCount = 0;
  
  for (const [trait, userScore] of Object.entries(traitScores)) {
    const animalScore = animal.traits[trait] || 0;
    const difference = Math.abs(userScore - animalScore);
    const similarity = Math.max(0, 100 - (difference * 3));
    totalSimilarity += similarity;
    traitCount++;
  }
  
  return {
    animal,
    score: Math.max(totalSimilarity / traitCount, 30)
  };
}).sort((a, b) => b.score - a.score);

// 3. 상위 3개 동물의 퍼센티지 정규화
const breakdown = normalizePercentages(animalScores.slice(0, 3));
const matchScore = Math.max(...breakdown.map(item => item.percentage));
```

## 🔍 디버깅 팁
1. **브라우저 콘솔** 확인 - 클라이언트 디버깅 로그
2. **Netlify Functions 로그** 확인 - 서버사이드 디버깅
3. **네트워크 탭** 확인 - API 응답 데이터 검증

## 📝 중요 파일들
- `netlify/functions/api.ts` - **프로덕션 API 로직** (Netlify에서 실행)
- `server/routes.ts` - 개발용 API 로직
- `client/src/components/result-card.tsx` - 결과 표시 컴포넌트
- `client/src/lib/quiz-logic.ts` - 퀴즈 계산 로직
- `shared/schema.ts` - 타입 정의

## ⚠️ 주의사항
1. **프로덕션 변경 시**: `netlify/functions/api.ts` 수정 필수
2. **타입 변경 시**: `shared/schema.ts` 먼저 수정 후 다른 파일들 업데이트
3. **Netlify 배포**: Git 푸시만으로 자동 배포됨
4. **로컬 테스트**: 여러 포트에서 동시 실행 가능 (PORT=3001 npm run dev)

## 📈 성능 최적화
- **코드 스플리팅**: 동적 import() 고려
- **이미지 최적화**: WebP 형식 사용
- **캐싱**: TanStack Query로 API 응답 캐싱
- **번들 크기**: 534KB (gzip: 154KB) - 추가 최적화 필요

## 🚀 향후 개선 계획
1. **번들 크기 최적화**
2. **더 정교한 동물 매칭 알고리즘**
3. **결과 저장 및 히스토리 기능**
4. **소셜 공유 개선**
5. **접근성 개선**

---
**마지막 업데이트**: 2025-01-09  
**현재 상태**: 모든 주요 이슈 해결 완료, 프로덕션 안정 운영 중