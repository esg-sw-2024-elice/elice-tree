import styled from 'styled-components';
import BaseButton from '@/components/shared/BaseButton';
import { PALETTE } from '@/styles';
import imgBgMonitor from '@/assets/images/bg-monitor.png';

export const DivContainer = styled.div`
  margin: 60px auto;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivContainerSignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 266px;
  padding-top: 41px;
  padding-left: 44px;
  padding-right: 44px;
  background-image: url(${imgBgMonitor});
  background-size: cover;
`;

export const ImageLogoElice = styled.img`
  width: 80px;
  margin-bottom: 24px;
`;

export const DivWrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Heading1Title = styled.h1`
  margin-top: 60px;
  height: 96px;
  color: ${PALETTE.BLACK_PERL};
  text-align: center;
  font-size: 36px;
  line-height: 48px;
`;

export const ParagraphDescription = styled.p`
  margin-top: 10px;
  height: 72px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${PALETTE.SLATE_GREY};
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonSignUp = styled(BaseButton)`
  margin-top: 32px;
  width: 448px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE.MAIN_PURPLE};
  color: ${PALETTE.WHITE};
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;

export const ButtonGoToSignIn = styled(BaseButton)`
  margin-top: 8px;
  width: 448px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE.SLATE_GREY};
  color: ${PALETTE.WHITE};
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;
