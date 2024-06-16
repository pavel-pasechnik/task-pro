import { logout } from '../../redux/auth/operations.js';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button.jsx';
import css from './LogOut.module.css';

export default function LogOut() {
  const dispatch = useDispatch();

  return (
    <div className={css.logOutContainer}>
      <Button className={css.logOutBtn} type='button' onClick={() => dispatch(logout())}>
        <svg className={css.logOutIcon}>
          <use href={`${sprite}#icon-arrow-circle`}></use>
        </svg>
        <p className={css.logOutBtnText}>Log out</p>
      </Button>
    </div>
  );
}
