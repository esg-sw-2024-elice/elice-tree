import * as S from './Todos.styles';
import { useMemo } from 'react';
import TodoElement from './Todo';
import { useAuth } from '@/hooks/use-auth';
import { useTodo } from '@/hooks/use-todo';
import {
  TEXT_TODOS_FOOTER_SUMMARY,
  TEXT_TODOS_FOOTER_SUMMARY_EMPTY,
  TEXT_TODOS_TITLE_PARAGRAPH,
  TEXT_TODOS_NO_CONTENT,
  TEXT_TODOS_DIV_TOTAL,
} from '@/constants';
import { validateIsEmpty } from '@/utils';

export default function Todos() {
  const { isAuthenticated, userId } = useAuth();
  const { todos, toggleTodo } = useTodo();
  const lengthTodos = useMemo(() => todos.length, [todos]);

  const totalTree = useMemo(
    () =>
      todos
        .filter((todo) => todo.isCompleted) // isCompleted가 true인 항목 필터링
        .reduce((total, todo) => total + todo.tree, 0),
    [todos],
  );

  const totalCarbon = useMemo(
    () =>
      todos
        .filter((todo) => todo.isCompleted) // isCompleted가 true인 항목 필터링
        .reduce((total, todo) => total + todo.carbon, 0) * totalTree,
    [totalTree, todos],
  );

  const contentTodos = useMemo(() => {
    if (!lengthTodos) {
      // Maybe never reach here in now...
      return <S.DivNoContent>{TEXT_TODOS_NO_CONTENT}</S.DivNoContent>;
    }
    return (
      <S.UnorderedListContainer>
        {todos.map((todo) => (
          <TodoElement key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </S.UnorderedListContainer>
    );
  }, [lengthTodos, todos, toggleTodo]);

  const summaryFooter =
    isAuthenticated && validateIsEmpty(userId) ? (
      Boolean(totalTree) ? (
        <>{TEXT_TODOS_FOOTER_SUMMARY(userId, totalTree)}</>
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
          {contentTodos}
          <S.DivTotal>{TEXT_TODOS_DIV_TOTAL(totalCarbon)}</S.DivTotal>
        </S.ContentsWrapper>
      </S.DivWrapperList>
      <S.Heading1Summary>{summaryFooter}</S.Heading1Summary>
    </S.DivContainer>
  );
}
