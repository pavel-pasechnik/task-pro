import LogOut from '../LogOut/LogOut.jsx';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div>Logo</div>
        <div>My boards</div>
        <div>
          <button
            onClick={() => {
              console.log('Almost created new board! Congrats!');
            }}>
            <NavLink to='/home/:boardId' className={styles.active}>
              Create a new board
            </NavLink>
          </button>
        </div>
        <div>Project office</div>
        <div>Need help?</div>
        <LogOut />
      </nav>
      {isOpen && (
        <div
          className={`${styles.overlay} ${styles.visible}`}
          onClick={toggleSidebar}
          role='button'
          tabIndex={0}
          onKeyDown={toggleSidebar}
          aria-label='Close sidebar'></div>
      )}
    </>
  );
};

export default Sidebar;
