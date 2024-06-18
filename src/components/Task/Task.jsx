import EditBoard from '../EditBoard/EditBoard.jsx';
import IconButton from '../ButtonIcon/ButtonIcon.jsx';
import MoveCard from '../MoveCard/MoveCard.jsx';
import styles from './Task.module.css';
import { useState } from 'react';

const Task = ({ columns, column, task, onEdit, onDeleteCard, onMoveCard }) => {
  const [isEditModalOpenCard, setIsEditModalOpenCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenEditCard = card => {
    setSelectedCard(card);
    setIsEditModalOpenCard(true);
  };

  const handleCloseEditCard = () => {
    setIsEditModalOpenCard(false);
    setSelectedCard(null);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMoveCard = targetColumnId => {
    onMoveCard(task.id, column.id, targetColumnId);
    handleMenuClose();
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
        <IconButton id='icon-arrow-circle' onClick={handleMenuOpen} />
        <IconButton id='icon-pencil' onClick={() => handleOpenEditCard(task)} />
        <IconButton id='icon-trash' onClick={() => onDeleteCard(column.id, task.id)} />
      </div>
      {isMenuOpen && (
        <MoveCard columns={columns} onSelect={handleMoveCard} onClose={handleMenuClose} />
      )}
      {isEditModalOpenCard && (
        <EditBoard card={selectedCard} isOpen={onEdit} onClose={handleCloseEditCard} />
      )}
    </div>
  );
};

export default Task;
