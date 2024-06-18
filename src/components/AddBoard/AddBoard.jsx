import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useId, useState } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './AddBoard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/cards/operations.js';
import { selectCurrentBoard } from '../../redux/boards/slice.js';

const AddBoard = ({ isOpen, onClose }) => {
  const [priority, setPriority] = useState('low');
  const [deadline, setDeadline] = useState(new Date());

  const dispatch = useDispatch();
  const titleId = useId();
  const descriptionId = useId();
  const currentBoard = useSelector(selectCurrentBoard);

  const columnId = currentBoard?.id || 'defaultColumnId';

  if (!isOpen) return null;

  const handleDateChange = date => {
    setDeadline(date);
  };

  const getPriorityClassName = priorityValue => {
    return `${styles.radioButton} ${styles[priorityValue]} ${
      priority === priorityValue ? styles.active : ''
    }`;
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    deadline: Yup.string().required('Deadline is required'),
    priority: Yup.string().required('Priority is required'),
  });

  const onSubmit = async (values, actions) => {
    try {
      const unixDeadline = Math.floor(deadline.getTime() / 1000);
      const cardData = {
        columnId,
        title: values.title,
        description: values.description,
        priority,
        deadline: unixDeadline,
      };

      console.log('Submitting card data:', cardData);
      await dispatch(addCard(cardData)).unwrap();
      onClose();
      toast.success('Card added successfully!');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      toast.error(`Error adding card: ${error.response?.data || error.message}`);
    } finally {
      actions.setSubmitting(false);
      actions.resetForm();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg className={styles.closeIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
          </svg>
        </button>
        <h2 className={styles.addTitle}>Add card</h2>
        <Formik
          initialValues={{
            title: '',
            description: '',
            priority: 'low',
            deadline: deadline.toString(),
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div>
                <Field
                  id={titleId}
                  name='title'
                  as='textarea'
                  className={clsx(styles.modalInputTitle, styles.textarea)}
                  placeholder='Title'
                />
                <ErrorMessage name='title' component='div' className={styles.errorMessage} />
              </div>
              <div>
                <Field
                  id={descriptionId}
                  name='description'
                  as='textarea'
                  className={clsx(styles.modalInputDescription, styles.textarea)}
                  placeholder='Description'
                />
                <ErrorMessage name='description' component='div' className={styles.errorMessage} />
              </div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Label color</span>
                <div className={styles.labelColors}>
                  <span
                    className={clsx(styles.radioButton, getPriorityClassName('low'))}
                    onClick={() => {
                      setPriority('low');
                      setFieldValue('priority', 'low');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('low');
                        setFieldValue('priority', 'low');
                      }
                    }}
                  />
                  <span
                    className={clsx(styles.radioButton, getPriorityClassName('medium'))}
                    onClick={() => {
                      setPriority('medium');
                      setFieldValue('priority', 'medium');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('medium');
                        setFieldValue('priority', 'medium');
                      }
                    }}
                  />
                  <span
                    className={clsx(styles.radioButton, getPriorityClassName('high'))}
                    onClick={() => {
                      setPriority('high');
                      setFieldValue('priority', 'high');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('high');
                        setFieldValue('priority', 'high');
                      }
                    }}
                  />
                  <span
                    className={clsx(styles.radioButton, getPriorityClassName('none'))}
                    onClick={() => {
                      setPriority('none');
                      setFieldValue('priority', 'none');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('none');
                        setFieldValue('priority', 'none');
                      }
                    }}
                  />
                </div>
              </div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Deadline</span>
                <Calendar
                  selectedDate={deadline}
                  handleSetDate={date => {
                    handleDateChange(date);
                    setFieldValue('deadline', date.toString());
                  }}
                />
              </div>
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddBoard;
