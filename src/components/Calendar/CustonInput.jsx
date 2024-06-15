import clsx from 'clsx';
import css from './Calendar.module.css';
import sprite from '../../assets/sprite.svg';

function CustomInput({ value, onClick }) {
  return (
    <button className={clsx(css.customInput)} onClick={onClick} type='button'>
      {value}
      <svg className={clsx(css.icon)}>
        <use href={`${sprite}#icon-arrow-down`}></use>
      </svg>
    </button>
  );
}

export default CustomInput;
