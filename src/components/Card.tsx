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
        'overflow-hidden rounded-2xl p-6 shadow-lg lg:p-8',
        'relative transition-transform hover:scale-[1.02]',
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
        '!mt-0 text-sm text-gray-500 dark:text-gray-400',
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
    <ul className={cn('space-y-1 text-gray-600 dark:text-gray-400', className)}>
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
          '!no-underline hover:text-primary-500 dark:text-white dark:hover:text-primary-400',
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
        'text-primary-600 hover:underline dark:text-primary-400',
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
    <div
      className={cn(
        'flex flex-col justify-between gap-4 lg:flex-row',
        className
      )}
    >
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
  return <div className={cn('mb-0 flex-[3]', className)}>{children}</div>;
};

// 썸네일 영역
Card.Thumbnail = function Thumbnail({
  src,
  alt,
  className,
  size = '50%',
  to,
}: {
  src: string;
  alt: string;
  className?: string;
  size?: string;
  to?: string;
}) {
  return (
    <div
      className={cn(
        'relative transition-transform duration-150 hover:scale-105',
        className
      )}
      style={{ paddingTop: size, width: size }}
    >
      <img
        src={src}
        alt={alt}
        draggable='false'
        className={cn(
          'absolute left-0 top-0 h-full w-full select-none object-contain transition-transform duration-300'
        )}
      />
      <Link to={to} className='block'>
        <div className='absolute -inset-5 box-content'></div>
      </Link>
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
    <div className={cn('mb-4 flex flex-wrap gap-2', className)}>{children}</div>
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
        'rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-800 dark:bg-primary-800/30 dark:text-primary-300',
        className
      )}
    >
      {children}
    </span>
  );
};
