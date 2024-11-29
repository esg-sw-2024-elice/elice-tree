import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const DivContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading1Title = styled.h1`
  height: 48px;
  color: ${PALETTE.MAIN_BLACK};
  text-align: center;
  font-size: 36px;
  line-height: 48px;
`;

export const ParagraphDescription = styled.p`
  margin-top: 10px;
  height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${PALETTE.SLATE_GREY};
  font-size: 16px;
  line-height: 24px;
`;
