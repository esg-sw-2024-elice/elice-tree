import { Helmet } from 'react-helmet-async';
import Landing from '@/components/landing/Landing';

const TITLE_PAGE = 'Elice Tree | 서비스 소개';

export default function PageLandingPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PAGE}</title>
      </Helmet>
      <Landing />
    </>
  );
}
