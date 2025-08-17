import React from 'react';
import { AlertProvider } from 'react-useful-kit';

// Docusaurus의 기본 Root 컴포넌트를 래핑
export default function Root({ children }: { children: React.ReactNode }) {
  return <AlertProvider>{children}</AlertProvider>;
}
