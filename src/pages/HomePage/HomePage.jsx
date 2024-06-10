// import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
// import AuthNav from '../../components/AuthNav/AuthNav.jsx';
import Header from '../../components/Header/Header.jsx';
import ScreensPage from '../../components/ScreensPage/ScreensPage.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import styles from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isRefreshing) {
    return <b>Please wait...</b>;
  }

  return (
    <div className={styles.homePage}>
      {/* {isLoggedIn ? ( */}
      <div className={styles.homePageContainer}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={styles.headerContainer}>
          <Header toggleSidebar={toggleSidebar} />
          <main className={styles.mainContent}>
            <ScreensPage />
          </main>
        </div>
      </div>
      {/* ) : (
        <AuthNav />
      )} */}
    </div>
  );
};

export default HomePage;
