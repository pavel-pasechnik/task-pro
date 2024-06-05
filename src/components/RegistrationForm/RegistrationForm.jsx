import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations.js';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useId } from 'react';

import css from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(50, 'Too Long!')
    .required('No password provided.'),
});

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Success registration!');
      })
      .catch(() => {
        toast.error('Error registration!');
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form} autoComplete='off'>
        <label className={css.label} htmlFor={nameId}>
          Username
          <Field className={css.input} type='text' name='name' id={nameId} />
          <ErrorMessage className={css.name} name='name' component='span' />
        </label>
        <label className={css.label} htmlFor={emailId}>
          Email
          <Field className={css.input} type='email' name='email' id={emailId} />
          <ErrorMessage className={css.email} name='email' component='span' />
        </label>
        <label className={css.label} htmlFor={passwordId}>
          Password
          <Field className={css.input} type='password' name='password' id={passwordId} />
          <ErrorMessage className={css.password} name='password' component='span' />
        </label>
        <button className={css.submit} type='submit'>
          Register
        </button>
      </Form>
    </Formik>
  );
}
