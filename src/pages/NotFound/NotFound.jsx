/* eslint-disable n/no-missing-import */
// import { Link } from 'react-router-dom';
// import css from './NotFound.module.css';

import { PopUpNeedHelp } from '../../components/PopUpNeedHelp/PopUpNeedHelp';

export default function NotFound() {
  return (
    // <div className={css.container}>
    //   <h1>Page not found!</h1>
    //   <Link to='/'>Go to home page</Link>
    // </div>
    <PopUpNeedHelp />
  );
}
