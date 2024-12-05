import * as S from './AddTodo.styles';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import {
  MSG_ERROR_VALIDATION_TODO_CONTENT,
  TEXT_ADD_TODO_BUTTON_ADD,
  TEXT_ADD_TODO_INPUT_PLACEHOLDER,
  TEXT_ADD_TODO_LABEL_INPUT_CARBON,
  TEXT_ADD_TODO_LABEL_INPUT_TREE,
} from '@/constants';
import { validateIsEmpty } from '@/utils';
import Modal, { TActionsModal } from '@/components/shared/Modal';
import { ITodo } from '@/interfaces';

export default function AddTodo({
  onClick,
}: {
  onClick: (todo: Omit<ITodo, 'id' | 'isCompleted'>) => void;
}) {
  const refModalError = useRef<TActionsModal>(null);
  const [enteredTodo, setEnteredTodo] = useState('');
  const [enteredCarbon, setEnteredCarbon] = useState(0.01);
  const [enteredTree, setEnteredTree] = useState(1);
  const handleChangeInputTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setEnteredTodo(e.target.value);
  const handleChangeInputCarbon = (e: ChangeEvent<HTMLInputElement>) =>
    setEnteredCarbon(Number(Math.max(0.01, Number(e.target.value)).toFixed(2)));
  const handleChangeInputTree = (e: ChangeEvent<HTMLInputElement>) =>
    setEnteredTree(Number(Math.max(1, Number(e.target.value)).toFixed(0)));
  const handleClickBtnCreateTodo = () => {
    if (!validateIsEmpty(enteredTodo)) {
      handleShowModalError('Error', MSG_ERROR_VALIDATION_TODO_CONTENT);
      return;
    }
    onClick({
      content: enteredTodo,
      carbon: enteredCarbon,
      tree: enteredTree,
    });
    setEnteredTodo('');
    setEnteredCarbon(0.0);
    setEnteredTree(0);
  };
  const handlePressKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }
    handleClickBtnCreateTodo();
  };
  function handleShowModalError(title: string, msg: string) {
    refModalError.current?.show(title, msg);
  }
  return (
    <S.DivContainer>
      <S.InputTodo
        type="text"
        value={enteredTodo}
        onChange={handleChangeInputTodo}
        onKeyDown={handlePressKeyDown}
        placeholder={TEXT_ADD_TODO_INPUT_PLACEHOLDER}
      />
      <S.LabelInputTodo>
        {TEXT_ADD_TODO_LABEL_INPUT_CARBON}
        <S.InputTodo
          type="number"
          step={0.01}
          min={0.01}
          value={enteredCarbon}
          onChange={handleChangeInputCarbon}
          onKeyDown={handlePressKeyDown}
        />
      </S.LabelInputTodo>
      <S.LabelInputTodo>
        {TEXT_ADD_TODO_LABEL_INPUT_TREE}
        <S.InputTodo
          type="number"
          step={1}
          min={1}
          value={enteredTree}
          onChange={handleChangeInputTree}
          onKeyDown={handlePressKeyDown}
        />
      </S.LabelInputTodo>
      <S.ButtonAddTodo onClick={handleClickBtnCreateTodo}>
        {TEXT_ADD_TODO_BUTTON_ADD}
      </S.ButtonAddTodo>
      <Modal ref={refModalError} type="error" />
    </S.DivContainer>
  );
}
