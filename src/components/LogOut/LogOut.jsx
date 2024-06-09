import { logout } from '../../redux/auth/operations.js';
import { useDispatch } from 'react-redux';

import css from './LogOut.module.css';

export default function LogOut() {
  const dispatch = useDispatch();

  return (
    <button className={css.btn} type='button' onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
}
