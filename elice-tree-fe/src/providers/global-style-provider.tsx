import { ReactNode } from 'react';
import { GlobalStyle } from '@/styles';

export function GlobalStyleProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
