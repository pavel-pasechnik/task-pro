/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable sort-imports */
import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './PopUpNewBoard.module.css';
import sprite from '../../assets/sprite.svg';

const initialValues = {
  title: '',
  icon: '',
  background: '',
};

const icons = [
  { id: 'icon1', src: `${sprite}#icon-four-circles`, alt: 'icon-four-circles' },
  // { id: 'icon2', src: '/path/to/icon2.svg', alt: 'Icon 2' },
  // { id: 'icon1', src: '/path/to/icon1.svg', alt: 'Icon 1' },
  // { id: 'icon2', src: '/path/to/icon2.svg', alt: 'Icon 2' },
  // { id: 'icon1', src: '/path/to/icon1.svg', alt: 'Icon 1' },
  // { id: 'icon2', src: '/path/to/icon2.svg', alt: 'Icon 2' },
  // { id: 'icon1', src: '/path/to/icon1.svg', alt: 'Icon 1' },
  // { id: 'icon2', src: '/path/to/icon2.svg', alt: 'Icon 2' },
];
const backgrounds = [
  { id: 'bg1', src: '../../assets/smallbg/airBalloon.jpg', alt: 'airBalloon.jpg' },
];

export function PopUpNewBoard() {
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
          <Field type='text' name='title' placeholder='Title' className={css.input} />

          <p className={css.iconTitle}>Icons</p>
          <ul className={css.iconslist}>
            {icons.map(icon => (
              <li key={icon.id}>
                <Field type='radio' name='icon' value={icon.id} />
                <svg src={icon.src} width={18} height={18} alt={icon.alt} className={css.icons} />
              </li>
            ))}
          </ul>
          <p className={css.backgroundTitle}>Background</p>
          <div className={css.backgroundsList}>
            {backgrounds.map(bg => (
              <label key={bg.id}>
                <Field type='radio' name='background' value={bg.id} />
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
