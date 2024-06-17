
import EditBoard from '../EditBoard/EditBoard.jsx';
import IconButton from '../ButtonIcon/ButtonIcon.jsx';

import styles from './Task.module.css';
import { useState } from 'react';

const Task = ({ column, task, onEdit, onDeleteCard }) => {
  const [isEditModalOpenCard, setIsEditModalOpenCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenEditCard = card => {
    setSelectedCard(card);
    setIsEditModalOpenCard(true);
  };

  const handleCloseEditCard = () => {
    setIsEditModalOpenCard(false);
    setSelectedCard(null);
  };

  return (
    <div className={styles.task}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <hr />
      <div>
        <p>Priority</p>
        <div>
          <span></span>
          <p>Low</p>
        </div>
      </div>
      <div>
        <p>Deadline</p>
        <p>Date</p>
      </div>
      <div>
        <IconButton id='icon-arrow-circle' />
        <IconButton id='icon-pencil' onClick={() => handleOpenEditCard(task)} />
        <IconButton id='icon-trash' onClick={() => onDeleteCard(column.id, task.id)} />
      </div>
      {isEditModalOpenCard && (
        <EditBoard card={selectedCard} isOpen={onEdit} onClose={handleCloseEditCard} />
      )}
    </div>
  );
};

export default Task;
