/* eslint-disable array-callback-return */
import AddColumnModal from '../AddColumn/AddColumn.jsx';
import FiltersModal from '../FiltersModal/FiltersModal.jsx';
import TaskBoard from '../TaskBoard/TaskBoard.jsx';
import sprite from '../../assets/sprite.svg';
import styles from './ScreensPage.module.css';
import { useEffect, useState } from 'react';
import ScreenPageEmptyElement from '../ScreenPageEmptyElement/ScreenPageEmptyElement.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../redux/boards/selectors.js';
import {
  selectColumns,
  selectError,
  selectIsLoading,
  selectIsAddColumnOpen,
} from '../../redux/column/select.js';
import { setIsAddColumnOpen } from '../../redux/column/slice.js';
import { addColumn, fetchColumn } from '../../redux/column/operation.js';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns) || [];

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const boards = useSelector(selectBoards);
  const isAddColumnOpen = useSelector(selectIsAddColumnOpen);

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const handleOpenFiltersModal = () => {
    setIsFiltersModalOpen(true);
  };

  const handleCloseFiltersModal = () => {
    setIsFiltersModalOpen(false);
  };

  const handleOpenAddColumnModal = () => {
    dispatch(setIsAddColumnOpen(true));
  };

  const handleCloseAddColumnModal = () => {
    dispatch(setIsAddColumnOpen(false));
  };

  useEffect(() => {
    if (boards.length > 0) {
      boards.forEach(board => {
        dispatch(fetchColumn(board._id));
      });
    }
  }, [boards, dispatch]);

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
      {boards.map(board => {
        {
          board ? (
            <div key={board.id}>
              <h2 className={styles.titleBoard}>{board.title}</h2>
              <TaskBoard columns={columns.filter(col => col.boardId === board.id)} />
              <button className={styles.columnBtn} onClick={handleOpenAddColumnModal}>
                <div className={styles.containerIcon}>
                  <svg className={styles.iconPlus}>
                    <use href={`${sprite}#icon-plus`} />
                  </svg>
                </div>
                Add another column
              </button>
              {isAddColumnOpen && <AddColumnModal onClose={handleCloseAddColumnModal} />}
            </div>
          ) : (
            <ScreenPageEmptyElement />
          );
        }
      })}
      ;{isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ScreensPage;
