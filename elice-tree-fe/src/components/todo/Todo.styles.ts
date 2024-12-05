import styled from 'styled-components';
import { PALETTE } from '@/styles';
import BaseButton from '@/components/shared/BaseButton';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-bottom: 1px solid ${PALETTE.GAINSBORO};
`;

export const DivReduction = styled.div<{ isCompleted: boolean }>`
  font-size: 12px;
  color: ${({ isCompleted }) => (isCompleted ? PALETTE.MAIN_GREEN : PALETTE.BLACK)};
`;

export const ListTodo = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 8px;
`;

export const ButtonToggle = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid ${PALETTE.BLACK};
`;

export const SpanToggle = styled.span`
  position: relative;
  right: 1px;
  bottom: 1px;
`;

export const ParagraphTodoContent = styled.p<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? `2px line-through ${PALETTE.MAIN_RED}` : 'none'};
  color: ${({ isCompleted }) => (isCompleted ? PALETTE.LIGHT_BLACK : PALETTE.BLACK)};
`;

export const ButtonDelete = styled(BaseButton)`
  margin: 0 0 0 auto;
  background-color: ${PALETTE.LIGHT_RED};
`;
