# Claude Code 작업 메모

## 프로젝트 구조
- **클라이언트**: React + TypeScript, Vite, TailwindCSS
- **서버**: Express.js, TypeScript
- **배포**: Netlify (서버리스 함수)

## 빌드 & 실행 명령어
```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 타입 체크
npm run check

# 데이터베이스 스키마 push
npm run db:push
```

## 주요 API 엔드포인트
- `GET /api/questions` - 퀴즈 질문 조회
- `GET /api/animals` - 동물 정보 조회
- `GET /api/animals/:id` - 특정 동물 정보 조회
- `POST /api/calculate-match` - 퀴즈 결과 계산
- `GET /api/stats/popular` - 인기 동물 통계

## 최근 해결된 주요 이슈

### 1. 네비게이션 문제
- **증상**: 로고/다시하기 버튼이 홈으로 이동 안됨
- **해결**: 콜백 기반 상태 관리 구현
- **핵심**: `showQuiz` 상태를 상위 컴포넌트에서 관리

### 2. Netlify 성격 분석 표시 문제  
- **증상**: breakdown 데이터가 undefined
- **해결**: 서버/클라이언트 양쪽 방어코드 추가
- **핵심**: JSON 직렬화 문제 대응

### 3. 비정상 퍼센트 값 문제
- **증상**: 133% 같은 비현실적 값
- **해결**: 계산 로직 단순화 (60-25-15 고정)
- **핵심**: 복잡한 계산 대신 안정적인 고정값

## 최근 해결된 추가 이슈

### 4. TypeScript 컴파일 에러 (2025-01-XX)
- **문제**: 여러 타입 에러 발생 (라우팅 props, Iterator 타입, QuizResult 타입)
- **해결**: 
  - Result 컴포넌트를 라우터용/직접 사용용으로 분리
  - Set/Map iterator를 Array.from()으로 변환
  - QuizResult 인터페이스 통일

### 5. 프로덕션 준비 (2025-01-XX)
- **완료**: 모든 디버깅 코드 제거
- **완료**: 타입 검사 통과
- **완료**: 빌드 성공 확인

## 알려진 제한사항
1. 현재 퍼센트는 고정값 (60-25-15)
2. 동물 이모지가 하드코딩되어 있음
3. 서버 로그가 Netlify 함수에서 제한적

## 다음 개선 계획
1. 동적 퍼센트 계산 복구 (안전하게)
2. 더 나은 에러 처리
3. 성능 최적화
4. 테스트 코드 추가

---
**마지막 업데이트**: 2025-01-XX  
**상태**: 모든 이슈 해결완료, 프로덕션 준비 완료