import css from './Logo.module.css';
import sprite from '../../assets/sprite.svg';

const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <svg className={css.iconLogoContainer}>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
      <p>Task Pro</p>
    </div>
  );
};

export default Logo;
