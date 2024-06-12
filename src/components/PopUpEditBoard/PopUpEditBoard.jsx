import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import css from './PopUpEditBoard.module.css';

const initialValues = {
  title: '',
  icon: '',
  background: '',
};

export function PopUpEditBoard() {
  const [board, editBoard] = useState([]);

  useEffect(() => {
    console.log('Board updated:', board);
  }, [board]);

  const handleEditNewBoard = values => {
    const newBoard = {
      id: nanoid(),
      title: values.title,
      icon: values.icon,
      background: values.background,
    };

    editBoard(prevBoard => [...prevBoard, newBoard]);
    console.log(editBoard);
  };

  return (
    <div className={css.container}>
      <p className={css.titleBoard}>New Board</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleEditNewBoard(values);
          actions.resetForm();
        }}>
        <Form>
          <Field type='text' name='title' placeholder='Title' />
          <p className={css.titleDown}>Icon</p>
          <p className={css.titleDown}>Background</p>
          <Button type='submit' title='Edit' />
        </Form>
      </Formik>
    </div>
  );
}
