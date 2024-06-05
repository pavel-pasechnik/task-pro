import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { login } from '../../redux/auth/operations.js';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useId } from 'react';

import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(50, 'Too Long!')
    .required('No password provided.'),
});

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success('Success login!');
      })
      .catch(() => {
        toast.error('Error login!');
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={emailId}>
          Login
          <Field className={css.input} type='text' name='email' id={emailId} />
          <ErrorMessage className={css.email} name='email' component='span' />
        </label>
        <label className={css.label} htmlFor={passwordId}>
          Password
          <Field className={css.input} type='password' name='password' id={passwordId} />
          <ErrorMessage className={css.password} name='password' component='span' />
        </label>

        <button className={css.submit} type='submit'>
          Login
        </button>
        <span className={css.register}>
          or <Link to='/register'>register</Link>
        </span>
      </Form>
    </Formik>
  );
}
