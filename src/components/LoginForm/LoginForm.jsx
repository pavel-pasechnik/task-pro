import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from '../LoginForm/LoginForm.module.css';
import { NavLink } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput/PasswordInput.jsx';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().trim().email().required('Required'),
  password: Yup.string().trim().min(8, 'Too short!').max(64, 'Too long!').required('Required'),
});

export const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={css.mainCont}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form className={css.formCont} autoComplete='off'>
          <div className={css.nav}>
            {
              <NavLink to='/auth/register' className={css.link}>
                Registration
              </NavLink>
            }
            <p className={css.p}>Log In</p>
          </div>
          <Field
            name='email'
            id={emailFieldId}
            placeholder='Enter your email'
            className={css.input}></Field>

          <PasswordInput name='password' id={passwordFieldId} placeholder='Create a password' />
          <button type='submit' className={css.button}>
            Log In Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};
