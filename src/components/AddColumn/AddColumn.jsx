import clsx from 'clsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import sprite from '../../assets/sprite.svg';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddColumnOpen, selectIsAddColumnOpen } from '../../redux/controlers/slice.js';
import { selectIsColumnEdit } from '../../redux/controlers/selectors.js';
import { addColumn, updateColumn } from '../../redux/column/operation.js';
import { resetCurrentColumn, selectCurrentColumn } from '../../redux/column/slice.js';
import { selectCurrentBoard } from '../../redux/boards/selectors.js';
import styles from './AddColumn.module.css';

export default function AddColumnPopUp() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsAddColumnOpen);
  const isEdit = useSelector(selectIsColumnEdit);
  const currentColumn = useSelector(selectCurrentColumn);
  const currentBoard = useSelector(selectCurrentBoard);

  if (!isOpen) return null;

  const schema = Yup.object({
    name: Yup.string()
      .required("Заголовок обов'язковий")
      .max(30, 'Заголовок повинен містити менше 30 символів'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      if (!isEdit) {
        await dispatch(addColumn({ boardId: currentBoard.id, title: values.name })).unwrap();
      } else {
        await dispatch(updateColumn({ columnId: currentColumn.id, title: values.name })).unwrap();
        dispatch(resetCurrentColumn());
      }

      dispatch(setIsAddColumnOpen(false));
      actions.resetForm();
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleClose = () => {
    dispatch(setIsAddColumnOpen(false));
    dispatch(resetCurrentColumn());
  };

  return (
    <div className={clsx(styles.modal)}>
      <div className={styles.modalContent}>
        <button className={clsx(styles.closeButton)} onClick={handleClose}>
          <svg className={styles.closeIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
          </svg>
        </button>
        <h2 className={styles.addColumn}>{isEdit ? 'Edit column' : 'Add column'}</h2>
        <Formik
          initialValues={{ name: isEdit ? currentColumn.name : '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                type='text'
                name='name'
                className={clsx(styles.modalInputTitle, styles.textarea)}
                placeholder='Title'
              />
              <ErrorMessage name='name' component='div' className={styles.errorMessage} />
              <ButtonIcon
                id='icon-add'
                iconWidth='28'
                iconHeight='28'
                text={isEdit ? 'Edit' : 'Add'}
                isIcon={true}
                verticalPadding='10px'
                type='submit'
                className={styles.addButton}
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
