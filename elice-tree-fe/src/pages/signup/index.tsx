import { Helmet } from 'react-helmet-async';
import SignUp from '@/components/auth/SignUp';

const TITLE_PAGE = 'Elice Tree | 회원가입';

export default function PageSignUp() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PAGE}</title>
      </Helmet>
      <SignUp />
    </>
  );
}
