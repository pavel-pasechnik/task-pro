import {
  selectBoards,
  selectBoardsError,
  selectBoardsLoading,
  selectCurrentBoard,
} from '../../redux/boards/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import css from './ScreensPage.module.css';
// import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  // const { boardId } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const loading = useSelector(selectBoardsLoading);
  const error = useSelector(selectBoardsError);
  const currentBoard = useSelector(selectCurrentBoard);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className={css.screensPage}>Error: {error}</p>;
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

  return (
    <div className={css.screensPage}>
      <h2>{currentBoard ? currentBoard.title : 'Board not found'}</h2>
      {/* Повертаю тільки назву поки що  */}
    </div>
  );
};

export default ScreensPage;
