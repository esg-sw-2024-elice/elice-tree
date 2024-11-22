import React, { useState } from 'react';

import { Todo } from 'types';

import { todo } from './data';

import TodoListInput from 'components/todolist/Todolistinput';
import TodoListItems from 'components/todolist/Todolistitems';

export default function TodoListPage() {
  const [todoList, setTodoList] = useState<Todo[]>(todo);
  const [todoContent, setTodoContent] = useState<string>('');

  // todo create
  function handleAddTodo() {
    const newTodos: Todo = {
      content: todoContent,
      completed: false,
    };
    if (newTodos.content) {
      setTodoList([...todoList, newTodos]);
      setTodoContent('');
    }
  }

  // todo complete check
  const handleCompleteTodo = (index: number) => {
    setTodoList((prevList) => {
      const updateTodoList = [...prevList];
      updateTodoList[index].completed = !updateTodoList[index].completed;
      return updateTodoList;
    });
  };

  return (
    <>
      <main>todolist</main>
      <TodoListItems todos={todoList} CompletedTodo={handleCompleteTodo} />
      <TodoListInput
        todoContent={todoContent}
        setTodoContent={setTodoContent}
        handleAddTodo={handleAddTodo}
      />
    </>
  );
}
