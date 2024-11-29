import Todos from '@/components/todo/Todos';
import { Helmet } from 'react-helmet-async';

const TITLE_PAGE = 'Elice Tree | Todos';

export default function PageTodos() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PAGE}</title>
      </Helmet>
      <Todos />
    </>
  );
}
