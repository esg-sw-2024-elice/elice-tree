import { API_URL } from '@/configs';
import { createContext, PropsWithChildren, useLayoutEffect, useState } from 'react';
import { MSG_ERROR_VALIDATION_TODO_DUPLICATE } from '@/constants';
import { ITodo } from '@/interfaces';
import { useFetch } from '@/hooks/use-fetch';

const URL_API_TODOS = `${API_URL}/list.json`;

export const CtxTodo = createContext<{
  todos: ITodo[];
  addTodo: (content: string) => void;
  toggleTodo: (index: number) => void;
}>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
});

export default function TodoProvider({ children }: PropsWithChildren) {
  const { isFetching, data: fetchedTodos, error } = useFetch<ITodo[]>(URL_API_TODOS);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useLayoutEffect(() => {
    if (!isFetching && !error) {
      setTodos(fetchedTodos || []);
    }
  }, [isFetching, fetchedTodos, error]);
  const addTodo = (content: string) => {
    if (!content || todos.some((todo) => todo.content === content)) {
      alert(MSG_ERROR_VALIDATION_TODO_DUPLICATE);
      return;
    }
    setTodos((p) => [
      ...p,
      {
        id: !p.length ? 0 : p[p.length - 1].id + 1,
        content,
        completed: false,
      },
    ]);
  };
  const toggleTodo = (index: number) =>
    setTodos((p) =>
      p.map((todo) => {
        if (todo.id === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  return (
    <CtxTodo.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
      }}
    >
      {children}
    </CtxTodo.Provider>
  );
}
