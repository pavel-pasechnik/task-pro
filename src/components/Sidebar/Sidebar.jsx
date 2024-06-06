import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div>Logo</div>
      <div>My boards</div>
      <ul>
        <li>
          <NavLink to='/home/:boardId' className={styles.active}>
            Create a new board
          </NavLink>
        </li>
      </ul>
      <div>Project office</div>
      <div>Need help?</div>

      {/* Додаткові елементи */}
    </nav>
  );
};

export default Sidebar;
