import * as Styled from 'components/todolist/todolistbutton/TodolistButton_style';

interface TodoListButtonProps {
  children: string;
  onClick: () => void;
}

export default function TodoListButton({ children, onClick }: TodoListButtonProps) {
  return (
    <>
      <Styled.TodolistButton type="button" content="completed" onClick={onClick}>
        {children}
      </Styled.TodolistButton>
    </>
  );
}
