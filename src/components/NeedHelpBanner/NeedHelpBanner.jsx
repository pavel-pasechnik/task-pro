import { Link } from 'react-router-dom';
import cactus from '../../assets/jpg/cactus.jpg';
import cactus2x from '../../assets/jpg/cactus@2x.jpg';
import cactus3x from '../../assets/jpg/cactus@3x.jpg';
import css from './NeedHelpBanner.module.css';
import sprite from '../../assets/sprite.svg';

const NeedHelpBanner = () => {
  return (
    <div className={css.needHelpContainer}>
      <img
        className={css.needHelpImg}
        src={cactus}
        srcSet={`${cactus2x} 2x, ${cactus3x} 3x`}
        alt='Cactus'
      />
      <p className={css.needHelpText}>
        If you need help with <span className={css.needHelpLink}>TaskPro</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <div>
        <Link to='/help' className={css.needHelpLinkInfo}>
          <svg className={css.iconLogoContainer}>
            <use href={`${sprite}#icon-help-circle`}></use>
          </svg>
          <p>Need help?</p>
        </Link>
      </div>
    </div>
  );
};

export default NeedHelpBanner;
