import { useContext } from 'react';
import { CtxTodo } from '@/providers/todo-provider';

export const useTodo = () => useContext(CtxTodo);
