import { logout } from '../../redux/auth/operations.js';
import { useDispatch } from 'react-redux';

import Button from '../../helpers/Button/Button.jsx';
import css from './LogOut.module.css';

export default function LogOut() {
  const dispatch = useDispatch();

  return (
    <div className={css.LogOutContainer}>
      <Button className={css.logOutBtn} type='button' onClick={() => dispatch(logout())}>
        <svg className={css.logOutIcon}>
          <use href='/src/assets/sprite.svg#icon-arrow-circle'></use>
        </svg>
        <p className={css.logOutBtnText}>Log out</p>
      </Button>
    </div>
  );
}
