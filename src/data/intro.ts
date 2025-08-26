export interface IntroSection {
  greeting: {
    title: string;
    description: string;
  };
  currentWork: {
    title: string;
    company: string;
    period: string;
    project: string;
    highlights: string[];
  };
  openSource: {
    title: string;
    library: {
      name: string;
      url: string;
    };
    description: string;
  };
  expertise: {
    title: string;
    skills: Array<{
      category: string;
      description: string;
    }>;
  };
}

export const introData: IntroSection = {
  greeting: {
    title: '👋 안녕하세요, 프론트엔드 개발자 이성훈입니다.',
    description: '사용자 경험과 견고한 아키텍처를 최우선으로 하는 개발자입니다.',
  },
  currentWork: {
    title: '🏢 현재 업무',
    company: '디리아',
    period: '2025.02~',
    project: 'NH농협은행 차세대 대외MCA 시스템 솔루션 개발 프로젝트',
    highlights: [
      '솔루션에 최적화된 프론트엔드 아키텍처 직접 설계',
      '페이지 50개 이상의 대규모 프로젝트',
      'react-hook-form을 활용한 폼 관리 및 유효성 검사 체계 구축',
      'AI 사용이 제한된 폐쇄망 환경에서 개발',
      '문서화 및 컴포넌트 Playground 제공을 통한 팀 지식 공유 및 협업 효율 강화',
      '지속적 리팩토링을 통해 컴포넌트 및 아키텍처의 타입 안정성 강화',
      'GitLab 이슈 기반 체계적 협업으로 팀과 고객사 만족도 향상',
    ],
  },
  openSource: {
    title: '🚀 오픈소스 기여',
    library: {
      name: 'React Useful Kit',
      url: 'https://www.npmjs.com/package/react-useful-kit',
    },
    description: '라이브러리를 개발하여 재사용 가능한 컴포넌트와 유틸리티를 제공하며, 오픈소스 생태계에 기여하고 있습니다.',
  },
  expertise: {
    title: '💻 기술적 전문성',
    skills: [
      {
        category: '아키텍처 설계',
        description: '현업 대규모 프로젝트에서 솔루션에 최적화된 프론트엔드 아키텍처 설계 경험',
      },
      {
        category: '프로젝트 리더십',
        description: 'React 기반 주요 프로젝트들을 성공적으로 리드하며 팀 협업 역량 강화',
      },
      {
        category: '언어에 대한 깊은 이해',
        description: 'JavaScript와 TypeScript에 대한 깊은 이해를 바탕으로 장기적 유지보수성을 고려한 코드 설계 지향',
      },
      {
        category: 'Git Flow',
        description: '프로젝트 Git Flow 직접 설계 및 적용 경험',
      },
      {
        category: '상태 관리',
        description: 'Redux와 React Query를 활용한 클라이언트, 서버 상태 관리 및 데이터 핸들링',
      },
      {
        category: '성능 모니터링',
        description: 'Lighthouse CI 설계하여 주기적인 성능 모니터링으로 사용자 경험 개선 방향 제시한 경험',
      },
      {
        category: '테스트',
        description: 'Storybook, Jest, React Testing Library를 통한 테스팅 경험',
      },
    ],
  },
};
