/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import css from './PopUpEditBoard.module.css';
import sprite from '../../assets/sprite.svg';
import block from '../../assets/jpg/blockWhite.jpg';
import trailer1x from '../../assets/bigbg/desktop/trailer-desktop-1x.jpg';
import trailer2x from '../../assets/bigbg/desktop/trailer-desktop-2x.jpg';
import cappadicia1x from '../../assets/bigbg/desktop/cappadocia-desktop-1x.jpg';
import cappadicia2x from '../../assets/bigbg/desktop/cappadocia-desktop-2x.jpg';
import seaShip1x from '../../assets/bigbg/desktop/sea-desktop-1x.jpg';
import seaShip2x from '../../assets/bigbg/desktop/sea-desktop-2x.jpg';
import gorde1x from '../../assets/bigbg/desktop/gorge-desktop-1x.jpg';
import gorde2x from '../../assets/bigbg/desktop/gorge-desktop-2x.jpg';
import yachtsInSea1x from '../../assets/bigbg/desktop/yacht-desktop-1x.jpg';
import yachtsInSea2x from '../../assets/bigbg/desktop/yacht-desktop-2x.jpg';
import moonNight1x from '../../assets/bigbg/desktop/moon-desktop-1x.jpg';
import moonNight2x from '../../assets/bigbg/desktop/moon-desktop-2x.jpg';
import violetSphere1x from '../../assets/bigbg/desktop/violetSphere-desktop-1x.jpg';
import violetSphere2x from '../../assets/bigbg/desktop/violetSphere-desktop-2x.jpg';
import rocksAndSea1x from '../../assets/bigbg/desktop/rocksAndSea-desktop-1x.jpg';
import rocksAndSea2x from '../../assets/bigbg/desktop/rocksAndSea-desktop-2x.jpg';
import blueSky1x from '../../assets/bigbg/desktop/blue-desktop-1x.jpg';
import blueSky2x from '../../assets/bigbg/desktop/blue-desktop-2x.jpg';
import greenMountain1x from '../../assets/bigbg/desktop/greens-desktop-1x.jpg';
import greenMountain2x from '../../assets/bigbg/desktop/greens-desktop-2x.jpg';
import semiMoon1x from '../../assets/bigbg/desktop/semiMoon-desktop-1x.jpg';
import semiMoon2x from '../../assets/bigbg/desktop/semiMoon-desktop-2x.jpg';
import treeSakura1x from '../../assets/bigbg/desktop/tree-desktop-1x.jpg';
import treeSakura2x from '../../assets/bigbg/desktop/tree-desktop-2x.jpg';
import airBallon1x from '../../assets/bigbg/desktop/airBalloon-desktop-1x.jpg';
import airBallon2x from '../../assets/bigbg/desktop/airBalloon-desktop-2x.jpg';
import flower1x from '../../assets/bigbg/desktop/flowers-desktop-1x.jpg';
import flower2x from '../../assets/bigbg/desktop/flowers-desktop-2x.jpg';
import mountain1x from '../../assets/bigbg/desktop/mountains-desktop-1x.jpg';
import mountain2x from '../../assets/bigbg/desktop/mountains-desktop-2x.jpg';

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
      <p className={css.titleBoard}>Edit Board</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleEditNewBoard(values, actions);
        }}>
        {({ values, setFieldValue }) => (
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
              <li>
                <label htmlFor='icon-plus'>
                  <Field
                    id='icon-plus'
                    type='radio'
                    name='icon'
                    value='icon-four-circle'
                    onChange={() => setFieldValue('icon', 'icon-four-circle')}
                  />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-circle`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='iconFourCircle'>
                  <Field
                    id='iconFourCircle'
                    type='radio'
                    name='icon'
                    value='icon-four-circle'
                    onChange={() => setFieldValue('icon', 'icon-four-circle')}
                  />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                </label>
              </li>
            </ul>

            <p className={css.backgroundTitle}>Background</p>
            <ul className={css.backgroundsList}>
              <li>
                <label htmlFor='backgroundBlock'>
                  <Field
                    type='radio'
                    id='backgroundBlock'
                    name='background'
                    value='block'
                    className={css.checkbox}
                    checked={values.background === 'block'}
                    onChange={() => setFieldValue('background', 'block')}
                  />
                  <img src={block} className={css.backgroundIcon} alt='block' />
                </label>
              </li>
              <li>
                <label htmlFor='backgroundFlower'>
                  <Field
                    type='radio'
                    id='backgroundFlower'
                    name='background'
                    value='flower'
                    className={css.checkbox}
                    checked={values.background === 'flower'}
                    onChange={() => setFieldValue('background', 'flower')}
                  />
                  <img
                    src={flower1x}
                    srcSet={flower2x}
                    className={css.backgroundIcon}
                    alt='flower'
                  />
                </label>
              </li>
              {/* Include other backgrounds similarly */}
            </ul>
            <Button type='submit' title='Edit' className={css.createButton} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
