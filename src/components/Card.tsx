import { cn } from '@site/src/utils/cn';
import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow-lg overflow-hidden p-8',
        'transition-transform hover:scale-[1.02] relative',
        'bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
        'shadow-gray-200/50 dark:shadow-gray-900/50',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
