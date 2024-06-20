import { NavLink } from 'react-router-dom';
import css from './WelcomePage.module.css';
import logo from '../../assets/icons/logo.svg';

export const WelcomePage = () => {
  return (
    <div className={css.mainCont}>
      <div className={css.welcomeImg}></div>

      <div className={css.logoCont}>
        <svg className={css.logo}>
          <use href={`${logo}#logo`}></use>
        </svg>
        <h1 className={css.title}>Task Pro</h1>
      </div>

      <p className={css.text}>
        Supercharge your productivity and take control of your tasks with Task Pro - Don&apos;t
        wait, start achieving your goals now!
      </p>

      <NavLink className={css.registerBtn} to='/register'>
        Registration
      </NavLink>

      <button className={css.loginBtn}>
        <NavLink className={css.navLink} to='/login'>
          Log in
        </NavLink>
      </button>
    </div>
  );
};
