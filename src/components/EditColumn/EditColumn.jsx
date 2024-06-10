import styles from './EditColumn.module.css';
import { useState } from 'react';

const EditColumnModal = ({ isOpen, onClose, initialTitle = '' }) => {
  const [title, setTitle] = useState(initialTitle);

  if (!isOpen) return null;

  const handleEdit = () => {
    // TODO зробити логіку редагування
    console.log({ title });
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <button className={styles['close-button']} onClick={onClose}>
          ×
        </button>
        <h2>Edit column</h2>
        <input
          type='text'
          className={styles['modal-input']}
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className={styles['add-button']} onClick={handleEdit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default EditColumnModal;
