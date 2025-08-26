import { FolderOpen } from 'lucide-react';
import { cn } from '../utils/cn';
import { SectionLayout } from '../layout/SectionLayout';
import { PROJECTS } from '../data/projects';
import ProjectCard from '../ui/ProjectCard';

export const ProjectsSection = () => {
  return (
    <SectionLayout title='Projects' icon={FolderOpen}>
      <div className={cn('space-y-8')}>
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </SectionLayout>
  );
};
