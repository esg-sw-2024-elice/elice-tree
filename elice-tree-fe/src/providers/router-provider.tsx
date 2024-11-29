import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { SignIn, SignUp, Landing, NotFound, Todos } from '@/pages';
import PageLayout from '@/components/shared/layout/PageLayout';
import { useAuth } from '@/hooks/use-auth';
import { KEYS_ROUTE } from '@/constants';
import { useLayoutEffect } from 'react';

function ProtectedRoutes({ isViolated, to }: { isViolated: boolean; to: string }) {
  if (!isViolated) {
    return <Navigate to={to} />;
  }
  return <Outlet />;
}

export function RouterProvider() {
  const { isAuthenticated, signIn } = useAuth();
  useLayoutEffect(() => {
    const userId = localStorage.getItem('userId');
    const userPassword = localStorage.getItem('userPassword');
    if (userId && userPassword) {
      signIn(userId, userPassword);
    }
  }, [signIn]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={KEYS_ROUTE.BASE} element={<Navigate to={KEYS_ROUTE.LANDING()} />} />
        <Route element={<PageLayout />}>
          <Route path={KEYS_ROUTE.LANDING()} element={<Landing />} />
          <Route
            element={<ProtectedRoutes isViolated={isAuthenticated} to={KEYS_ROUTE.SIGNIN()} />}
          >
            <Route path={KEYS_ROUTE.TODOS()} element={<Todos />} />
          </Route>
        </Route>
        <Route element={<PageLayout withHeader={false} />}>
          <Route
            element={<ProtectedRoutes isViolated={!isAuthenticated} to={KEYS_ROUTE.LANDING()} />}
          >
            <Route path={KEYS_ROUTE.SIGNIN()} element={<SignIn />} />
            <Route path={KEYS_ROUTE.SIGNUP()} element={<SignUp />} />
          </Route>
          <Route path={KEYS_ROUTE.NOT_FOUND()} element={<NotFound />} />
        </Route>
        <Route path={KEYS_ROUTE.WILDCARD} element={<Navigate to={KEYS_ROUTE.NOT_FOUND()} />} />
      </Routes>
    </BrowserRouter>
  );
}
