import { selectUser } from '../../redux/auth/selectors.js';
import { useSelector } from 'react-redux';

import css from './UserInfo.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.name}</p>
    </div>
  );
}
