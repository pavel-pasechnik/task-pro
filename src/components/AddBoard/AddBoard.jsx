import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import IconButton from '../IconButton/IconButton';
import Input from '../Input/Input';
import styles from './AddBoard.module.css';
import { useState } from 'react';

const AddBoard = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labelColor, setLabelColor] = useState('pink');
  const [deadline, setDeadline] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  if (!isOpen) return null;

  const handleAdd = () => {
    // TODO дописати логіку додавання карточок
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
        <h2>Add card</h2>
        <Input
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
          <input
            id='pink'
            type='radio'
            name='labelColor'
            value='pink'
            checked={labelColor === 'pink'}
            onChange={() => setLabelColor('pink')}
            className={`${styles['label-color']} ${styles.pink} ${labelColor === 'pink' ? styles.active : ''}`}
          />
          <input
            id='blue'
            type='radio'
            name='labelColor'
            value='blue'
            checked={labelColor === 'blue'}
            onChange={() => setLabelColor('blue')}
            className={`${styles['label-color']} ${styles.blue} ${labelColor === 'blue' ? styles.active : ''}`}
          />
          <input
            id='green'
            type='radio'
            name='labelColor'
            value='green'
            checked={labelColor === 'green'}
            onChange={() => setLabelColor('green')}
            className={`${styles['label-color']} ${styles.green} ${labelColor === 'green' ? styles.active : ''}`}
          />
          <input
            id='gray'
            type='radio'
            name='labelColor'
            value='gray'
            checked={labelColor === 'gray'}
            onChange={() => setLabelColor('gray')}
            className={`${styles['label-color']} ${styles.gray} ${labelColor === 'gray' ? styles.active : ''}`}
          />
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
        <IconButton id='plus' iconWidth='24' iconHeight='24' onClick={handleAdd}>
          <span className={styles.title}>Add</span>
        </IconButton>
      </div>
    </div>
  );
};

export default AddBoard;
