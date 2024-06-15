import 'react-datepicker/dist/react-datepicker.css';
import ButtonIcon from '../ButtonIcon/ButtonIcon.jsx';
import axios from 'axios';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import styles from './EditColumn.module.css';
import { useState } from 'react';

const EditColumnModal = ({ isOpen, onClose, boardId }) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleEdit = async () => {
    try {
      await axios.put(`/api/boards/columns/${boardId}`, {
        title,
      });

      onClose();
    } catch (error) {
      setErrorMessage(`Error editing column: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={clsx(styles.closeButton)} onClick={onClose}>
          <svg className={styles.closeIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
          </svg>
        </button>
        <h2 className={styles.addColumn}>Edit column</h2>
        <textarea
          className={clsx(styles.modalInputTitle, styles.textarea)}
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}></textarea>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <ButtonIcon
          id='icon-add'
          iconWidth='28'
          iconHeight='28'
          btnClassName={styles.addButton}
          onClick={handleEdit}>
          Edit
        </ButtonIcon>
      </div>
    </div>
  );
};

export default EditColumnModal;
