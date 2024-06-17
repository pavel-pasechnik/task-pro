/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '../Button/Button.jsx';
import { Field, Form, Formik } from 'formik';
import css from './PopUpNewBoard.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import axios from 'axios';
// Imports Image
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
      <button type='button' className={css.btnClose}>
        <svg className={css.xClose} alt='x-close'>
          <use href={`${sprite}#icon-x-close`} />
        </svg>
      </button>
      <p className={css.titleBoard}>New Board</p>

      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = {};

          if (!values.title) {
            errors.title = 'Required';
          }

          if (!values.icon) {
            errors.icon = 'Required';
          }

          if (!values.background) {
            errors.background = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          handleCreateNewBoard(values);
          actions.resetForm();
        }}>
        {({ values, setFieldValue }) => (
          <Form>
            <label htmlFor='title'>Title</label>
            <Field id='title' type='text' name='title' placeholder='Title' className={css.input} />
            <p className={css.iconTitle}>Icons</p>
            <ul className={css.iconslist}>
              <li>
                <label htmlFor='icon-plus'>
                  <Field id='icon-plus' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-circle`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='iconFourCircle'>
                  <Field id='iconFourCircle' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='icon-loading'>
                  <Field id='icon-loading' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-loading`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='icon-puzzle-piece'>
                  <Field id='icon-puzzle-piece' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-puzzle-piece`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='icon-container'>
                  <Field id='icon-container' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-container`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='icon-lightning'>
                  <Field id='icon-lightning' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-lightning`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='icon-colors'>
                  <Field id='icon-colors' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-colors`} />
                  </svg>
                </label>
              </li>
              <li>
                <label htmlFor='icon-hexagon'>
                  <Field id='icon-hexagon' type='radio' name='icon' value='icon-four-circle' />
                  <svg className={css.icons}>
                    <use href={`${sprite}#icon-hexagon`} />
                  </svg>
                </label>
              </li>
            </ul>

            <p className={css.backgroundTitle}>Background</p>
            <ul className={css.backgroundsList}>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
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
                <label htmlFor='background'>
                  <Field
                    type='radio'
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
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='mountain'
                    className={css.checkbox}
                    checked={values.background === 'mountain'}
                    onChange={() => setFieldValue('background', 'mountain')}
                  />
                  <img
                    src={mountain1x}
                    srcSet={mountain2x}
                    className={css.backgroundIcon}
                    alt='mountain'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='treeSakura'
                    className={css.checkbox}
                    checked={values.background === 'treeSakura'}
                    onChange={() => setFieldValue('background', 'treeSakura')}
                  />
                  <img
                    src={treeSakura1x}
                    srcSet={treeSakura2x}
                    className={css.backgroundIcon}
                    alt='treeSakura'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='semiMoon'
                    className={css.checkbox}
                    checked={values.background === 'semiMoon'}
                    onChange={() => setFieldValue('background', 'semiMoon')}
                  />
                  <img
                    src={semiMoon1x}
                    srcSet={semiMoon2x}
                    className={css.backgroundIcon}
                    alt='semiMoon'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='greenMountain'
                    className={css.checkbox}
                    checked={values.background === 'greenMountain'}
                    onChange={() => setFieldValue('background', 'greenMountain')}
                  />
                  <img
                    src={greenMountain1x}
                    srcSet={greenMountain2x}
                    className={css.backgroundIcon}
                    alt='greenMountain'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='blueSky'
                    className={css.checkbox}
                    checked={values.background === 'blueSky'}
                    onChange={() => setFieldValue('background', 'blueSky')}
                  />
                  <img
                    src={blueSky1x}
                    srcSet={blueSky2x}
                    className={css.backgroundIcon}
                    alt='blueSky'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='rocksAndSea'
                    className={css.checkbox}
                    checked={values.background === 'rocksAndSea'}
                    onChange={() => setFieldValue('background', 'rocksAndSea')}
                  />
                  <img
                    src={rocksAndSea1x}
                    srcSet={rocksAndSea2x}
                    className={css.backgroundIcon}
                    alt='rocksAndSea'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='violetSphere'
                    className={css.checkbox}
                    checked={values.background === 'violetSphere'}
                    onChange={() => setFieldValue('background', 'violetSphere')}
                  />
                  <img
                    src={violetSphere1x}
                    srcSet={violetSphere2x}
                    className={css.backgroundIcon}
                    alt='violetSphere'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='moonNight'
                    className={css.checkbox}
                    checked={values.background === 'moonNight'}
                    onChange={() => setFieldValue('background', 'moonNight')}
                  />
                  <img
                    src={moonNight1x}
                    srcSet={moonNight2x}
                    className={css.backgroundIcon}
                    alt='moonNight'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='yachtsInSea'
                    className={css.checkbox}
                    checked={values.background === 'yachtsInSea'}
                    onChange={() => setFieldValue('background', 'yachtsInSea')}
                  />
                  <img
                    src={yachtsInSea1x}
                    srcSet={yachtsInSea2x}
                    className={css.backgroundIcon}
                    alt='yachtsInSea'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='airBallon'
                    className={css.checkbox}
                    checked={values.background === 'airBallon'}
                    onChange={() => setFieldValue('background', 'airBallon')}
                  />
                  <img
                    src={airBallon1x}
                    srcSet={airBallon2x}
                    className={css.backgroundIcon}
                    alt='airBallon'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='gorde'
                    className={css.checkbox}
                    checked={values.background === 'gorde'}
                    onChange={() => setFieldValue('background', 'gorde')}
                  />
                  <img src={gorde1x} srcSet={gorde2x} className={css.backgroundIcon} alt='gorde' />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='seaShip'
                    className={css.checkbox}
                    checked={values.background === 'seaShip'}
                    onChange={() => setFieldValue('background', 'seaShip')}
                  />
                  <img
                    src={seaShip1x}
                    srcSet={seaShip2x}
                    className={css.backgroundIcon}
                    alt='seaShip'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='cappadicia'
                    className={css.checkbox}
                    checked={values.background === 'cappadicia'}
                    onChange={() => setFieldValue('background', 'cappadicia')}
                  />
                  <img
                    src={cappadicia1x}
                    srcSet={cappadicia2x}
                    className={css.backgroundIcon}
                    alt='cappadicia'
                  />
                </label>
              </li>
              <li>
                <label htmlFor='background'>
                  <Field
                    type='radio'
                    name='background'
                    value='trailer'
                    className={css.checkbox}
                    checked={values.background === 'trailer'}
                    onChange={() => setFieldValue('background', 'trailer')}
                  />
                  <img
                    src={trailer1x}
                    srcSet={trailer2x}
                    className={css.backgroundIcon}
                    alt='trailer'
                  />
                </label>
              </li>
            </ul>
            <Button type='submit' title='Create' className={css.createButton} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
