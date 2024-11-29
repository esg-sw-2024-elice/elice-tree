import * as S from './Input.styles';
import { ForwardedRef, forwardRef, KeyboardEvent } from 'react';

export default forwardRef(function Input(
  {
    type,
    placeholder,
    onPressEnter = () => {},
  }: {
    type: 'text' | 'password';
    placeholder: string;
    onPressEnter?: () => void;
  },
  ref: ForwardedRef<HTMLInputElement>,
) {
  const handlePressKeyDown = onPressEnter
    ? (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') {
          return;
        }
        onPressEnter();
      }
    : undefined;
  return <S.Input ref={ref} type={type} placeholder={placeholder} onKeyDown={handlePressKeyDown} />;
});
