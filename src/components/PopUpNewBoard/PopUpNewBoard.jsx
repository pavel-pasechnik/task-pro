import { Field, Form, Formik } from 'formik';
import Button from '../Button/Button.jsx';
import css from './PopUpNewBoard.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const initialValues = {
  title: '',
  icon: '',
  background: '',
};

export default function PopUpNewBoard({ onClose }) {
  const [board, setBoard] = useState([]);

  const handleCreateNewBoard = values => {
    const newBoard = {
      id: nanoid(),
      title: values.title,
      icon: values.icon,
      background: values.background,
    };

    setBoard([...board, newBoard]);
    console.log(newBoard);
    onClose();
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
          <Field type='text' name='title' placeholder='Title' />
          <p className={css.titleDown}>Icon</p>
          <p className={css.titleDown}>Background</p>
          <Button type='submit' title='Create' />
        </Form>
      </Formik>
    </div>
  );
}
