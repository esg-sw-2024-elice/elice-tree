import styled from 'styled-components';
import imgBgMainGradient from '@/assets/images/bg-main-gradient.png';
import { breakpoints } from '@/styles';

export const DivContainer = styled.div<{ withHeader?: boolean }>`
  flex: 1;
  padding-top: ${({ withHeader }) => (withHeader ? '80px' : '')};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-image: url(${imgBgMainGradient});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left -10vw bottom 20vw;

  ${breakpoints.sm} {
    background-position: left 5vw bottom 15vw;
  }

  ${breakpoints.md} {
    background-position: left 10vw bottom 10vw;
  }

  ${breakpoints.xl} {
    background-position: left 15vw bottom -20vw;
  }
`;

export const MainContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`;
