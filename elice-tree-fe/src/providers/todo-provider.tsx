import { API_URL } from '@/configs';
import { createContext, PropsWithChildren, useLayoutEffect, useState } from 'react';
import { MSG_ERROR_VALIDATION_TODO_DUPLICATE } from '@/constants';
import { ITodo } from '@/interfaces';
import { useFetch } from '@/hooks/use-fetch';

const URL_API_TODOS = `${API_URL}/list.json`;

export const CtxTodo = createContext<{
  todos: ITodo[];
  addTodo: (content: Omit<ITodo, 'id' | 'isCompleted'>) => void;
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
});

export default function TodoProvider({ children }: PropsWithChildren) {
  const { isFetching, data: fetchedTodos, error } = useFetch<ITodo[]>(URL_API_TODOS);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useLayoutEffect(() => {
    if (!isFetching && !error) {
      setTodos(fetchedTodos || []);
    }
  }, [isFetching, fetchedTodos, error]);
  const addTodo = (todo: Omit<ITodo, 'id' | 'isCompleted'>) => {
    const { content } = todo;
    if (!content || todos.some((todo) => todo.content === content)) {
      alert(MSG_ERROR_VALIDATION_TODO_DUPLICATE);
      return;
    }
    setTodos((p) => [
      ...p,
      {
        id: !p.length ? 0 : p[p.length - 1].id + 1,
        ...todo,
        isCompleted: false,
      },
    ]);
  };
  const toggleTodo = (index: number) =>
    setTodos((p) =>
      p.map((todo) => {
        if (todo.id === index) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    );
  const deleteTodo = (index: number) => setTodos((p) => p.filter((todo) => todo.id !== index));
  return (
    <CtxTodo.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </CtxTodo.Provider>
  );
}
