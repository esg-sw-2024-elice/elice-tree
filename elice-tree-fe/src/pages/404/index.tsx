import { Helmet } from 'react-helmet-async';
import NotFound from '@/components/404/NotFound';

const TITLE_PAGE = 'Elice Tree | 404 Not Found';

export default function Page404() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PAGE}</title>
      </Helmet>
      <NotFound />
    </>
  );
}
