import { NavLink } from 'react-router-dom';
import css from './WelcomePage.module.css';

export const WelcomePage = () => {
  return (
    <div className={css.mainCont}>
      <img src='src/assets/icons/icon.png' alt='welcome page icon' className={css.img} />

      <div className={css.logoCont}>
        <svg className={css.logo}>
          <use href='src/assets/icons/logo.svg#logo'></use>
        </svg>
        <h1 className={css.title}>Task Pro</h1>
      </div>

      <p className={css.text}>
        Supercharge your productivity and take control of your tasks with Task Pro - Don&apos;t
        wait, start achieving your goals now!
      </p>

      <div className={css.registerBtn}>
        {
          <NavLink className={css.navLink} to='/register'>
            Registration
          </NavLink>
        }
      </div>
      <button className={css.loginBtn}>Log in</button>
    </div>
  );
};
