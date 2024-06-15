import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AddColumnModal from '../AddColumn/AddColumn.jsx';
// import EditBoard from '../EditBoard/EditBoard.jsx';
// import AddBoard from '../AddBoard/AddBoard.jsx';
// import EditColumnModal from '../EditColumn/EditColumn.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import Layout from '../Layout/Layout.jsx';
import { RestrictedRoute } from '../Routes/RestrictedRoute.jsx';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
// import AddBoard from '../AddBoard/AddBoard.jsx';
import EditBoard from '../EditBoard/EditBoard.jsx';

const Login = lazy(() => import('../../pages/Login/Login.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));
const Registration = lazy(() => import('../../pages/Registration/Registration.jsx'));
const ScreensPage = lazy(() => import('../../components/ScreensPage/ScreensPage.jsx'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Toaster position='top-center' />
      <Layout>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          {isRefreshing ? (
            <b>Please wait...</b>
          ) : (
            <Routes>
              <Route path='/home' element={<HomePage />} />
              <Route
                path='/register'
                element={<RestrictedRoute component={<Registration />} redirectTo='/home' />}
              />
              <Route
                path='/login'
                element={<RestrictedRoute component={<Login />} redirectTo='/home' />}
              />
              <Route path='/home/:boardId' element={<ScreensPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          )}
        </Suspense>
        <button onClick={openModal}>Add Board</button>
        <EditBoard isOpen={isModalOpen} onClose={closeModal} />
      </Layout>
    </>
  );
}
