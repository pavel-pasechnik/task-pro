import AddBoard from '../AddBoard/AddBoard.jsx';
import Button from '../Button/Button.jsx';
import EditColumnModal from '../EditColumn/EditColumn.jsx';
import IconButton from '../ButtonIcon/ButtonIcon.jsx';
import Task from '../Task/Task.jsx';
import sprite from '../../assets/sprite.svg';
import styles from './TaskBoard.module.css';
import { useState } from 'react';

const TaskBoard = ({
  columns,
  onEditCard,
  onEditColumn,
  onDeleteColumn,
  onDeleteCard,
  onAddCard,
}) => {
  const [isEditModalOpenColumn, setIsEditModalOpenColumn] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleOpenEditColumn = column => {
    setSelectedColumn(column);
    setIsEditModalOpenColumn(true);
  };

  const handleCloseEditColumn = () => {
    setIsEditModalOpenColumn(false);
    setSelectedColumn(null);
  };

  const handleOpenAddCardModal = column => {
    setSelectedColumn(column);
    setIsAddCardModalOpen(true);
  };

  const handleCloseAddCardModal = () => {
    setIsAddCardModalOpen(false);
    setSelectedColumn(null);
  };

  return (
    <div>
      {columns.map(column => (
        <div key={column.id}>
          <p>{column.title}</p>
          <div>
            <IconButton id='icon-pencil' onClick={() => handleOpenEditColumn(column.id)} />
            <IconButton id='icon-trash' onClick={() => onDeleteColumn(column.id)} />
          </div>
          {isEditModalOpenColumn && (
            <EditColumnModal
              column={selectedColumn}
              isOpen={onEditColumn}
              onClose={handleCloseEditColumn}
            />
          )}

          <ul className={styles.taskBoard}>
            {column.cards.map(card => (
              <li key={card.id}>
                <Task column={column} task={card} onEdit={onEditCard} onDeleteCard={onDeleteCard} />
              </li>
            ))}
          </ul>

          <Button title='Add another card' onClick={() => handleOpenAddCardModal(column)}>
            <svg>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </Button>
          {isAddCardModalOpen && (
            <AddBoard
              column={selectedColumn}
              onClose={handleCloseAddCardModal}
              isOpen={onAddCard}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
