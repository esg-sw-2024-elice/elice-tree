import { useMemo } from 'react';
import * as S from './Todo.styles';
import { ITodo } from '@/interfaces';
import { TEXT_TODO_REDUCTION } from '@/constants';

export default function Todo({
  todo,
  onToggle,
}: {
  todo: ITodo;
  onToggle: (index: number) => void;
}) {
  const { id, content, tree, carbon, isCompleted } = todo;
  const reduction = useMemo(() => (tree * carbon).toFixed(2), [tree, carbon]);
  const handleClickBtnComplete = onToggle;
  return (
    <S.DivContainer>
      <S.DivReduction isCompleted={isCompleted}>
        {TEXT_TODO_REDUCTION(tree, reduction)}
      </S.DivReduction>
      <S.ListTodo>
        <S.ParagraphTodoContent isCompleted={isCompleted}>{content}</S.ParagraphTodoContent>
        <S.ButtonToggle onClick={() => handleClickBtnComplete(id)}>
          <S.SpanToggle>{isCompleted ? '✔' : ''}</S.SpanToggle>
        </S.ButtonToggle>
      </S.ListTodo>
    </S.DivContainer>
  );
}
