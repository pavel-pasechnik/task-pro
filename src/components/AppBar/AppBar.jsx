import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors.js';
import AuthNav from '../AuthNav/AuthNav.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import { useSelector } from 'react-redux';

import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
      </div>
    </header>
  );
}
