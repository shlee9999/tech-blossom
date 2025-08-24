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
// import { SKILLS, SKILL_CATEGORIES } from '@site/src/data/skills';

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
            href='#main'
            className={cn(
              'group px-8 py-4 bg-blue-600 rounded-full !no-underline',
              '!text-white hover:bg-blue-700 transition-all duration-300',
              'flex items-center gap-3 text-lg font-medium',
              'border-2 border-blue-500'
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
            <GitBranch className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
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
      wrapperClassName='bg-[#f9f9f9]'
    >
      <HomepageHeader />

      <main id='main' className={cn('py-16 px-4 max-w-7xl mx-auto')}>
        {/* 소개 섹션 */}
        <SectionLayout icon={User} title='소개'>
          <Card className={cn('rounded-2xl p-8 shadow-lg')}>
            <div className={cn('space-y-8')}>
              {/* 인사말 */}
              <div className={cn('text-center')}>
                <h2 className={cn('font-bold text-2xl text-gray-800 mb-2')}>
                  👋 안녕하세요, 프론트엔드 개발자 이성훈입니다.
                </h2>
                <p className={cn('text-lg text-gray-600')}>
                  사용자 경험과 견고한 아키텍처를 최우선으로 하는 개발자입니다.
                </p>
              </div>

              {/* 현재 업무 */}
              <div
                className={cn(
                  'bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400'
                )}
              >
                <h3 className={cn('font-semibold text-lg text-gray-800 mb-3')}>
                  🏢 현재 업무
                </h3>
                <p className={cn('text-gray-700 mb-3')}>
                  <strong className={cn('text-blue-600')}>디리아</strong>
                  (2025.02~)에서{' '}
                  <strong>
                    NH농협은행 차세대 대외MCA 시스템 솔루션 개발 프로젝트
                  </strong>
                  의 프론트엔드 개발을 전담하고 있습니다.
                </p>
                <ul className={cn('space-y-2 text-gray-600')}>
                  <li>
                    솔루션에 최적화된{' '}
                    <strong>프론트엔드 아키텍처 직접 설계</strong>
                  </li>
                  <li>
                    페이지 50개 이상의 <strong>대규모 프로젝트</strong>
                  </li>
                  <li>
                    AI 사용이 제한된 <strong>폐쇄망 환경</strong>에서 개발
                  </li>
                  <li>
                    <strong>문서화 및 컴포넌트 Playground 제공</strong>을 통한
                    팀 지식 공유 및 협업 효율 강화
                  </li>
                  <li>
                    지속적 리팩토링을 통해 컴포넌트 및 아키텍처의 타입 안정성
                    강화
                  </li>
                  <li>
                    GitLab 이슈 기반 체계적 <strong>협업</strong>으로 팀과
                    고객사 만족도 향상
                  </li>
                  <li>
                    지속적인 <strong>피드백</strong>을 통한 개선 및 협업 효율
                    강화
                  </li>
                </ul>
              </div>

              {/* 오픈소스 기여 */}
              <div
                className={cn(
                  'bg-green-50 p-6 rounded-lg border-l-4 border-green-400'
                )}
              >
                <h3 className={cn('font-semibold text-lg text-gray-800 mb-3')}>
                  🚀 오픈소스 기여
                </h3>
                <span className={cn('text-gray-700')}>
                  <a
                    href='https://www.npmjs.com/package/react-useful-kit'
                    target='_blank'
                    className={cn(
                      'text-green-600 font-semibold underline hover:text-green-700'
                    )}
                    rel='noreferrer'
                  >
                    React Useful Kit
                  </a>{' '}
                  라이브러리를 개발하여 재사용 가능한 컴포넌트와 유틸리티를
                  제공하며, 오픈소스 생태계에 기여하고 있습니다.
                </span>
              </div>

              {/* 기술적 전문성 */}
              <div
                className={cn(
                  'bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400'
                )}
              >
                <h3 className={cn('font-semibold text-lg text-gray-800 mb-3')}>
                  💻 기술적 전문성
                </h3>
                <ul className={cn('space-y-3 text-gray-700')}>
                  <li>
                    <strong>아키텍처 설계</strong>: 현업 대규모 프로젝트에서
                    솔루션에 최적화된 프론트엔드 아키텍처 설계 경험
                  </li>
                  <li>
                    <strong>프로젝트 리더십</strong>: React 기반 주요
                    프로젝트들을 성공적으로 리드하며 팀 협업 역량 강화
                  </li>
                  <li>
                    <strong>상태 관리</strong>: Redux와 React Query를 활용한
                    클라이언트, 서버 상태 관리 및 데이터 핸들링
                  </li>
                  <li>
                    <strong>성능 모니터링</strong>: Lighthouse CI을 통한
                    주기적인
                    <strong> 성능 모니터링</strong>
                    으로 사용자 경험 개선 방향 제시
                  </li>
                  <li>
                    <strong>테스트</strong>: Storybook, Jest, React Testing
                    Library를 통한 테스팅 경험
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </SectionLayout>

        {/* 프로젝트 섹션 */}
        <SectionLayout title='프로젝트' icon={Briefcase}>
          <div className={cn('space-y-8')}>
            {PROJECTS.map((project, idx) => (
              <Card key={idx} className='flex gap-4 justify-between'>
                <div className={cn('flex-[3]')}>
                  <div className={cn('flex justify-between items-start mb-4')}>
                    <div>
                      <Link
                        to={`/project/${project.path}`}
                        className={cn('!no-underline text-black')}
                      >
                        <h3 className={cn('text-xl font-bold mb-2')}>
                          {project.title}
                        </h3>{' '}
                      </Link>
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
                <div className='flex-[2]  items-center justify-center hidden lg:flex'>
                  <div
                    className='relative w-[50%]'
                    style={{ paddingTop: '50%' }}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      draggable='false'
                      className={cn(
                        'absolute object-contain h-full w-full left-0 top-0 select-none'
                      )}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionLayout>

        {/* 교육 섹션 */}
        <SectionLayout title='교육 및 자격증' icon={School}>
          <div className={cn('grid md:grid-cols-2 gap-6')}>
            <Card>
              <div className={cn('space-y-6')}>
                <div className={cn('border-l-2 border-blue-200')}>
                  <h3 className={cn('text-xl font-semibold text-gray-900')}>
                    동국대학교 정보통신공학과
                  </h3>
                  <p className={cn('text-gray-500 text-sm mb-2')}>
                    2018.03 ~ 2024.02
                  </p>
                  <ul
                    className={cn(
                      'list-disc pl-5 text-gray-600 space-y-1 mb-0'
                    )}
                  >
                    <li>학사 졸업</li>
                    <li>전체 평균 : 3.82/4.5</li>
                    <li>전공 평균 : 3.86/4.5</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card>
              <div className={cn('space-y-6')}>
                <div className={cn('border-l-2 border-blue-200')}>
                  <h3 className={cn('text-xl font-semibold text-gray-900')}>
                    프로그래머스 데브코스
                  </h3>
                  <p className={cn('text-gray-500 text-sm mb-2')}>
                    2024.07 ~ 2024.12
                  </p>
                  <ul
                    className={cn(
                      'list-disc pl-5 text-gray-600 space-y-1 mb-0'
                    )}
                  >
                    <li>4개 프로젝트 개발 경험</li>
                    <li>모던 자바스크립트 딥 다이브 스터디</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card>
              <div className={cn('space-y-6')}>
                <div className={cn('border-l-2 border-blue-200')}>
                  <h3 className={cn('text-xl font-semibold text-gray-900')}>
                    정보처리기사 자격증
                  </h3>
                  <p className={cn('text-gray-500 text-sm mb-2')}>2023.06</p>
                  <ul
                    className={cn(
                      'list-disc pl-5 text-gray-600 space-y-1 mb-0'
                    )}
                  >
                    <li>국가기술자격증 취득</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className={cn('space-y-6')}>
                <div className={cn('border-l-2 border-blue-200')}>
                  <h3 className={cn('text-xl font-semibold text-gray-900')}>
                    삼성전자 DX부문 동계 SW 역량강화 특강
                  </h3>
                  <p className={cn('text-gray-500 text-sm mb-2')}>
                    2023.01 ~ 2023.02
                  </p>
                  <ul
                    className={cn(
                      'list-disc pl-5 text-gray-600 space-y-1 mb-0'
                    )}
                  >
                    <li>Java를 이용한 알고리즘 학습</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </SectionLayout>

        {/* 수상 경력 섹션 */}
        <SectionLayout title='수상 경력' icon={Trophy}>
          <div className={cn('grid md:grid-cols-2 gap-6')}>
            <Card
            // onClick={() => {
            //   alert({
            //     content: (
            //       <div>
            //         <h3>데브코스 성적 우수상</h3>
            //         <p>
            //           프로그래머스 데브코스에 성실히 참여하여 성적 1등을
            //           달성했습니다.
            //         </p>
            //         <p>2024.12</p>

            //         {/* todo: 이미지 추가 */}
            //       </div>
            //     ),
            //   });
            // }}
            >
              <h3 className={cn('text-xl font-semibold mb-2 text-gray-900')}>
                데브코스 성적 우수상
              </h3>
              <p className={cn('text-gray-500 text-sm mb-2')}>
                프로그래머스 데브코스에 성실히 참여하여 성적 1등을 달성했습니다.
              </p>
              <span className={cn('text-gray-500 text-sm ')}>2024.12</span>
            </Card>
            <Card>
              <h3 className={cn('text-xl font-semibold mb-2 text-gray-900 ')}>
                데브코스 프로젝트 인기상
              </h3>
              <p className={cn('text-gray-500 text-sm mb-2')}>
                프로그래머스 데브코스의 최종 프로젝트에서 13팀 중 3팀에게 주는
                인기상을 수여받았습니다.
              </p>
              <span className={cn('text-gray-500 text-sm ')}>2024.12</span>
            </Card>
          </div>
        </SectionLayout>

        {/* 핵심 역량 섹션 */}
        {/* <SectionLayout icon={Code} title='핵심 역량'>
          <div className={cn('grid md:grid-cols-2 gap-6 mb-6')}>
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
          <div className={cn('grid md:grid-cols-2 lg:grid-cols-3 gap-6')}>
            {SKILL_CATEGORIES.map((category, idx) => (
              <Card
                key={idx}
                className={cn(
                  'relative overflow-hidden group',
                  'bg-gradient-to-br from-white to-gray-50',
                  'hover:shadow-xl transition-all duration-300',
                  'border-l-4 border-transparent',
                  'hover:border-l-blue-500'
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300',
                    `bg-gradient-to-br ${category.color}`
                  )}
                />

                <div className={cn('relative z-10 p-6')}>
                  <div className={cn('flex  items-center gap-3 mb-5')}>
                    <span
                      className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center text-xl',
                        `bg-gradient-to-br ${category.color}`,
                        'shadow-lg group-hover:scale-110 transition-transform duration-300'
                      )}
                    >
                      {category.icon}
                    </span>
                    <h3 className={cn('text-lg font-bold text-gray-800')}>
                      {category.title}
                    </h3>
                  </div>

                  <div className={cn('flex flex-wrap gap-2')}>
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={cn(
                          'px-3 py-1 rounded-full text-sm font-medium',
                          'bg-gray-200 text-gray-700',
                          'hover:bg-blue-100 hover:text-blue-800',
                          'transition-all duration-200',
                          'border border-gray-200 hover:border-blue-300',
                          'transform hover:scale-105'
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionLayout> */}
      </main>
    </Layout>
  );
}
