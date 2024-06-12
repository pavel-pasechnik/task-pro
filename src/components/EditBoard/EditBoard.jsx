import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styles from './EditBoard.module.css';
import { useState } from 'react';

const EditBoard = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labelColor, setLabelColor] = useState('pink');
  const [deadline, setDeadline] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  if (!isOpen) return null;

  const handleEdit = () => {
    // TODO дописати логіку редагування карти карточок
    console.log({ title, description, labelColor, deadline });
    onClose();
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = date => {
    setDeadline(date);
    setIsCalendarOpen(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <button className={styles['close-button']} onClick={onClose}>
          ×
        </button>
        <h2>Edit card</h2>
        <input
          type='text'
          className={styles['modal-input']}
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className={styles['modal-textarea']}
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}></textarea>
        <div className={styles['label-colors']}>
          <span
            className={`${styles['label-color']} ${labelColor === 'pink' ? styles.active : ''}`}
            onClick={() => setLabelColor('pink')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('pink');
              }
            }}></span>
          <span
            className={`${styles['label-color']} ${labelColor === 'blue' ? styles.active : ''}`}
            onClick={() => setLabelColor('blue')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('blue');
              }
            }}></span>
          <span
            className={`${styles['label-color']} ${labelColor === 'green' ? styles.active : ''}`}
            onClick={() => setLabelColor('green')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('green');
              }
            }}></span>
          <span
            className={`${styles['label-color']} ${labelColor === 'gray' ? styles.active : ''}`}
            onClick={() => setLabelColor('gray')}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setLabelColor('gray');
              }
            }}></span>
        </div>
        <div className={styles.deadline}>
          <label htmlFor='deadline-input'>Deadline</label>
          <div
            id='deadline-input'
            onClick={toggleCalendar}
            className={styles['deadline-input']}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleCalendar();
              }
            }}>
            {deadline.toLocaleDateString()}
          </div>
          {isCalendarOpen && (
            <div className={styles.calendar}>
              <DatePicker selected={deadline} onChange={handleDateChange} inline />
            </div>
          )}
        </div>
        <button className={styles['add-button']} onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditBoard;
