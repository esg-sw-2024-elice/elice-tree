import styled from 'styled-components';
import { breakpoints } from '@/styles';

export const DivContainer = styled.div`
  margin: 0;
  width: 80%;
  display: flex;
  padding: 20px;
  margin-top: 4rem;
  gap: 5rem;
  flex-direction: column;

  ${breakpoints.xl} {
    flex-direction: row;
    height: 78vh;
  }
`;

export const Heading1Introduce = styled.h1`
  width: 100%;
  margin-bottom: 40px;
  font-size: 3.3rem;
  font-weight: 700;
  color: #333;
`;

export const Content = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
  word-break: keep-all;
  text-align: left;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

export const PicContainer = styled.img`
  background-repeat: no repeat;
  object-fit: cover;
  border-radius: 40px;
  width: 100%;

  ${breakpoints.xl} {
    min-width: 500px;
    max-width: 500px;
  }
`;
