import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1>Page not found!</h1>
      <Link to='/'>Go to home page</Link>
    </div>
  );
}
