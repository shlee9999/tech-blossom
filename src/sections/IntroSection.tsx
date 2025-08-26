import { Star } from 'lucide-react';
import { cn } from '../utils/cn';
import { SectionLayout } from '../layout/SectionLayout';
import { introData } from '../data/intro';

// 인사말 컴포넌트
const Greeting = () => (
  <div className={cn('text-center')}>
    <h2 className={cn('font-bold text-2xl text-gray-800 dark:text-gray-200 mb-2')}>
      {introData.greeting.title}
    </h2>
    <p className={cn('text-lg text-gray-600 dark:text-gray-400')}>
      {introData.greeting.description}
    </p>
  </div>
);

// 현재 업무 컴포넌트
const CurrentWork = () => (
  <div className={cn('bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border-l-4 border-primary-400 dark:border-primary-500')}>
    <h3 className={cn('font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3')}>
      {introData.currentWork.title}
    </h3>
    <p className={cn('text-gray-700 dark:text-gray-300 mb-3')}>
      <strong className={cn('text-primary-600 dark:text-primary-400')}>
        {introData.currentWork.company}
      </strong>
      ({introData.currentWork.period})에서{' '}
      <strong>{introData.currentWork.project}</strong>의 프론트엔드 개발을 전담하고 있습니다.
    </p>
    <ul className={cn('space-y-2 text-gray-600 dark:text-gray-400')}>
      {introData.currentWork.highlights.map((highlight, index) => (
        <li key={index}>
          {highlight.includes('**') 
            ? highlight.split('**').map((part, i) => 
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )
            : highlight
          }
        </li>
      ))}
    </ul>
  </div>
);

// 오픈소스 기여 컴포넌트
const OpenSource = () => (
  <div className={cn('bg-success-50 dark:bg-success-900/20 p-6 rounded-lg border-l-4 border-success-400 dark:border-success-500')}>
    <h3 className={cn('font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3')}>
      {introData.openSource.title}
    </h3>
    <span className={cn('text-gray-700 dark:text-gray-300')}>
      <a
        href={introData.openSource.library.url}
        target='_blank'
        className={cn('text-green-600 dark:text-green-400 font-semibold underline hover:text-green-700 dark:hover:text-green-300')}
        rel='noreferrer'
      >
        {introData.openSource.library.name}
      </a>{' '}
      {introData.openSource.description}
    </span>
  </div>
);

// 기술적 전문성 컴포넌트
const Expertise = () => (
  <div className={cn('bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border-l-4 border-primary-400 dark:border-primary-500')}>
    <h3 className={cn('font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3')}>
      {introData.expertise.title}
    </h3>
    <ul className={cn('space-y-3 text-gray-700 dark:text-gray-300')}>
      {introData.expertise.skills.map((skill, index) => (
        <li key={index}>
          <strong>{skill.category}</strong>: {skill.description}
        </li>
      ))}
    </ul>
  </div>
);

// 메인 소개 섹션 컴포넌트
export const IntroSection = () => {
  return (
    <SectionLayout icon={Star} title='Intro'>
      <div className={cn('space-y-8')}>
        <Greeting />
        <CurrentWork />
        <OpenSource />
        <Expertise />
      </div>
    </SectionLayout>
  );
};
