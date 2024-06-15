/* eslint-disable sort-imports */

import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import css from './PopUpNewBoard.module.css';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

const initialValues = {
  title: '',
  icon: '',
  background: '',
};

const icons = [{ id: 'icon1', src: `${sprite}#icon-four-circles`, alt: 'icon-four-circles' }];

const backgrounds = [
  { id: 'bg1', src: '../../assets/smallbg/airBalloon.jpg', alt: 'airBalloon.jpg' },
];

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

    console.log('New board created:', newBoard);
    console.log('Updated board list:', board);
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
          <label htmlFor='title' className={css.label}>
            Title
          </label>
          <Field id='title' type='text' name='title' placeholder='Title' className={css.input} />

          <p className={css.iconTitle}>Icons</p>
          <ul className={css.iconslist}>
            {icons.map(icon => (
              <li key={icon.id}>
                <Field id={`icon-${icon.id}`} type='radio' name='icon' value={icon.id} />
                <label htmlFor={`icon-${icon.id}`}>
                  <svg src={icon.src} width={18} height={18} alt={icon.alt} className={css.icons} />
                </label>
              </li>
            ))}
          </ul>
          <p className={css.backgroundTitle}>Background</p>
          <div className={css.backgroundsList}>
            {backgrounds.map(bg => (
              <label key={bg.id} htmlFor={`background-${bg.id}`}>
                <Field id={`background-${bg.id}`} type='radio' name='background' value={bg.id} />
                <img src={bg.src} alt={bg.alt} className={css.background} />
              </label>
            ))}
          </div>
          <Button type='submit' title='Create' className={css.createButton} />
        </Form>
      </Formik>
    </div>
  );
}
