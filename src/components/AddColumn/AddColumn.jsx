import { Formik, Form, Field, ErrorMessage } from 'formik';
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import sprite from '../../assets/sprite.svg';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/column/operation.js';
import { selectCurrentBoard } from '../../redux/boards/selectors.js';
import { toast } from 'react-hot-toast';
import styles from './AddColumn.module.css';

export default function AddColumn({ closeModal }) {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);

  const schema = Yup.object({
    name: Yup.string().required('Title is required'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      if (!currentBoard || !currentBoard._id) {
        throw new Error('Current board is not selected');
      }

      await dispatch(addColumn({ boardId: currentBoard._id, title: values.name })).unwrap();
      actions.resetForm();
      toast.success('Column added successfully');
      closeModal();
    } catch (error) {
      toast.error('Error adding column');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          <svg className={styles.closeIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
          </svg>
        </button>
        <h2 className={styles.addColumn}>Add Column</h2>
        <Formik initialValues={{ name: '' }} validationSchema={schema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                type='text'
                name='name'
                className={styles.modalInputTitle}
                placeholder='Title'
              />
              <ErrorMessage name='name' component='div' className={styles.errorMessage} />
              <ButtonIcon
                id='icon-add'
                iconWidth='28'
                iconHeight='28'
                btnClassName={styles.addButton}
                type='submit'
                disabled={isSubmitting}>
                Add
              </ButtonIcon>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
