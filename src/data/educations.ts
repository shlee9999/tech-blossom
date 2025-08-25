// 교육 및 자격증

export interface EducationCardProps {
  title: string;
  period: string;
  items: string[];
}

export const EDUCATIONS = [
  {
    title: '동국대학교(서울)',
    period: '2018.03 ~ 2024.02',
    items: ['정보통신공학과', '전체 평균 : 3.82/4.5', '전공 평균 : 3.86/4.5'],
  },
  {
    title: '프로그래머스 데브코스',
    period: '2024.07 ~ 2024.12',
    items: [
      '4개 프로젝트 개발 경험',
      '모던 자바스크립트 딥 다이브 스터디',
      '자바스크립트 코딩 테스트 스터디',
    ],
  },
  {
    title: '정보처리기사 자격증',
    period: '2023.06',
    items: ['국가기술자격증 취득'],
  },
  {
    title: '삼성전자 DX부문 동계 SW 역량강화 특강',
    period: '2023.01 ~ 2023.02',
    items: ['Java를 이용한 알고리즘 학습'],
  },
] satisfies EducationCardProps[];
