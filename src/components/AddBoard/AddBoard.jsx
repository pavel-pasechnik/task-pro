import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useId, useState } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import axios from 'axios';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './AddBoard.module.css';
import { useDispatch } from 'react-redux';

const AddBoard = ({ isOpen, onClose, columnId }) => {
  const [priority, setPriority] = useState('low');
  const [deadline, setDeadline] = useState(new Date());

  const dispatch = useDispatch();
  const titleId = useId();
  const descriptionId = useId();

  if (!isOpen) return null;

  const handleAdd = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`/api/boards/cards/${columnId}`, {
        ...values,
        priority,
        deadline,
      });
      dispatch(response.data);
      onClose();
      toast.success('Card added successfully!');
    } catch (error) {
      toast.error(`Error adding card: ${error.response?.data?.message || error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDateChange = date => {
    setDeadline(date);
  };

  const getPriorityClassName = priorityValue => {
    return `${styles.labelColor} ${styles[priorityValue]} ${priority === priorityValue ? styles.active : ''}`;
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string(),
  });

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
          initialValues={{ title: '', description: '' }}
          validationSchema={validationSchema}
          onSubmit={handleAdd}>
          {({ isSubmitting }) => (
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
                <span className={styles.sectionTitle}>Priority</span>
                <div className={styles.labelColors}>
                  <span
                    className={getPriorityClassName('low')}
                    onClick={() => setPriority('low')}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('low');
                      }
                    }}
                  />
                  <span
                    className={getPriorityClassName('medium')}
                    onClick={() => setPriority('medium')}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('medium');
                      }
                    }}
                  />
                  <span
                    className={getPriorityClassName('high')}
                    onClick={() => setPriority('high')}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('high');
                      }
                    }}
                  />
                  <span
                    className={getPriorityClassName('_')}
                    onClick={() => setPriority('_')}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setPriority('_');
                      }
                    }}
                  />
                </div>
              </div>
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Deadline</span>
                <Calendar selectedDate={deadline} handleSetDate={handleDateChange} />
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
