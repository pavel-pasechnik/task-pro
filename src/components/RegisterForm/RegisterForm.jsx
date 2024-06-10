import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from '../RegisterForm/RegisterForm.module.css';
import { NavLink } from 'react-router-dom';
import PasswordInput from '../PasswordInput/PasswordInput.jsx';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
  password: Yup.string().trim().min(4, 'Too short!').required('Required'),
  email: Yup.string().trim().email().required('Required'),
});

export const RegisterForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <div className={css.mainCont}>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form className={css.formCont} autoComplete='off'>
          <div className={css.nav}>
            <p className={css.p}>Registration</p>
            {
              <NavLink to='/login' className={css.link}>
                Log in
              </NavLink>
            }
          </div>
          <Field
            name='name'
            id={nameFieldId}
            placeholder='Enter your name'
            className={css.input}></Field>
          <Field
            name='email'
            id={emailFieldId}
            placeholder='Enter your email'
            className={css.input}></Field>
          <PasswordInput name='password' id={passwordFieldId} placeholder='Create a password' />
          <button type='submit' className={css.button}>
            Register Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};
