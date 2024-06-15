import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors.js';
// import { PrivateRoute } from '../Routes/PrivateRoute.jsx';
// import { RestrictedRoute } from '../Routes/RestrictedRoute.jsx';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

import HomePage from '../../pages/HomePage/HomePage.jsx';
import Layout from '../Layout/Layout.jsx';
import { Loader } from '../Loader/Loader.jsx';

const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));

const ScreensPage = lazy(() => import('../../components/ScreensPage/ScreensPage.jsx'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
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
              <Route path='/' element={<h1>Welcome</h1>} />
              {/* <Route path='/' element={isLoggedIn ? <HomePage /> : <h1>WelcomePage</h1>} /> */}
              <Route path='/register' element={<h1>Registration</h1>} />
              {/* <Route
                path='/register'
                element={<RestrictedRoute redirectTo='/home' component={<h1>Registration</h1>} />}
              /> */}
              <Route path='/login' element={<h1>Login</h1>} />
              {/* <Route
                path='/login'
                element={<RestrictedRoute redirectTo='/home' component={<h1>Login</h1>} />}
              /> */}
              <Route path='/home' element={<HomePage />}>
                <Route path=':boardId' element={<ScreensPage />} />
              </Route>
              {/* <Route
                path='/home'
                element={<PrivateRoute redirectTo='/' component={<HomePage />} />}>
                <Route path=':boardId' element={<ScreensPage />} />
              </Route> */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          )}
        </Suspense>
      </Layout>
    </>
  );
}
