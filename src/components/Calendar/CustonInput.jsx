import React, { forwardRef } from 'react';
import clsx from 'clsx';
import css from './Calendar.module.css';
import sprite from '../../assets/sprite.svg';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className={clsx(css.customInput)} onClick={onClick} type='button' ref={ref}>
    {value}
    <svg className={clsx(css.icon)}>
      <use href={`${sprite}#icon-arrow-down`}></use>
    </svg>
  </button>
));

CustomInput.displayName = 'CustomInput';

export default CustomInput;
