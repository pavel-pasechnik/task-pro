import { NavLink } from 'react-router-dom';

import css from '../AuthPage/AuthPage.module.css';

export default function AuthPage() {
  return (
    <div>
      <div className={css.div}>
        <NavLink className={css.registerBtn} to='/auth/register'>
          Registration
        </NavLink>

        <NavLink className={css.loginBtn} to='/auth/login'>
          Log in
        </NavLink>
      </div>
    </div>
  );
}
