import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { AwardsSection } from '@site/src/sections/AwardsSection';
import { EducationSection } from '@site/src/sections/EducationSection';
import { IntroSection } from '@site/src/sections/IntroSection';
import { ProjectsSection } from '@site/src/sections/ProjectsSection';
import { cn } from '@site/src/utils/cn';
import Layout from '@theme/Layout';
import { BookOpen, Star } from 'lucide-react';
import type { ReactNode } from 'react';
import '../css/home.css';
// import { SKILLS, SKILL_CATEGORIES } from '@site/src/data/skills';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={cn(
        'relative min-h-[calc(100vh-var(--ifm-navbar-height))] flex items-center justify-center overflow-hidden',
        // 더 세련된 다층 그라데이션 배경
        'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900',
        'before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary-500/20 before:via-purple-500/30 before:to-warning-500/20',
        'after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.1)_100%)]'
      )}
    >
      {/* 동적 배경 그리드 패턴 */}
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }}
      ></div>

      {/* 복합 배경 장식 요소들 */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* 주요 오브 효과들 */}
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-info-400/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/25 to-warning-400/15 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-purple-400/15 rounded-full blur-2xl animate-pulse delay-500'></div>

        {/* 회전하는 링 효과 */}
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]'
          style={{ animation: 'rotate-slow 30s linear infinite' }}
        >
          <div className='absolute inset-0 rounded-full border border-white/5'></div>
          <div className='absolute inset-8 rounded-full border border-primary-400/10'></div>
          <div className='absolute inset-16 rounded-full border border-purple-400/10'></div>
        </div>

        {/* 움직이는 그라데이션 오브들 */}
        <div
          className='absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-success-400/20 to-info-400/10 rounded-full blur-2xl'
          style={{ animation: 'float 15s ease-in-out infinite' }}
        ></div>
        <div
          className='absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-warning-400/15 to-danger-400/10 rounded-full blur-2xl'
          style={{ animation: 'float 18s ease-in-out infinite reverse' }}
        ></div>

        {/* 파티클 효과 */}
        <div className='absolute inset-0'>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className='absolute w-1 h-1 bg-white rounded-full opacity-30'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${
                  2 + Math.random() * 3
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* 빛 줄기 효과 */}
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/20 via-transparent to-transparent'
          style={{ animation: 'beam-sweep 8s ease-in-out infinite' }}
        ></div>
        <div
          className='absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent'
          style={{
            animation: 'beam-sweep-horizontal 10s ease-in-out infinite',
          }}
        ></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={cn('relative z-10 max-w-4xl mx-auto px-6 text-center')}>
        {/* 프로필 이미지 영역 */}
        <div className='mb-₩8 flex justify-center'>
          <div className='relative'>
            <div className='w-32 h-32 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl'>
              <Star className='w-16 h-16 text-white/90' />
            </div>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/50 to-purple-400/50 blur-xl animate-pulse'></div>
          </div>
        </div>

        {/* 타이틀 */}
        <div className='mb-6'>
          <h1
            className={cn(
              'text-5xl md:text-6xl font-bold text-white mb-4',
              'bg-gradient-to-r from-white via-primary-100 to-purple-100 bg-clip-text text-transparent',
              'animate-fade-in-up drop-shadow-lg'
            )}
          >
            프론트엔드 개발자
          </h1>
          <h2
            className={cn(
              'text-3xl md:text-4xl font-semibold text-white/90 mb-6',
              'animate-fade-in-up animation-delay-200'
            )}
          >
            이성훈
          </h2>
        </div>

        {/* 서브타이틀 */}
        <p
          className={cn(
            'text-xl md:text-2xl text-white/80 mb-8 leading-relaxed',
            'animate-fade-in-up animation-delay-400',
            'max-w-2xl mx-auto'
          )}
        >
          <span>사용자 경험을 중시하는</span>{' '}
          <span className='whitespace-pre'>열정적인 웹 개발자</span>
          <br />
          <span className='text-lg text-white/70 whitespace-nowrap'>
            React • TypeScript • 사용자 중심 설계
          </span>
        </p>

        {/* 버튼 그룹 */}
        <div
          className={cn(
            'flex flex-col sm:flex-row justify-center items-center gap-4',
            'animate-fade-in-up animation-delay-600'
          )}
        >
          <a
            href='#main'
            className={cn(
              'group px-8 py-4 bg-primary-600 rounded-full !no-underline',
              '!text-white hover:bg-primary-700 transition-all duration-300',
              'flex items-center gap-3 text-lg font-medium',
              'border-2 border-primary-500'
            )}
          >
            <BookOpen className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
            포트폴리오 보기
          </a>
          <a
            href='https://github.com/shlee9999'
            className={cn(
              'group px-8 py-4 bg-white/15 rounded-full !no-underline backdrop-blur-sm',
              '!text-white hover:bg-white/25 transition-all duration-300',
              'flex items-center gap-3 text-lg font-medium',
              'border border-white/20'
            )}
            target='_blank'
          >
            <svg
              className='w-6 h-6 group-hover:scale-110 transition-transform duration-300 fill-current'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default function HomePage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} 포트폴리오`}
      description='프론트엔드 개발자 이성훈의 전문 포트폴리오'
      wrapperClassName='bg-gray-50 dark:bg-gray-900'
    >
      <HomepageHeader />

      <main
        id='main'
        className={cn(
          'py-16 px-4 max-w-7xl mx-auto text-gray-900 dark:text-gray-100'
        )}
      >
        {/* 소개 섹션 */}
        <IntroSection />

        {/* 프로젝트 섹션 */}
        <ProjectsSection />

        {/* 교육 섹션 */}
        <EducationSection />

        {/* 수상 경력 섹션 */}
        <AwardsSection />
      </main>
    </Layout>
  );
}
