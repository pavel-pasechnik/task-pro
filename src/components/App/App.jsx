import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors.js';
import { PrivateRoute } from '../Routes/PrivateRoute.jsx';
import { RestrictedRoute } from '../Routes/RestrictedRoute.jsx';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/operations.js';

import HomePage from '../../pages/HomePage/HomePage.jsx';
import Layout from '../Layout/Layout.jsx';
import { WelcomePage } from '../../pages/WelcomePage/WelcomePage.jsx';
import { LoginPage } from '../../pages/LoginPage/LoginPage.jsx';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage.jsx';
import { Loader } from '../Loader/Loader.jsx';

const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));
const ScreensPage = lazy(() => import('../../components/ScreensPage/ScreensPage.jsx'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position='top-center' />
      <Layout>
        <Suspense fallback={<Loader />}>
          {isRefreshing ? (
            <Loader />
          ) : (
            <Routes>
              <Route
                path='/'
                element={<RestrictedRoute component={<WelcomePage />} redirectTo='/home' />}
              />
              <Route
                path='/register'
                element={<RestrictedRoute component={<RegisterPage />} redirectTo='/login' />}
              />
              <Route
                path='/login'
                element={<RestrictedRoute component={<LoginPage />} redirectTo='/home' />}
              />
              <Route
                path='/home'
                element={<PrivateRoute redirectTo='/' component={<HomePage />} />}>
                <Route path=':boardId' element={<ScreensPage />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          )}
        </Suspense>
      </Layout>
    </>
  );
}
