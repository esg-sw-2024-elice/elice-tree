import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const Button = styled.button`
  border: 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: white;
  color: ${PALETTE.MAIN_BLACK};
  padding: 0px 8px;
`;
