/* eslint-disable sort-imports */

import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import css from './PopUpNewBoard.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import axios from 'axios';

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

export default function PopUpNewBoard({ onClose }) {
  const [board, setBoard] = useState([]);
  const handleCreateNewBoard = async values => {
    const newBoard = {
      id: nanoid(),
      title: values.title,
      icon: values.icon,
      background: values.background,
    };

    try {
      const response = await axios.post('/api/boards/', newBoard);

      setBoard([...board, newBoard]);
      console.log('New board created:', response.data);
      console.log('Updated board list:', board);
    } catch (error) {
      console.error('Error creating new board:', error);
    }

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
                <Field type='radio' name='icon' value={icon.id} />
                <svg width={18} height={18} alt={icon.alt} className={css.icons} />
                <use href={icon.src} />
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
              <label key={bg.id}>
                <Field type='radio' name='background' value={bg.id} />
                <img src={bg.src} srcSet={bg.srcset} alt={bg.alt} className={css.background} />
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
