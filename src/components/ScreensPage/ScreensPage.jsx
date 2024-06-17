import AddColumnModal from '../AddColumn/AddColumn.jsx';
import FiltersModal from '../FiltersModal/FiltersModal.jsx';
import TaskBoard from '../TaskBoard/TaskBoard.jsx';
import sprite from '../../assets/sprite.svg';
import styles from './ScreensPage.module.css';
import { useState } from 'react';
import ScreenPageEmptyElement from '../ScreenPageEmptyElement/ScreenPageEmptyElement.jsx';

const ScreensPage = () => {
  const [board, setBoard] = useState(null);

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);

  const handleOpenFiltersModal = () => {
    setIsFiltersModalOpen(true);
  };

  const handleCloseFiltersModal = () => {
    setIsFiltersModalOpen(false);
  };

  const handleOpenAddColumnModal = () => {
    setIsAddColumnModalOpen(true);
  };

  const handleCloseAddColumnModal = () => {
    setIsAddColumnModalOpen(false);
  };

  const addColumn = newColumn => {
    const updatedBoard = { ...board, columns: [...board.columns, newColumn] };

    setBoard(updatedBoard);
  };

  const addCard = (columndId, newCard) => {
    const updatedBoard = {
      ...board,
      columns: board.columns.map(column =>
        column.id === columndId ? { ...column, cards: [...column.cards, newCard] } : column
      ),
    };

    setBoard(updatedBoard);
  };

  const handleEditColumn = (columnId, updatedColumn) => {
    const updatedBoard = {
      ...board,
      columns: board.columns.map(column =>
        column.id === columnId ? { ...column, ...updatedColumn } : column
      ),
    };

    setBoard(updatedBoard);
  };

  const handleEditCard = (cardId, columnId, updatedCard) => {
    const updatedBoard = {
      ...board,
      columns: board.columns.map(column =>
        column.id === columnId
          ? {
              ...column,
              cards: column.cards.map(card =>
                card.id === cardId ? { ...card, ...updatedCard } : card
              ),
            }
          : column
      ),
    };

    setBoard(updatedBoard);
  };

  const handleDeleteColumn = columnId => {
    const updatedBoard = {
      ...board,
      columns: board.columns.filter(column => column.id !== columnId),
    };

    setBoard(updatedBoard);
  };

  const handleDeleteCard = (columnId, cardId) => {
    const updatedBoard = {
      ...board,
      columns: board.columns.map(column =>
        column.id === columnId
          ? { ...column, cards: column.cards.filter(card => card.id !== cardId) }
          : column
      ),
    };

    setBoard(updatedBoard);
  };

  return (
    <div className={styles.screensPage}>
      <div className={styles.containerFilter}>
        <button className={styles.filtersBtn} onClick={handleOpenFiltersModal}>
          <svg className={styles.iconFilter}>
            <use href={`${sprite}#icon-filter`} />
          </svg>
          Filters
        </button>
      </div>
      {isFiltersModalOpen && <FiltersModal onClose={handleCloseFiltersModal} />}
      {board ? (
        <div>
          <h2 className={styles.titleBoard}>Title project</h2>
          <TaskBoard
            columns={board.columns}
            onEditCard={handleEditCard}
            onEditColumn={handleEditColumn}
            onDeleteColumn={handleDeleteColumn}
            onDeleteCard={handleDeleteCard}
            onAddCard={addCard}
          />
          <button className={styles.columnBtn} onClick={handleOpenAddColumnModal}>
            <div className={styles.containerIcon}>
              <svg className={styles.iconPlus}>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </div>
            Add another column
          </button>
          {isAddColumnModalOpen && (
            <AddColumnModal onClose={handleCloseAddColumnModal} isOpen={addColumn} />
          )}
        </div>
      ) : (
        <ScreenPageEmptyElement />
      )}
    </div>
  );
};

export default ScreensPage;
