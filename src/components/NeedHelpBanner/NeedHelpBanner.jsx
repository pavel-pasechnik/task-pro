import { Link } from 'react-router-dom';
import css from './NeedHelpBanner.module.css';

const NeedHelpBanner = () => {
  return (
    <div className={css.needHelpContainer}>
      <img
        className={css.needHelpImg}
        src='/src/assets/jpg/cactus.jpg'
        srcSet='/src/assets/jpg/cactus@2x.jpg 2x, /src/assets/jpg/cactus@3x.jpg 3x'
        alt='Cactus'
      />
      <p className={css.needHelpText}>
        If you need help with <span className={css.needHelpLink}>TaskPro</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <div>
        <Link to='/help' className={css.needHelpLinkInfo}>
          <svg className={css.iconLogoContainer}>
            <use href='/src/assets/sprite.svg#icon-help-circle'></use>
          </svg>
          <p>Need help?</p>
        </Link>
      </div>
    </div>
  );
};

export default NeedHelpBanner;
