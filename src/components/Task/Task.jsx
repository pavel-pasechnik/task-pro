import EditBoard from '../EditBoard/EditBoard.jsx';
import IconButton from '../ButtonIcon/ButtonIcon.jsx';
import MoveCard from '../MoveCard/MoveCard.jsx';
import styles from './Task.module.css';
import { useState } from 'react';
import { selectCurrentCard, selectIsEditCardOpen } from '../../redux/cards/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCard, setIsAddCardOpen } from '../../redux/cards/slice.js';
import { deleteCard, updateCard } from '../../redux/cards/operations.js';

const Task = ({ columns, column, task }) => {
  const dispatch = useDispatch();
  const isEditCardOpen = useSelector(selectIsEditCardOpen);
  const currentCard = useSelector(selectCurrentCard);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenEditCard = card => {
    dispatch(setCurrentCard(card));
    dispatch(setIsAddCardOpen(true));
  };

  const handleCloseEditCard = () => {
    dispatch(setIsAddCardOpen(false));
    dispatch(setCurrentCard(null));
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMoveCard = newColumnId => {
    dispatch(
      updateCard({
        cardId: task.id,
        values: { ...task, columnId: newColumnId },
        priority: task.priority,
        deadline: task.deadline,
      })
    );
    setIsMenuOpen(false);
  };

  const handleDeleteCard = (columnId, cardId) => {
    dispatch(deleteCard(cardId));
  };

  return (
    <div className={styles.task}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <hr />
      <div>
        <p>Priority</p>
        <div>
          <span>{task.priority}</span>
          <p>{task.priority}</p>
        </div>
      </div>
      <div>
        <p>Deadline</p>
        <p>{task.deadline}</p>
      </div>
      <div>
        <IconButton id='icon-arrow-circle' onClick={handleMenuOpen} />
        <IconButton id='icon-pencil' onClick={() => handleOpenEditCard(task)} />
        <IconButton id='icon-trash' onClick={() => handleDeleteCard(column.id, task.id)} />
      </div>
      {isMenuOpen && (
        <MoveCard column={column} onSelect={handleMoveCard} onClose={handleMenuClose} />
      )}
      {isEditCardOpen && <EditBoard card={currentCard} onClose={handleCloseEditCard} />}
    </div>
  );
};

export default Task;
