import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './ButtonIcom.module.css';

const IconButton = ({
  id,
  iconWidth,
  iconHeight,
  btnClassName,
  iconClassName,
  onClick,
  ...rest
}) => {
  return (
    <button className={clsx(styles.button, btnClassName)} onClick={onClick} {...rest}>
      <svg width={iconWidth} height={iconHeight} className={clsx(styles.icon, iconClassName)}>
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
    </button>
  );
};

export default IconButton;
//  <IconButton
// id="plus"
// iconWidth="24"
// iconHeight="24"
// onClick={handleClick}
// />
