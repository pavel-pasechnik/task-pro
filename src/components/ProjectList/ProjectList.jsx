import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import css from './ProjectList.module.css';
import { fetchBoards } from '../../redux/boards/actions.js';
import ProjectListElement from '../ProjectListElement/ProjectListElement.jsx';
import {
  selectBoards,
  selectBoardsError,
  selectBoardsLoading,
  selectCurrentBoard,
} from '../../redux/boards/selectors.js';
import { setCurrentBoard } from '../../redux/boards/slice.js';
import Modal from '../Modal/Modal.jsx';
import { deleteBoard } from '../../redux/boards/actions.js';
import { PopUpEditBoard } from '../PopUpEditBoard/PopUpEditBoard.jsx';

const ProjectList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const loading = useSelector(selectBoardsLoading);
  const error = useSelector(selectBoardsError);
  const currentBoard = useSelector(selectCurrentBoard);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [boardToEdit, setBoardToEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleBoardClick = board => {
    dispatch(setCurrentBoard(board));
  };

  const handleEditClick = board => {
    setBoardToEdit(board);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = boardId => {
    if (window.confirm('Are you sure you want to delete this board?')) {
      dispatch(deleteBoard(boardId));
    }
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setBoardToEdit(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className={css.projectList}>Error: {error}</p>;
  }

  if (!boards || boards.length === 0) {
    return <p className={css.projectList}>No boards available</p>;
  }

  return (
    <>
      <ul className={css.projectList}>
        {boards.map(board => (
          <ProjectListElement
            key={board._id}
            board={board}
            isCurrent={currentBoard && currentBoard._id === board._id}
            onClick={handleBoardClick}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
      {isEditModalOpen && (
        <Modal onClose={closeEditModal}>
          <PopUpEditBoard board={boardToEdit} onClose={closeEditModal} />
        </Modal>
      )}
    </>
  );
};

export default ProjectList;
