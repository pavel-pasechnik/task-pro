import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './PopUpSidebar.module.css';

const initialValues = {
  title: '',
  icon: '',
  background: '',
};

export default function PopUpSidebar() {
  const { board, setBoard } = useState([]);
  const handleCreateNewBoard = values => {
    const newBoard = {
      id: nanoid(),
      title: values.title,
      icon: values.icon,
      background: values.background,
    };
    setBoard([...board, newBoard]);
    console.log(newBoard);
  };

  return (
    <div className={css.container}>
      <p className={css.titleBoard}>New Board</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleCreateNewBoard(values);
          actions.resetForm();
        }}>
        <Form>
          <Field type='text' name='title' placeholder='Title' className={css.field} />
          <p className={css.titleDown}>Icons</p>
          <p className={css.titleDown}>Background</p>
          <Button type='submit' title='Create' />
        </Form>
      </Formik>
    </div>
  );
}
