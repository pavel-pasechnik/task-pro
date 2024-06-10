import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange, className = '' }) => {
  return (
    <input
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

// Приклад використання
{
  /* <Input
type="text"
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
/>  */
}
