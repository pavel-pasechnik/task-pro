import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import css from './PopUpNeedHelp.module.css';

const initialValues = {
  title: '',
};

export function PopUpNeedHelp() {
  //   const sendHelp = values => {};
  // Logic for send in Mail Need Help

  return (
    <div className={css.container}>
      <p className={css.titleBoard}>Need Help</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          //   sendHelp(values);
          actions.resetForm();
        }}>
        <Form>
          <Field type='text' name='title' placeholder='Title' />
          <Field type='email' name='email' placeholder='Email' />
          <Field type='text' name='comment' placeholder='Comment' />
          <Button type='submit' title='Send' />
        </Form>
      </Formik>
    </div>
  );
}
