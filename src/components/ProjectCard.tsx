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
          <Card.Header className='mb-3 flex items-center justify-between gap-3 lg:mb-4'>
            <Card.Thumbnail
              src={thumbnail}
              alt={title}
              size='3rem'
              className='sm:!w-18 sm:!h-18 !h-16 !w-16 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 bg-blue-500 !p-5 shadow-sm dark:border-gray-600 lg:hidden'
            />
            <div className='min-w-0 flex-1'>
              <Card.Title className='mb-1 text-lg font-bold lg:mb-2 lg:text-xl'>
                <Card.Link to={`/project/${path}`}>{title}</Card.Link>
              </Card.Title>
              <Card.Title
                level='h4'
                className='mb-1 text-sm font-bold lg:mb-2 lg:text-base'
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

        <div className='hidden flex-[2] items-center justify-center lg:flex'>
          <Card.Thumbnail src={thumbnail} alt={title} />
        </div>
      </Card.Layout>
    </Card>
  );
}
