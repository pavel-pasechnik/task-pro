import 'react-datepicker/dist/react-datepicker.css';
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './EditColumn.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateColumn } from '../../redux/column/operation.js';
import { setIsColumnEdit, selectIsColumnEdit } from '../../redux/controlers/slice.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

const EditColumn = ({ columnId = 'default-column-id' }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsColumnEdit);

  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(updateColumn({ columnId, title: values.title })).unwrap();
      dispatch(setIsColumnEdit(false));
      actions.resetForm();
      toast.success('Column updated successfully');
    } catch (error) {
      toast.error(`Error editing column`);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const schema = Yup.object({
    title: Yup.string().required('Title is required'),
  });

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button
          className={clsx(styles.closeButton)}
          onClick={() => dispatch(setIsColumnEdit(false))}>
          <svg className={styles.closeIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
          </svg>
        </button>
        <h2 className={styles.addColumn}>Edit column</h2>
        <Formik initialValues={{ title: '' }} validationSchema={schema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                type='text'
                name='title'
                className={clsx(styles.modalInputTitle, styles.textarea)}
                placeholder='Title'
              />
              <ErrorMessage name='title' component='div' className={styles.errorMessage} />
              {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
              <ButtonIcon
                id='icon-add'
                iconWidth='28'
                iconHeight='28'
                btnClassName={styles.addButton}
                type='submit'
                disabled={isSubmitting}>
                Edit
              </ButtonIcon>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditColumn;
