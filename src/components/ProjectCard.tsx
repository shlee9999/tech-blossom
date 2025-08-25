import { Card } from '@site/src/components/Card';

export interface ProjectCardProps {
  path: string;
  title: string;
  subTitle: string;
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
  subTitle,
  period,
  contribution,
  tech,
  thumbnail,
}: ProjectCardProps) {
  return (
    <Card>
      <Card.Layout>
        <Card.Main>
          <Card.Header className='flex items-center justify-between gap-3 mb-3 lg:mb-4'>
            <Card.Thumbnail
              src={thumbnail}
              alt={title}
              size='3rem'
              className='!p-5 flex-shrink-0 lg:hidden !w-16 !h-16 sm:!w-18 sm:!h-18 shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden bg-blue-500 rounded-full'
            />
            <div className='flex-1 min-w-0'>
              <Card.Title className='text-lg lg:text-xl font-bold mb-1 lg:mb-2'>
                <Card.Link to={`/project/${path}`}>{title}</Card.Link>
              </Card.Title>
              <Card.Title
                level='h4'
                className='text-sm lg:text-base font-bold mb-1 lg:mb-2'
              >
                {subTitle}
              </Card.Title>
              <Card.Period className='mb-2 lg:mb-3'>{period}</Card.Period>
            </div>
          </Card.Header>

          <Card.Content className=''>
            <Card.TechStack>
              {tech.map(techItem => (
                <Card.Tag key={techItem}>{techItem}</Card.Tag>
              ))}
            </Card.TechStack>

            <Card.List>
              {contribution.map((item, i) => (
                <Card.Item key={i}>{item}</Card.Item>
              ))}
            </Card.List>
          </Card.Content>
        </Card.Main>

        <div className='flex-[2] items-center justify-center hidden lg:flex'>
          <Card.Thumbnail src={thumbnail} alt={title} />
        </div>
      </Card.Layout>
    </Card>
  );
}
