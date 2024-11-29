import * as S from './Todo.styles';
import { ITodo } from '@/interfaces';

export default function Todo({
  todo,
  onToggle,
}: {
  todo: ITodo;
  onToggle: (index: number) => void;
}) {
  const { id, content, completed } = todo;
  const handleClickBtnComplete = onToggle;
  return (
    <S.ListContainer>
      <S.ParagraphTodoContent isCompleted={completed}>{content}</S.ParagraphTodoContent>
      <S.ButtonToggle onClick={() => handleClickBtnComplete(id)}>
        <S.SpanToggle>{completed ? '✔' : ''}</S.SpanToggle>
      </S.ButtonToggle>
    </S.ListContainer>
  );
}
