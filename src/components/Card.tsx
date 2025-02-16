import { cn } from '@site/src/utils/cn';
import { Circle } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow-lg overflow-hidden p-8',
        'transition-transform hover:scale-[1.02] relative bg-white',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
