import AppBar from '../AppBar/AppBar.jsx';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <AppBar />
    </header>
  );
};

export default Header;
