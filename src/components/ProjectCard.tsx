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

        <div className='order-first flex flex-[2] items-center justify-center rounded-lg bg-gray-700 md:order-last md:bg-inherit'>
          <Card.Thumbnail src={thumbnail} alt={title} />
        </div>
      </Card.Layout>
    </Card>
  );
}
