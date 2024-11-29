import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const Input = styled.input`
  display: block;
  color: ${PALETTE.BLACK};
  width: 200px;
  height: 32px;
  padding: 4px 8px;
  background-color: ${PALETTE.SOLITUDE};
  outline: none;
  border: none;
  border-radius: 8px;

  &::placeholder {
    color: ${PALETTE.SLATE_GREY};
  }
`;
