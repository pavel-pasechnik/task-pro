import './Button.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// example handleIncrement певна функція
{
  /* <Button onClick={handleIncrement} className="increment-button"> */
}
