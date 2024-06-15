import {
  selectBoards,
  selectBoardsError,
  selectBoardsLoading,
} from '../../redux/boards/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import css from './ScreensPage.module.css';
import fetchBoards from '../../redux/boards/boards.js';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const loading = useSelector(selectBoardsLoading);
  const error = useSelector(selectBoardsError);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(boards) || boards.length === 0) {
    return (
      <div className={css.screensPage}>
        <div className={css.screensPageTextContainer}>
          <p className={css.screensPageText}>
            Before starting your project, it is essential to create a board to visualize and track
            all the necessary tasks and milestones. This board serves as a powerful tool to organize
            the workflow and ensure effective collaboration among team members.
          </p>
        </div>
      </div>
    );
  }

  const currentBoard = boards.find(board => board._id === boardId);

  return (
    <div className={css.screensPage}>
      <h2>{currentBoard ? currentBoard.title : 'Board not found'}</h2>
      {/* Add further content related to the current board */}
    </div>
  );
};

export default ScreensPage;
