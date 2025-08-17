import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import { cn } from '@site/src/utils/cn';
import {
  Briefcase,
  School,
  Trophy,
  Code,
  BookOpen,
  User,
  GitBranch,
  Award,
} from 'lucide-react';
import { Card } from '@site/src/components/Card';
import { SectionLayout } from '@site/src/components/SectionLayout';
import { PROJECTS } from '@site/src/data/projects';
import Link from '@docusaurus/Link';
import { SKILLS } from '@site/src/data/skills';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        'bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]',
        'before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/20 before:to-transparent',
        'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]'
      )}
    >
      {/* 배경 장식 요소들 */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin'
          style={{ animationDuration: '20s' }}
        ></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={cn('relative z-10 max-w-4xl mx-auto px-6 text-center')}>
        {/* 프로필 이미지 영역 */}
        <div className='mb-8 flex justify-center'>
          <div className='relative'>
            <div className='w-32 h-32 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl'>
              <User className='w-16 h-16 text-white/90' />
            </div>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-xl animate-pulse'></div>
          </div>
        </div>

        {/* 타이틀 */}
        <div className='mb-6'>
          <h1
            className={cn(
              'text-5xl md:text-6xl font-bold text-white mb-4',
              'bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent',
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
          사용자 경험을 중시하는 열정적인 웹 개발자
          <br />
          <span className='text-lg text-white/70'>
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
            href='https://github.com/shlee9999'
            className={cn(
              'group px-8 py-4 bg-white/15 rounded-full !no-underline backdrop-blur-sm',
              '!text-white hover:bg-white/25 transition-all duration-500',
              'flex items-center gap-3 text-lg font-medium',
              'hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]',
              'hover:scale-105 border border-white/20',
              'hover:-translate-y-1'
            )}
          >
            <GitBranch className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
            GitHub Portfolio
          </a>

          <a
            href='#main'
            className={cn(
              'group px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full !no-underline backdrop-blur-sm',
              '!text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500',
              'flex items-center gap-3 text-lg font-medium',
              'hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]',
              'hover:scale-105 border border-white/20',
              'hover:-translate-y-1'
            )}
          >
            <BookOpen className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
            포트폴리오 보기
          </a>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse'></div>
          </div>
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
      wrapperClassName='bg-[#f9f9f9]'
    >
      <HomepageHeader />

      <main id='main' className={cn('py-16 px-4 max-w-7xl mx-auto')}>
        {/* 소개 섹션 */}
        <SectionLayout icon={User} title='소개'>
          <Card className={cn('rounded-2xl p-8 shadow-lg')}>
            <p className={cn('text-lg leading-relaxed text-gray-600')}>
              <span className={cn('font-bold text-2xl')}>
                👋 안녕하세요, 프론트엔드 개발자를 준비하는 이성훈입니다.
              </span>
              <br />
              <span className={cn('block mt-3')}>
                사용자 경험과 견고한 아키텍처를 최우선으로 하는 프론트엔드
                개발자입니다. React 기반의 주요 프로젝트 3개를 성공적으로
                리드하며 팀 협업 역량을 강화했습니다. 현재는 Zustand와 React
                Query를 활용한 효율적인 상태 관리와 데이터 핸들링에 전문성을
                보유하고 있으며, Jest와 React Testing Library를 통한 테스트 주도
                개발(TDD)에도 깊은 관심을 가지고 있습니다. 특히 Lighthouse를
                활용한 웹 성능 최적화에 주력하고 있으며, LCP(Largest Contentful
                Paint) 개선을 통한 사용자 경험 향상에 집중하고 있습니다.
              </span>
            </p>
            <div className={cn('grid md:grid-cols-2 gap-6 mt-3')}>
              <div className={cn('p-6 bg-gray-50 rounded-xl')}>
                <h3 className={cn('text-xl font-semibold mb-3')}>핵심 역량</h3>
                <div className={cn('flex flex-wrap gap-2')}>
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        'px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm',
                        'transition hover:bg-blue-200'
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </SectionLayout>

        {/* 기술 스택 섹션 */}
        <SectionLayout title='기술 스택' icon={Code}>
          <div className={cn('grid md:grid-cols-2 gap-6')}>
            <div className='shadow-lg w-full h-full flex items-stretch bg-gradient-to-r from-[#ffffff] to-[#f1f5f9] rounded-xl'>
              <img
                className='w-full h-full object-contain'
                src='https://github-readme-stats.vercel.app/api?username=shlee9999&show_icons=true&bg_color=30,ffffff,f1f5f9&title_color=334155&text_color=475569&icon_color=64748b&border_color=e2e8f0&hide_border=true'
                alt="SeongHoon's GitHub stats"
              />
            </div>
            <div className='shadow-lg w-full h-full flex items-stretch bg-gradient-to-r from-[#ffffff] to-[#f1f5f9] rounded-xl'>
              <img
                className='w-3/4 h-full object-contain'
                src='https://github-readme-stats.vercel.app/api/top-langs/?username=shlee9999&layout=compact&bg_color=30,ffffff,f1f5f9&title_color=334155&text_color=475569&border_color=e2e8f0&hide_border=true'
                alt='Top Languages'
              />
            </div>
          </div>
        </SectionLayout>

        {/* 프로젝트 섹션 */}
        <SectionLayout title='프로젝트' icon={Briefcase}>
          <div className={cn('space-y-8')}>
            {PROJECTS.map((project, idx) => (
              <Card key={idx}>
                <Link
                  to={`/project/${project.path}`}
                  className={cn('!no-underline text-black')}
                >
                  <div className={cn('')}>
                    <div
                      className={cn('flex justify-between items-start mb-4')}
                    >
                      <div>
                        <h3 className={cn('text-xl font-bold mb-2')}>
                          {project.title}
                        </h3>
                        <p className={cn('text-gray-500 text-sm mb-3')}>
                          {project.period}
                        </p>
                      </div>
                    </div>

                    <div className={cn('mb-4')}>
                      <div className={cn('flex flex-wrap gap-2 mb-4')}>
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={cn(
                              'px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className={cn('space-y-2')}>
                        {project.contribution.map((item, i) => (
                          <li
                            key={i}
                            className={cn('flex items-start text-gray-600')}
                          >
                            <span className={cn('text-blue-500 mr-2')}>▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </SectionLayout>

        {/* 교육 섹션 */}
        <SectionLayout title='교육' icon={School}>
          <div className={cn('grid md:grid-cols-2 gap-6')}>
            <Card>
              <div className={cn('space-y-6')}>
                <div className={cn('border-l-2 border-blue-200')}>
                  <h3 className={cn('text-lg font-semibold')}>
                    프로그래머스 데브코스
                  </h3>
                  <p className={cn('text-gray-500 text-sm mb-2')}>
                    2024.07 ~ 2024.12
                  </p>
                  <ul className={cn('list-disc pl-5 text-gray-600 space-y-1')}>
                    <li>4개 프로젝트 개발 경험</li>
                    <li>모던 자바스크립트 딥 다이브 스터디</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card>
              <div className={cn('space-y-6')}>
                <div className={cn('border-l-2 border-blue-200')}>
                  <h3 className={cn('text-lg font-semibold')}>
                    삼성전자 DX부문 동계 SW 역량강화 특강
                  </h3>
                  <p className={cn('text-gray-500 text-sm mb-2')}>
                    2023.01 ~ 2023.02
                  </p>
                  <ul className={cn('list-disc pl-5 text-gray-600 space-y-1')}>
                    <li>4개 프로젝트 개발 경험</li>
                    <li>모던 자바스크립트 딥 다이브 스터디</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </SectionLayout>

        {/* 수상 경력 섹션 */}
        <SectionLayout title='수상 경력' icon={Trophy}>
          <div className={cn('grid md:grid-cols-2 gap-6')}>
            <Card>
              <h3 className={cn('text-xl font-semibold mb-2')}>
                데브코스 성적 우수상
              </h3>
              <p className={cn('text-gray-500 text-sm mb-2')}>
                프로그래머스 데브코스에 성실히 참여하여 성적 1등을 달성했습니다.
              </p>
              <p className={cn('text-gray-500 text-sm mb-4')}>2024.12</p>
            </Card>
            <Card>
              <h3 className={cn('text-xl font-semibold mb-2')}>
                데브코스 프로젝트 인기상
              </h3>
              <p className={cn('text-gray-500 text-sm mb-2')}>
                프로그래머스 데브코스의 최종 프로젝트에서 13팀 중 3팀에게 주는
                인기상을 수여받았습니다.
              </p>
              <p className={cn('text-gray-500 text-sm mb-4')}>2024.12</p>
            </Card>
          </div>
        </SectionLayout>
      </main>
    </Layout>
  );
}
