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
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleDateChange = date => {
    setDeadline(date);
  };

  const getLabelClassName = color => {
    return `${styles.labelColor} ${styles[color]} ${labelColor === color ? styles.active : ''}`;
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
          initialValues={{ title: '', description: '', deadline: '', labelColor: '' }}
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
              {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
              <div className={styles.section}>
                <span className={styles.sectionTitle}>Label color</span>
                <div className={styles.labelColors}>
                  <span
                    className={getLabelClassName('blue')}
                    onClick={() => {
                      setLabelColor('blue');
                      setFieldValue('labelColor', 'blue');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('blue');
                        setFieldValue('labelColor', 'blue');
                      }
                    }}
                  />
                  <span
                    className={getLabelClassName('pink')}
                    onClick={() => {
                      setLabelColor('pink');
                      setFieldValue('labelColor', 'pink');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('pink');
                        setFieldValue('labelColor', 'pink');
                      }
                    }}
                  />
                  <span
                    className={getLabelClassName('green')}
                    onClick={() => {
                      setLabelColor('green');
                      setFieldValue('labelColor', 'green');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('green');
                        setFieldValue('labelColor', 'green');
                      }
                    }}
                  />
                  <span
                    className={getLabelClassName('gray')}
                    onClick={() => {
                      setLabelColor('gray');
                      setFieldValue('labelColor', 'gray');
                    }}
                    role='button'
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLabelColor('gray');
                        setFieldValue('labelColor', 'gray');
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
                Save
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
