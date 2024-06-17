import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './ButtonIcom.module.css';

const ButtonIcon = ({
  id,
  iconWidth,
  iconHeight,
  btnClassName,
  iconClassName,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button className={clsx(styles.button, btnClassName)} onClick={onClick} {...rest}>
      <svg width={iconWidth} height={iconHeight} className={clsx(styles.icon, iconClassName)}>
        <use xlinkHref={`${sprite}#${id}`} className={styles.iconUse}></use>
      </svg>
      {children && <span className={styles.buttonText}>{children}</span>}
    </button>
  );
};

export default ButtonIcon;
