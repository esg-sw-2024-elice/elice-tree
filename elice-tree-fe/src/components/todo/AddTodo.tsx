import * as S from './AddTodo.styles';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {
  MSG_ERROR_VALIDATION_TODO_CONTENT,
  TEXT_ADD_TODO_BUTTON_ADD,
  TEXT_ADD_TODO_INPUT_PLACEHOLDER,
} from '@/constants';

export default function AddTodo({ onClick }: { onClick: (todo: string) => void }) {
  const [enteredTodo, setEnteredTodo] = useState('');
  const handleChangeInputTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setEnteredTodo(e.target.value);
  const handleClickBtnCreateTodo = () => {
    if (!enteredTodo || enteredTodo.trim() === '') {
      alert(MSG_ERROR_VALIDATION_TODO_CONTENT);
      return;
    }
    onClick(enteredTodo);
    setEnteredTodo('');
  };
  const handlePressKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }
    handleClickBtnCreateTodo();
  };
  return (
    <S.DivContainer>
      <S.InputTodo
        type="text"
        value={enteredTodo}
        onChange={handleChangeInputTodo}
        onKeyDown={handlePressKeyDown}
        placeholder={TEXT_ADD_TODO_INPUT_PLACEHOLDER}
      />
      <S.ButtonAddTodo onClick={handleClickBtnCreateTodo}>
        {TEXT_ADD_TODO_BUTTON_ADD}
      </S.ButtonAddTodo>
    </S.DivContainer>
  );
}
