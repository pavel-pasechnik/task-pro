import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import ThemeSelector from '../ThemeSelector/ThemeSelector.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import styles from './Header.module.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <BurgerMenu toggleSidebar={toggleSidebar} />
        <div className={styles.userInfo}>
          <ThemeSelector />
          <UserInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
