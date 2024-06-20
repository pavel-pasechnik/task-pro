/* eslint-disable array-callback-return */
import AddBoard from '../AddBoard/AddBoard.jsx';
import Button from '../Button/Button.jsx';
import EditColumnModal from '../EditColumn/EditColumn.jsx';
import IconButton from '../ButtonIcon/ButtonIcon.jsx';
import Task from '../Task/Task.jsx';
import sprite from '../../assets/sprite.svg';
import styles from './TaskBoard.module.css';
import { useSelector } from 'react-redux';
import {
  selectCurrentColumn,
  selectError,
  selectIsEditColumnOpen,
  selectIsLoading,
} from '../../redux/column/select.js';
import { setCurrentColumn, setIsEditColumnOpen } from '../../redux/column/slice.js';
import { useDispatch } from 'react-redux';
import { deleteColumn } from '../../redux/column/operation.js';
import { selectCards, selectIsAddCardOpen } from '../../redux/cards/selectors.js';
import { setIsAddCardOpen } from '../../redux/cards/slice.js';
import { fetchCard } from '../../redux/cards/operations.js';
import { useEffect } from 'react';

const TaskBoard = ({ columns }) => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isEditColumnOpen = useSelector(selectIsEditColumnOpen);
  const currentColumn = useSelector(selectCurrentColumn);
  const isAddCardOpen = useSelector(selectIsAddCardOpen);

  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  const handleOpenEditColumn = columnId => {
    dispatch(setCurrentColumn(columnId));
    dispatch(setIsEditColumnOpen(true));
  };

  const handleDeleteColumn = columnId => {
    dispatch(deleteColumn(columnId));
  };

  const handleOpenAddCard = () => {
    dispatch(setIsAddCardOpen(true));
  };

  const closeAddCardModal = () => {
    dispatch(setIsAddCardOpen(false));
  };

  return (
    <div>
      {columns.map(column => (
        <div key={column.id}>
          <p>{column.title}</p>
          <div>
            <IconButton id='icon-pencil' onClick={() => handleOpenEditColumn(column.id)} />
            <IconButton id='icon-trash' onClick={() => handleDeleteColumn(column.id)} />
          </div>
          {isEditColumnOpen && currentColumn === column.id && (
            <EditColumnModal columnId={currentColumn} />
          )}

          <ul className={styles.taskBoard}>
            {cards
              .filter(card => card.columnId === column.id)
              .map(card => (
                <li key={card.id}>
                  <Task columns={columns} column={column} task={card} />
                </li>
              ))}
          </ul>

          <Button title='Add another card' onClick={handleOpenAddCard}>
            <svg>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </Button>
          {isAddCardOpen && <AddBoard columnId={currentColumn} onClose={closeAddCardModal} />}
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default TaskBoard;
