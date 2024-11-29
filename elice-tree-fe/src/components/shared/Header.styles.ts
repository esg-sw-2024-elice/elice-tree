import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints, PALETTE } from '@/styles';
import BaseButton from './BaseButton';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 1px solid ${PALETTE.GAINSBORO};
  background-color: ${PALETTE.WHITE};

  ${breakpoints.sm} {
    padding: 0px 24px;
  }

  ${breakpoints.lg} {
    padding: 0px 52px 0px 24px;
  }
`;

export const ImageLogo = styled.img`
  cursor: pointer;
  width: 96px;

  ${breakpoints.sm} {
    width: 112px;
  }

  ${breakpoints.md} {
    width: 133px;
  }

  ${breakpoints.lg} {
    margin-left: 44px;
  }
`;

export const NavigationMenus = styled.nav`
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;

  ${breakpoints.sm} {
    margin-left: 36px;
    column-gap: 20px;
  }

  ${breakpoints.md} {
    margin-left: 52px;
    column-gap: 36px;
  }

  ${breakpoints.lg} {
    margin-left: 100px;
    column-gap: 84px;
  }
`;

export const LinkNavItem = styled(Link)`
  color: ${PALETTE.BLACK_PERL};
  font-weight: 700;
  font-size: 14px;

  padding: 16px 16px;
  box-sizing: border-box;

  border-radius: 12px;

  &:hover {
    background-color: ${PALETTE.SLATE_GREY_200};
  }

  ${breakpoints.sm} {
    font-size: 16px;
  }
`;

export const LinkGoToExternal = styled.a`
  color: ${PALETTE.BLACK_PERL};
  font-weight: 700;
  font-size: 14px;
  padding: 16px 16px;
  border-radius: 12px;
  box-sizing: border-box;

  &:hover {
    background-color: ${PALETTE.SLATE_GREY_200};
  }

  ${breakpoints.sm} {
    font-size: 16px;
  }
`;

export const ButtonAuth = styled(BaseButton)`
  width: 109px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  margin-right: 0px;
  background-color: ${PALETTE.MAIN_PURPLE};
  color: ${PALETTE.WHITE};
  border: none;
  border-radius: 10px;
  font-size: 14px;

  ${breakpoints.sm} {
    font-size: 16px;
  }

  ${breakpoints.lg} {
    height: 48px;
  }
`;
