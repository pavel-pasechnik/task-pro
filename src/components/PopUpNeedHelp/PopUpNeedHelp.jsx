/* eslint-disable sort-imports */
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
          <div className={css.titleEmailPosition}>
            <Field
              type='email'
              name='email'
              placeholder='Email addres'
              className={css.titleEmail}
            />
          </div>
          <div className={css.CommentPosition}>
            <Field type='text' name='comment' placeholder='Comment' className={css.CommentTitle} />
          </div>
          <Button type='submit' title='Send' />
        </Form>
      </Formik>
    </div>
  );
}
