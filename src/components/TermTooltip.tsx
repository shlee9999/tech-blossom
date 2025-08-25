import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from '@docusaurus/Link';
import { getTerminologyById, TerminologyItem } from '../data/terminology';
// CSS는 custom.css에서 전역 임포트됨

interface TermTooltipProps {
  termId: string;
  children: React.ReactNode;
  className?: string;
}

export const TermTooltip: React.FC<TermTooltipProps> = ({
  termId,
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const term: TerminologyItem | undefined = getTerminologyById(termId);

  // 다크모드 감지
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(
        document.documentElement.getAttribute('data-theme') === 'dark'
      );
    };

    checkDarkMode(); // 초기값 설정

    // MutationObserver로 data-theme 변화 감지
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const backgroundColor = isDarkMode ? '#1c1e21' : '#ffffff';

  // 툴팁 위치 계산 함수
  const updateTooltipPosition = useCallback(() => {
    if (isVisible && linkRef.current && tooltipRef.current) {
      const linkRect = linkRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      let x = linkRect.left + linkRect.width / 2 - tooltipRect.width / 2;
      let y = linkRect.top - tooltipRect.height - 15; // 더 멀리 떨어뜨리기

      // 화면 왼쪽 경계 확인
      if (x < 8) {
        x = 8;
      }

      // 화면 오른쪽 경계 확인
      if (x + tooltipRect.width > viewportWidth - 8) {
        x = viewportWidth - tooltipRect.width - 8;
      }

      // 화면 위쪽 경계 확인 (툴팁을 아래로 표시)
      if (y < 8) {
        y = linkRect.bottom + 8;
      }

      setPosition({ x, y });
    }
  }, [isVisible]);

  // 초기 위치 설정
  useEffect(() => {
    updateTooltipPosition();
  }, [isVisible, updateTooltipPosition]);

  // 스크롤/리사이즈 시 툴팁 위치 업데이트
  useEffect(() => {
    if (isVisible) {
      window.addEventListener('scroll', updateTooltipPosition, {
        passive: true,
      });
      window.addEventListener('resize', updateTooltipPosition, {
        passive: true,
      });
      return () => {
        window.removeEventListener('scroll', updateTooltipPosition);
        window.removeEventListener('resize', updateTooltipPosition);
      };
    }
  }, [isVisible, updateTooltipPosition]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (term) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    // 300ms 딜레이 후에 툴팁 숨기기
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!term) {
    // 용어를 찾을 수 없는 경우 일반 링크로 렌더링
    return (
      <Link to={`/terminology/${termId}`} className={className}>
        {children}
        <span className='term-tooltip-link'>자세히 보기 →</span>
      </Link>
    );
  }

  return (
    <>
      <Link
        ref={linkRef}
        to={term.path}
        className={`term-link ${className}`}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>

      {isVisible && (
        <div
          ref={tooltipRef}
          className='term-tooltip'
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 99999,
            backgroundColor: backgroundColor,
          }}
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='tooltip-header'>
            <Link to={term.path} className={className}>
              <strong>{term.title}</strong>
            </Link>
          </div>
          <div className='tooltip-content'>{term.hoverText}</div>
          <div className='tooltip-arrow' />
        </div>
      )}
    </>
  );
};

export default TermTooltip;
