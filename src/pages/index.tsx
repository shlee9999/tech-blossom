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
        'bg-gradient-to-r from-[#4158D0] to-[#C850C0] py-20 px-4 text-center'
      )}
    >
      <div className={cn('max-w-4xl mx-auto')}>
        <h1
          className={cn(
            'text-4xl font-bold text-white mb-4 animate-fade-in-up'
          )}
        >
          프론트엔드 개발자 이성훈
        </h1>
        <p className={cn('text-xl text-indigo-200 mb-8')}>
          사용자 경험을 중시하는 열정적인 웹 개발자
        </p>
        <div className={cn('flex justify-center space-x-4')}>
          <a
            href='https://github.com/shlee9999'
            className={cn(
              'px-6 py-2 bg-white/10 rounded-full !no-underline',
              '!text-white hover:bg-white/30 transition-all duration-300',
              'flex items-center gap-2',
              'hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]',
              'hover:scale-105'
            )}
          >
            <GitBranch className='w-4 h-4' />
            GitHub Portfolio
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
      wrapperClassName='bg-[#f9f9f9]'
    >
      <HomepageHeader />

      <main className={cn('py-16 px-4 max-w-7xl mx-auto')}>
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
            <Card className={cn('p-8 rounded-2xl shadow-lg')}>
              <h3 className={cn('text-xl font-semibold mb-4')}>
                Frontend Mastery
              </h3>
              <div className={cn('space-y-4')}>
                {[
                  { name: 'React', level: 'w-4/5' },
                  { name: 'TypeScript', level: 'w-4/5' },
                  { name: 'React Query', level: 'w-3/5' },
                ].map((tech) => (
                  <div key={tech.name}>
                    <div className={cn('flex justify-between mb-1')}>
                      <span>{tech.name}</span>
                    </div>
                    <div className={cn('h-2 bg-gray-200 rounded-full')}>
                      <div
                        className={cn(
                          'h-full bg-blue-600 rounded-full transition-all duration-500'
                        )}
                        style={{ width: tech.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </SectionLayout>

        {/* 프로젝트 섹션 */}
        <SectionLayout title='프로젝트' icon={Briefcase}>
          <div className={cn('space-y-8')}>
            {PROJECTS.map((project, idx) => (
              <Card key={idx}>
                <Link
                  to={`docs/project/${project.path}`}
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
        </SectionLayout>

        {/* 수상 경력 섹션 */}
        <SectionLayout title='수상 경력' icon={Trophy}>
          <div className={cn('grid md:grid-cols-2 gap-6')}>
            <Card>
              <h3 className={cn('text-xl font-semibold mb-2')}>
                데브코스 성적 우수상
              </h3>
              <p className={cn('text-gray-500 text-sm mb-2')}>
                프로그래머스 데브코스
              </p>
              <p className={cn('text-gray-500 text-sm mb-4')}>2024.12</p>
            </Card>
            <Card>
              <h3 className={cn('text-xl font-semibold mb-2')}>
                데브코스 프로젝트 인기상
              </h3>
              <p className={cn('text-gray-500 text-sm mb-2')}>
                프로그래머스 데브코스
              </p>
              <p className={cn('text-gray-500 text-sm mb-4')}>2024.12</p>
            </Card>
          </div>
        </SectionLayout>
      </main>
    </Layout>
  );
}
