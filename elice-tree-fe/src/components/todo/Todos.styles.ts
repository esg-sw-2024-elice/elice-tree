import styled from 'styled-components';
import { breakpoints, PALETTE } from '@/styles';
import { ReactComponent as _IconList } from '@/assets/icons/icon-mono-list.svg';

export const DivContainer = styled.div`
  margin: 52px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.sm} {
    margin-left: 15%;
    margin-right: 15%;
  }

  ${breakpoints.md} {
    margin-left: 20%;
    margin-right: 20%;
  }

  ${breakpoints.lg} {
    margin-left: 25%;
    margin-right: 25%;
  }

  ${breakpoints.xl} {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

export const DivWrapperList = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  padding: 36px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background-color: ${PALETTE.WHITE};
  box-shadow: 5px 5px 5px 10px rgba(0, 0, 0, 0.05);
`;

export const IconList = styled(_IconList)`
  width: 45px;
  height: 47px;
`;

export const ParagraphTitle = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${PALETTE.PIGMENT_GREEN};
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 16px;
  flex-grow: 1;
  margin-top: 10px;
`;

export const DivNoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const UnorderedListContainer = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${PALETTE.SOLITUDE};
  background-color: ${PALETTE.ALICE_BLUE};
`;

export const DivTotal = styled.div`
  bottom: 10%;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE.MAIN_PURPLE};
  color: ${PALETTE.WHITE};
  border-radius: 4px;
  font-size: 20px;
`;

export const Heading1Summary = styled.h1`
  margin-top: 52px;
  color: ${PALETTE.BLACK};
  font-size: 36px;
  text-align: center;
`;
