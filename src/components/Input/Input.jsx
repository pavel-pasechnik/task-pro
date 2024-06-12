import clsx from 'clsx';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, value, onChange, className, ...rest }) => {
  return (
    <input
      type={type}
      className={clsx(styles.input, className && className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
