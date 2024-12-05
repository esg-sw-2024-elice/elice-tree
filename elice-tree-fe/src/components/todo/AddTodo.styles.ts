import styled from 'styled-components';
import BaseButton from '@/components/shared/BaseButton';
import { PALETTE } from '@/styles';

export const DivContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const InputTodo = styled.input`
  width: 100%;
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const LabelInputTodo = styled.label`
  width: 100%;
  flex: 1;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const ButtonAddTodo = styled(BaseButton)`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${PALETTE.PIGMENT_GREEN};
  color: ${PALETTE.WHITE};
  border-radius: 4px;
`;
