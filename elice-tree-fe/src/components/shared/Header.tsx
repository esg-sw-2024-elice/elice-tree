import * as S from './Header.styles';
import {
  KEYS_ROUTE,
  menusNavigation,
  TEXT_HEADER_BUTTON_SIGNIN,
  TEXT_HEADER_BUTTON_SIGNOUT,
} from '@/constants';
import imgLogo from '@/assets/images/logo-elice.png';
import { useAuth } from '@/hooks/use-auth';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, signOut } = useAuth();
  const handleClickBtnSignIn = () => {
    navigate(KEYS_ROUTE.SIGNIN());
  };
  const handleClickBtnSignOut = signOut;
  const handleClickBtnGoToExternal = (to: string) => window.open(to);
  const contentMenus = menusNavigation.map((menu, idx) => {
    if (menu.protected && !isAuthenticated) {
      return null;
    }
    if (['http', 'https'].some((p) => menu.to.startsWith(p))) {
      return (
        <S.LinkGoToExternal
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClickBtnGoToExternal(menu.to)}
        >
          {menu.text}
        </S.LinkGoToExternal>
      );
    }
    return (
      <S.LinkNavItem key={idx} to={menu.to}>
        {menu.text}
      </S.LinkNavItem>
    );
  });
  return (
    <S.HeaderContainer>
      <S.ImageLogo src={imgLogo} />
      <S.NavigationMenus>{contentMenus}</S.NavigationMenus>
      {isAuthenticated ? (
        <S.ButtonAuth onClick={handleClickBtnSignOut}>{TEXT_HEADER_BUTTON_SIGNOUT}</S.ButtonAuth>
      ) : (
        <S.ButtonAuth onClick={handleClickBtnSignIn}>{TEXT_HEADER_BUTTON_SIGNIN}</S.ButtonAuth>
      )}
    </S.HeaderContainer>
  );
}
