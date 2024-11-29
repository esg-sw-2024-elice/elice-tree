import styled from 'styled-components';
import { breakpoints } from '@/styles';

export const DivContainer = styled.div`
  margin: 60px auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${breakpoints.xl} {
    flex-direction: row;
    font-size: 16px;
  }
`;

export const DivWrapperImage = styled.div`
  position: relative;
  transform: translateX(10vw);
  max-width: 80vw;
  padding: 0 50px;

  ${breakpoints.xl} {
    max-width: 600px;
  }
`;

export const ImageCarousel = styled.img`
  width: 100%;
  border-radius: 40px;
  height: 360px;

  ${breakpoints.xl} {
    height: unset;
  }
`;

export const ButtonArrow = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

export const DivWrapperContent = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${breakpoints.xl} {
    margin-top: unset;
    transform: translateX(20vw);
  }
`;

export const Heading1Introduce = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 54px;
  font-weight: 700;
  color: #333;
`;

export const ParagraphContent = styled.p`
  margin-left: 16px;
  margin-right: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  text-align: left;
  line-height: 42px;

  ${breakpoints.sm} {
    margin-left: 24px;
    margin-right: 24px;
    font-size: 18px;
  }

  ${breakpoints.md} {
    margin-left: 32px;
    margin-right: 32px;
    font-size: 20px;
  }

  ${breakpoints.xl} {
    margin-left: 0;
    margin-right: 0;
    font-size: 25px;
    max-width: 800px;
  }
`;
