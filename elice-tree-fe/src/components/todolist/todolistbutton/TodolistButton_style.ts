import styled from 'styled-components';
import { BaseButton } from 'components';
import { PALETTE } from 'styles';

export const TodolistButton = styled(BaseButton)<{ content: string }>`
  background-color: ${(props) =>
    props.content === 'completed' ? PALETTE.MAIN_PURPLE : PALETTE.LIGHT_GREEN};
  color: white;
  cursor: pointer;
`;
