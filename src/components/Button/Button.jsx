import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({ type = 'button', title, className, border, onClick, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, className, { [styles.border]: border })}
      {...rest}>
      {title && <span className={styles.title}>{title}</span>}
    </button>
  );
};

export default Button;

{
  /* <Button 
        onClick={handleClick} 
        title="Send" 
      /> */
}
