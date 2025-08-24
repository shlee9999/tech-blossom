import { Card } from '@site/src/components/Card';
import { cn } from '@site/src/utils/cn';
import Link from '@docusaurus/Link';

export interface ProjectCardProps {
  path: string;
  title: string;
  period: string;
  contribution: string[];
  tech: string[];
  thumbnail: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  path,
  title,
  period,
  contribution,
  tech,
  thumbnail,
}: ProjectCardProps) {
  return (
    <Card className='flex gap-4 justify-between'>
      {/* Left Project Info */}
      <div className={cn('flex-[3]')}>
        {/* Project Title and Period */}
        <div className={cn('flex justify-between items-start mb-4')}>
          <div>
            <Link
              to={`/project/${path}`}
              className={cn(
                '!no-underline text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400'
              )}
            >
              <h3 className={cn('text-xl font-bold mb-2')}>{title}</h3>{' '}
            </Link>
            <p className={cn('text-gray-500 dark:text-gray-400 text-sm mb-3')}>
              {period}
            </p>
          </div>
        </div>

        {/* Tech Stack and Contribution */}
        <div className={cn('mb-4')}>
          {/* Tech Stack */}
          <div className={cn('flex flex-wrap gap-2 mb-4')}>
            {tech.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'px-3 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 rounded-full text-sm'
                )}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Contribution */}
          <ul className={cn('space-y-2')}>
            {contribution.map((item, i) => (
              <li
                key={i}
                className={cn(
                  'flex items-start text-gray-600 dark:text-gray-400'
                )}
              >
                <span className={cn('text-blue-500 dark:text-blue-400 mr-2')}>
                  ▹
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right Thumbnail */}
      <div className='flex-[2]  items-center justify-center hidden lg:flex'>
        <div className='relative w-[50%]' style={{ paddingTop: '50%' }}>
          <img
            src={thumbnail}
            alt={title}
            draggable='false'
            className={cn(
              'absolute object-contain h-full w-full left-0 top-0 select-none'
            )}
          />
        </div>
      </div>
    </Card>
  );
}
