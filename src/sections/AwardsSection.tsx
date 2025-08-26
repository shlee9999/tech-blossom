import { Award } from 'lucide-react';
import { cn } from '../utils/cn';
import { SectionLayout } from '../layout/SectionLayout';
import { Card } from '../ui/Card';
import { AWARDS } from '../data/awards';

export const AwardsSection = () => {
  return (
    <SectionLayout title='Awards' icon={Award}>
      <div className={cn('grid md:grid-cols-2 gap-6')}>
        {AWARDS.map((award, idx) => (
          <Card key={idx}>
            <Card.Title>{award.title}</Card.Title>
            <Card.Period>{award.period}</Card.Period>
            <Card.List>
              {award.items.map((item, idx) => (
                <Card.Item key={idx}>{item}</Card.Item>
              ))}
            </Card.List>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};
