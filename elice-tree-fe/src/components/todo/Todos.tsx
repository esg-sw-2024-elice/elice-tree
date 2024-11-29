import * as S from './Todos.styles';
import { useMemo } from 'react';
import TodoElement from './Todo';
// import AddTodo from './AddTodo';
import { useAuth } from '@/hooks/use-auth';
import { useTodo } from '@/hooks/use-todo';
import {
  TEXT_TODOS_FOOTER_SUMMARY,
  TEXT_TODOS_FOOTER_SUMMARY_EMPTY,
  TEXT_TODOS_TITLE_PARAGRAPH,
  TEXT_TODOS_DIV_TOTAL,
} from '@/constants';

export default function Todos() {
  const { isAuthenticated, userId } = useAuth();
  const { todos, toggleTodo } = useTodo();
  const lengthTodos = useMemo(() => todos.length, [todos]);
  const lengthTodosCompleted = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  );
  const summaryFooter =
    isAuthenticated && Boolean(userId?.trim().length) ? (
      Boolean(lengthTodos) ? (
        <>{TEXT_TODOS_FOOTER_SUMMARY(userId, lengthTodosCompleted, lengthTodos)}</>
      ) : (
        <>{TEXT_TODOS_FOOTER_SUMMARY_EMPTY}</>
      )
    ) : (
      <></>
    );
  return (
    <S.DivContainer>
      <S.DivWrapperList>
        <S.IconList />
        <S.ParagraphTitle>{TEXT_TODOS_TITLE_PARAGRAPH}</S.ParagraphTitle>
        <S.ContentsWrapper>
          <S.UnorderedListContainer>
            {todos.map((todo) => (
              <TodoElement key={todo.id} todo={todo} onToggle={toggleTodo} />
            ))}
          </S.UnorderedListContainer>
          <S.DivTotal>{TEXT_TODOS_DIV_TOTAL(lengthTodosCompleted)}</S.DivTotal>
        </S.ContentsWrapper>
        {/* <AddTodo onClick={addTodo} /> */}
      </S.DivWrapperList>
      <S.Heading1Summary>{summaryFooter}</S.Heading1Summary>
    </S.DivContainer>
  );
}
