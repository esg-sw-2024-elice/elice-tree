import React from 'react';
import * as S from './BaseButton_style';

interface BaseButtonProps {
  children: React.ReactNode;
  type: 'submit' | 'button';
  onClick?: (...args: any[]) => void;
  className?: string;
}

/**
 * @param children: 버튼 내부에 들어갈 요소
 * @param type: 버튼 종류
 * @param onClick: 클릭 시 할 행동 (disable true일 시 undefined)
 * @param className: 추가 스타일링 (기본은 하얀색에 검정 글자)
 */

export default function BaseButton(props: BaseButtonProps) {
  const { children, type, onClick, className } = props;

  return (
    <S.ButtonWrapper type={type} onClick={onClick} className={className}>
      {children}
    </S.ButtonWrapper>
  );
}

BaseButton.Styled = S.ButtonWrapper;
