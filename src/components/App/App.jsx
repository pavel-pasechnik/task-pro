import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from '../Routes/PrivateRoute.jsx';
import { RestrictedRoute } from '../Routes/RestrictedRoute.jsx';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

import Home from '../../pages/Home/Home.jsx';
import Layout from '../Layout/Layout.jsx';

const Login = lazy(() => import('../../pages/Login/Login.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));
const Registration = lazy(() => import('../../pages/Registration/Registration.jsx'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts.jsx'));

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
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          {isRefreshing ? (
            <b>Please wait...</b>
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/contacts'
                element={<PrivateRoute component={<Contacts />} redirectTo='/login' />}
              />
              <Route
                path='/register'
                element={<RestrictedRoute component={<Registration />} redirectTo='/contacts' />}
              />
              <Route
                path='/login'
                element={<RestrictedRoute component={<Login />} redirectTo='/contacts' />}
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          )}
        </Suspense>
      </Layout>
    </>
  );
}
