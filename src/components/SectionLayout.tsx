import { cn } from '@site/src/utils/cn';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface SectionLayoutProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionLayout({
  icon: Icon,
  title,
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section className={cn('mb-20', className)}>
      <div className={cn('mb-8 flex items-center')}>
        <Icon className='mr-2 h-8 w-8 text-primary-600 dark:text-primary-400' />
        <h2
          className={cn('text-3xl font-bold text-gray-800 dark:text-gray-200')}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
