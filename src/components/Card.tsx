import { cn } from '@site/src/utils/cn';
import { ReactNode } from 'react';
import Link from '@docusaurus/Link';

interface CardProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow-lg overflow-hidden p-6 lg:p-8',
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

// 콘텐츠 영역을 위한 컨테이너
Card.Content = function Content({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('space-y-6', className)}>{children}</div>;
};

// 헤더 영역 (제목 + 날짜)
Card.Header = function Header({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('mb-4', className)}>{children}</div>;
};

// 제목
Card.Title = function Title({
  children,
  className,
  level = 'h3',
}: {
  children: ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}) {
  const Component = level;
  return (
    <Component
      className={cn(
        'text-xl font-semibold text-gray-900 dark:text-gray-100',
        className
      )}
    >
      {children}
    </Component>
  );
};

// 날짜/기간
Card.Period = function Period({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-gray-500 dark:text-gray-400 text-sm !mt-0',
        className
      )}
    >
      {children}
    </p>
  );
};

// 설명 목록
Card.List = function List({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={cn(' text-gray-600 dark:text-gray-400 space-y-1 ', className)}
    >
      {children}
    </ul>
  );
};

// 목록 아이템
Card.Item = function Item({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <li className={cn(className)}>{children}</li>;
};

// 설명 텍스트
Card.Description = function Description({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-gray-600 dark:text-gray-400', className)}>
      {children}
    </p>
  );
};

// 링크
Card.Link = function CardLink({
  children,
  className,
  href,
  to,
  external = false,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  to?: string;
  external?: boolean;
}) {
  if (to) {
    return (
      <Link
        to={to}
        className={cn(
          '!no-underline dark:text-white hover:text-blue-500 dark:hover:text-blue-400',
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        'text-blue-600 dark:text-blue-400 hover:underline',
        className
      )}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

// 레이아웃 컨테이너
Card.Layout = function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex gap-4 justify-between', className)}>
      {children}
    </div>
  );
};

// 메인 콘텐츠 영역
Card.Main = function Main({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('flex-[3] mb-0', className)}>{children}</div>;
};

// 썸네일 영역
Card.Thumbnail = function Thumbnail({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className='flex-[2] items-center justify-center hidden lg:flex'>
      <div className='relative w-[50%]' style={{ paddingTop: '50%' }}>
        <img
          src={src}
          alt={alt}
          draggable='false'
          className={cn(
            'absolute object-contain h-full w-full left-0 top-0 select-none',
            className
          )}
        />
      </div>
    </div>
  );
};

// 기술 스택 컨테이너
Card.TechStack = function TechStack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-wrap gap-2 mb-4', className)}>{children}</div>
  );
};

// 기술 태그
Card.Tag = function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'px-3 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 rounded-full text-sm',
        className
      )}
    >
      {children}
    </span>
  );
};
