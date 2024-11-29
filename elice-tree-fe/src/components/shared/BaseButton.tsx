import * as S from './BaseButton.styles';
import { PropsWithChildren, HTMLAttributes } from 'react';

/**
 * @param type: 버튼 종류
 * @param className: 추가 스타일링 (기본은 하얀색에 검정 글자)
 * @param onClick: 클릭 시 할 행동
 * @param children: 버튼 내부에 들어갈 요소
 */

export default function BaseButton({
  type = 'button',
  className,
  onClick,
  children,
}: PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset';
}> &
  HTMLAttributes<HTMLButtonElement>) {
  return (
    <S.Button type={type} onClick={onClick} className={className}>
      {children}
    </S.Button>
  );
}
