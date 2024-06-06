import Header from '../Header/Header.jsx';
import ScreensPage from '../ScreensPage/ScreensPage.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <ScreensPage />
        {children}
      </div>
    </div>
  );
};

export default Layout;
