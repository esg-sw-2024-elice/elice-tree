import * as S from './PageLayout.styles';
import Header from '@/components/shared/Header';
import { Outlet } from 'react-router-dom';

export default function PageLayout({ withHeader = true }) {
  const contentHeader = withHeader ? <Header /> : null;
  return (
    <S.DivContainer>
      {contentHeader}
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.DivContainer>
  );
}
