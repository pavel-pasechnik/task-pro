/* eslint-disable sort-imports */
import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import css from './PopUpEditBoard.module.css';
import sprite from '../../assets/sprite.svg';

const initialValues = {
  title: '',
  icon: '',
  background: '',
};
const icons = [
  { id: 'icon1', src: `${sprite}#icon-four-circles`, alt: 'icon-four-circles' },
  { id: 'icon2', src: `${sprite}#icon-star`, alt: 'icon-star' },
  { id: 'icon3', src: `${sprite}#icon-loading`, alt: 'icon-loading' },
  { id: 'icon4', src: `${sprite}#icon-puzzle-piece`, alt: 'icon-puzzle-piece' },
  { id: 'icon5', src: `${sprite}#icon-container`, alt: 'icon-container' },
  { id: 'icon6', src: `${sprite}#icon-lightning`, alt: 'icon-lightning' },
  { id: 'icon7', src: `${sprite}#icon-colors`, alt: 'icon-colors' },
  { id: 'icon8', src: `${sprite}#icon-hexagon`, alt: 'icon-four-circles' },
];
const icons = [{ id: 'icon1', src: `${sprite}#icon-four-circles`, alt: 'icon-four-circles' }];
const backgrounds = [
  {
    id: 'bg1',
    src: '../../assets/bigbg/mobile/airBalloon-mobile-1x.jpg',
    srcset: `
      ../../assets/smallbg/airBalloon-mobile-2x.jpg
    `,
    alt: 'airBalloon.jpg',
  },
];

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
      <p className={css.titleBoard}>Edit Board</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleEditNewBoard(values);
          actions.resetForm();
        }}>
        <Form>
          <label htmlFor='title' className={css.label}>
            Title
          </label>
          <Field
            id='title'
            type='text'
            name='title'
            placeholder='Project office'
            className={css.input}
          />

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
          <Button type='submit' title='Edit' className={css.createButton} />
        </Form>
      </Formik>
    </div>
  );
}
