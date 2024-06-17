import { useState } from 'react';
import { useField } from 'formik';
import css from './PasswordInput.module.css';

export const PasswordInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className={css.div}>
        <input
          type={showPassword ? 'text' : 'password'}
          {...field}
          {...props}
          className={css.input}
        />
        <button type='button' onClick={togglePasswordVisibility} className={css.button}>
          <svg width='18' height='18' className={css.logo}>
            <use href='src/assets/icons/eye.svg#eye'></use>
          </svg>
        </button>
      </div>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default PasswordInput;
