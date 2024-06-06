import { RegisterForm } from '../../components/RegisterForm/RegisterForm.jsx';
import css from '../RegisterPage/RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <div className={css.mainCont}>
      <RegisterForm />
    </div>
  );
};
