import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
// import { PrivateRoute } from '../Routes/PrivateRoute.jsx';
// import { RestrictedRoute } from '../Routes/RestrictedRoute.jsx';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/operations.js';

// import AuthNav from '../AuthNav/AuthNav.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import Layout from '../Layout/Layout.jsx';
import { WelcomePage } from '../../pages/WelcomePage/WelcomePage.jsx';
import { LoginPage } from '../../pages/LoginPage/LoginPage.jsx';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage.jsx';
import { RestrictedRoute } from '../Routes/RestrictedRoute.jsx';
import { PrivateRoute } from '../Routes/PrivateRoute.jsx';

const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));

// const Contacts = lazy(() => import('../../pages/Contacts/Contacts.jsx'));
const ScreensPage = lazy(() => import('../../components/ScreensPage/ScreensPage.jsx'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      {/* <WelcomePage /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}

      <Routes>
        <Route path='/' element={selectIsLoggedIn ? <WelcomePage /> : <LoginPage />} />
        <Route path='/home' element={<WelcomePage />} />

        <Route
          path='/register'
          element={<RestrictedRoute component={<RegisterPage />} redirectTo='/home' />}
        />
        <Route
          path='/login'
          element={<RestrictedRoute component={<LoginPage />} redirectTo='/home' />}
        />
      </Routes>

      {/* <Toaster position='top-center' />
      <Layout>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          {isRefreshing ? (
            <b>Please wait...</b>
          ) : (
            <Routes>
              <Route path='/' element={isLoggedIn ? <WelcomePage /> : <LoginPage />} />
              <Route path='/home' element={<WelcomePage />} />
              <Route
                path='/contacts'
                element={<PrivateRoute component={<Contacts />} redirectTo='/login' />}
              />

              <Route
                path='/register'
                element={<RestrictedRoute component={<RegisterPage />} redirectTo='/home' />}
              />
              <Route
                path='/login'
                element={<RestrictedRoute component={<LoginPage />} redirectTo='/home' />}
              /> */}
      {/* <Route

                path='/home'
                element={
                  isLoggedIn ? (
                    <PrivateRoute component={<HomePage />} redirectTo='/login' />
                  ) : (
                    <AuthNav />
                  )
                }
              /> */}
      {/* <Route path='/home/:boardId' element={<ScreensPage />} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          )}
        </Suspense>
      </Layout> */}
    </>
  );
}
