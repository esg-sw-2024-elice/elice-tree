import { Helmet } from 'react-helmet-async';
import SignIn from '@/components/auth/SignIn';

const TITLE_PAGE = 'Elice Tree | 로그인';

export default function PageSignIn() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PAGE}</title>
      </Helmet>
      <SignIn />
    </>
  );
}
