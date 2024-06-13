import Header from '../../components/Header/Header.jsx';
import ModalContainer from '../../components/ModalContainer/ModalContainer.jsx';
import ScreensPage from '../../components/ScreensPage/ScreensPage.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import styles from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const isRefreshing = useSelector(selectIsRefreshing);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = content => {
    setModalContent(content);
    setIsModalOpen(content !== null);
  };

  if (isRefreshing) {
    return <b>Please wait...</b>;
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContainer}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} openModal={openModal} />
        <div className={styles.headerContainer}>
          <Header toggleSidebar={toggleSidebar} />
          <main className={styles.mainContent}>
            <ScreensPage openModal={openModal} />
          </main>
        </div>
      </div>
      {isModalOpen && (
        <ModalContainer onClose={() => openModal(null)}>{modalContent}</ModalContainer>
      )}
    </div>
  );
};

export default HomePage;
