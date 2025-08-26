import { GraduationCap } from 'lucide-react';
import { cn } from '../utils/cn';
import { SectionLayout } from '../layout/SectionLayout';
import { Card } from '../ui/Card';
import { EDUCATIONS } from '../data/educations';

export const EducationSection = () => {
  return (
    <SectionLayout title='Education' icon={GraduationCap}>
      <div className={cn('grid md:grid-cols-2 gap-6')}>
        {EDUCATIONS.map((education, idx) => (
          <Card key={idx}>
            <Card.Title>{education.title}</Card.Title>
            <Card.Period>{education.period}</Card.Period>
            <Card.List>
              {education.items.map((item, idx) => (
                <Card.Item key={idx}>{item}</Card.Item>
              ))}
            </Card.List>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};
