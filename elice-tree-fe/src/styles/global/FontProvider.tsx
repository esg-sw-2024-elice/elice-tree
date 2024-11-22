import React, { ReactNode } from 'react';
import { FontContainer } from './index.styles';

interface FontProviderPropsTypes {
  children: ReactNode;
}

export default function FontProvider({ children }: FontProviderPropsTypes) {
  return <FontContainer>{children}</FontContainer>;
}
