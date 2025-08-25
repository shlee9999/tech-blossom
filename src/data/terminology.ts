export interface TerminologyItem {
  id: string;
  title: string;
  hoverText: string;
  path: string;
  category: 'typescript' | 'css';
}

export const terminologyData: TerminologyItem[] = [
  {
    id: 'annotation',
    title: '타입 어노테이션',
    hoverText:
      'TypeScript에서 변수, 함수 매개변수, 반환값 등에 명시적으로 타입을 지정하는 것',
    path: '/terminology/typescript/annotation',
    category: 'typescript',
  },
  {
    id: 'function_signature',
    title: '함수 시그니처',
    hoverText:
      '함수의 입력(매개변수)과 출력(반환값)의 타입을 정의하는 타입 규격',
    path: '/terminology/typescript/function_signature',
    category: 'typescript',
  },
  {
    id: 'index_signature',
    title: '인덱스 시그니처',
    hoverText:
      '객체가 동적으로 여러 키를 가질 때, 키와 값의 타입을 미리 선언하는 타입 정의',
    path: '/terminology/typescript/index_signature',
    category: 'typescript',
  },
  {
    id: 'cn',
    title: 'cn',
    hoverText:
      'Tailwind CSS 클래스명을 조건부로 결합하고 중복을 처리하는 유틸리티 함수',
    path: '/terminology/css/Tailwind/cn',
    category: 'css',
  },
];

export const getTerminologyById = (id: string): TerminologyItem | undefined => {
  return terminologyData.find(term => term.id === id);
};

export const getTerminologyByTitle = (
  title: string
): TerminologyItem | undefined => {
  return terminologyData.find(term => term.title === title);
};
