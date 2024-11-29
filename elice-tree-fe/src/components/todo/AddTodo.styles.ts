import styled from 'styled-components';
import BaseButton from '@/components/shared/BaseButton';

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InputTodo = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

export const ButtonAddTodo = styled(BaseButton)``;
