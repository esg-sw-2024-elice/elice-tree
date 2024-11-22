import TodoListButton from './todolistbutton/TodolistButton';

interface TodoInputProps {
  todoContent: string;
  setTodoContent: (Content: string) => void;
  handleAddTodo: () => void;
}

export default function TodoListInput({
  todoContent,
  setTodoContent,
  handleAddTodo,
}: TodoInputProps) {
  return (
    <>
      <p>제목</p>
      <input type="text" value={todoContent} onChange={(e) => setTodoContent(e.target.value)} />
      <TodoListButton onClick={handleAddTodo}>만들기</TodoListButton>
    </>
  );
}
