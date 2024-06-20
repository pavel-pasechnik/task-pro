import css from './WelcomePage.module.css';
import logo from '../../assets/icons/logo.svg';

import AuthPage from '../AuthPage/AuthPage.jsx';


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

      <AuthPage />
    </div>
  );
};
