import { Card } from '@site/src/components/Card';

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
    <Card>
      <Card.Layout>
        <Card.Main>
          <Card.Header>
            <Card.Link to={`/project/${path}`}>
              <Card.Title className='text-xl font-bold mb-2'>
                {title}
              </Card.Title>
            </Card.Link>
            <Card.Period className='mb-3'>{period}</Card.Period>
          </Card.Header>

          <Card.Content className=''>
            <Card.TechStack>
              {tech.map((techItem) => (
                <Card.Tag key={techItem}>{techItem}</Card.Tag>
              ))}
            </Card.TechStack>

            <Card.List className='list-inside'>
              {contribution.map((item, i) => (
                <Card.Item key={i}>{item}</Card.Item>
              ))}
            </Card.List>
          </Card.Content>
        </Card.Main>

        <Card.Thumbnail src={thumbnail} alt={title} />
      </Card.Layout>
    </Card>
  );
}
