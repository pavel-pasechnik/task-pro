import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './EditBoard.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../redux/cards/operations.js';

const EditBoard = ({ isOpen, onClose, columnId }) => {
  const [labelColor, setLabelColor] = useState('pink');
  const [deadline, setDeadline] = useState(new Date());

  const dispatch = useDispatch();

  // if (!isOpen) return null;

  const handleDateChange = date => {
    setDeadline(date);
  };

  const getLabelClassName = color => {
    return `${styles.radioButton} ${styles[color]} ${labelColor === color ? styles.active : ''}`;
  };

  const validationSchema = Yup.object({
    title: Yup.string(),
    description: Yup.string(),
    deadline: Yup.number(),
    labelColor: Yup.string(),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const unixDeadline = Math.floor(deadline.getTime() / 1000);
      const cardData = {
        title: values.title,
        description: values.description,
        labelColor,
        deadline: unixDeadline,
      };

      await dispatch(updateCard({ columnId, cardData })).unwrap();
      onClose();
      toast.success('Card updated successfully!');
    } catch (error) {
      toast.error(`Error updating card: ${error.response?.data?.message || error.message}`);
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
        <h2 className={styles.addTitle}>Edit card</h2>
        <Formik
          initialValues={{
            title: '',
            description: '',
            labelColor: 'pink',
            deadline: deadline.toString(),
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div>
                <Field
                  name='title'
                  as='textarea'
                  className={clsx(styles.modalInputTitle, styles.textarea)}
                  placeholder='Title'
                />
                <ErrorMessage name='title' component='div' className={styles.errorMessage} />
              </div>
              <div>
                <Field
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
                    className={getLabelClassName('low')}
                    onClick={() => {
                      setLabelColor('low');
                      setFieldValue('labelColor', 'low');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('low');
                        setFieldValue('labelColor', 'low');
                      }
                    }}
                  />
                  <span
                    className={getLabelClassName('medium')}
                    onClick={() => {
                      setLabelColor('medium');
                      setFieldValue('labelColor', 'medium');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('medium');
                        setFieldValue('labelColor', 'medium');
                      }
                    }}
                  />
                  <span
                    className={getLabelClassName('high')}
                    onClick={() => {
                      setLabelColor('high');
                      setFieldValue('labelColor', 'high');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('high');
                        setFieldValue('labelColor', 'high');
                      }
                    }}
                  />
                  <span
                    className={getLabelClassName('none')}
                    onClick={() => {
                      setLabelColor('none');
                      setFieldValue('labelColor', 'none');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('none');
                        setFieldValue('labelColor', 'none');
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
                Edit
              </ButtonIcon>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditBoard;
