import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from '../RegisterForm/RegisterForm.module.css';

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
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form className={css.formCont} autoComplete='off'>
        <p className={css.p}>Registration</p>
        <Field name='name' id={nameFieldId} placeholder='Enter your name'></Field>
        <Field name='email' id={emailFieldId} placeholder='Enter your email'></Field>
        <Field
          name='password'
          id={passwordFieldId}
          type='password'
          placeholder='Create a password'></Field>
        <button type='submit'>Register Now</button>
      </Form>
    </Formik>
  );
};
