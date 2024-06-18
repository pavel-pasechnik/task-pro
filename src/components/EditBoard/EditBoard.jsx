import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import axios from 'axios';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './EditBoard.module.css';
import { useState } from 'react';

const EditBoard = ({ isOpen, onClose, columnId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labelColor, setLabelColor] = useState('pink');
  const [deadline, setDeadline] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleAdd = async () => {
    try {
      await axios.patch(`/api/boards/cards/${columnId}`, {
        title,
        description,
        labelColor,
        deadline,
      });

      onClose();
    } catch (error) {
      setErrorMessage(`Error adding card: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleDateChange = date => {
    setDeadline(date);
  };

  const getLabelClassName = color => {
    return `${styles.labelColor} ${styles[color]} ${labelColor === color ? styles.active : ''}`;
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
        <textarea
          className={clsx(styles.modalInputTitle, styles.textarea)}
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}></textarea>
        <textarea
          className={clsx(styles.modalInputDescription, styles.textarea)}
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}></textarea>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Label color</span>
          <div className={styles.labelColors}>
            <span
              className={getLabelClassName('blue')}
              onClick={() => setLabelColor('blue')}
              role='button'
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLabelColor('blue');
                }
              }}
            />
            <span
              className={getLabelClassName('pink')}
              onClick={() => setLabelColor('pink')}
              role='button'
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLabelColor('pink');
                }
              }}
            />
            <span
              className={getLabelClassName('green')}
              onClick={() => setLabelColor('green')}
              role='button'
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLabelColor('green');
                }
              }}
            />
            <span
              className={getLabelClassName('gray')}
              onClick={() => setLabelColor('gray')}
              role='button'
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLabelColor('gray');
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
          onClick={handleAdd}>
          Add
        </ButtonIcon>
      </div>
    </div>
  );
};

export default EditBoard;
