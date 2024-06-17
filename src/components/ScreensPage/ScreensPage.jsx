import {
  selectBoards,
  selectBoardsError,
  selectBoardsLoading,
  selectCurrentBoard,
} from '../../redux/boards/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import css from './ScreensPage.module.css';
import ScreenPageEmptyElement from '../ScreenPageEmptyElement/ScreenPageEmptyElement.jsx';
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

  // if (error ) {
  //   console.log(`${error}`);

  //   return;
  // }

  if (!Array.isArray(boards) || boards.length === 0 || error.status === 'Not Found') {
    return <ScreenPageEmptyElement />;
  }

  return (
    <div className={css.screensPage}>
      <h2>{currentBoard ? currentBoard.title : 'Board not found'}</h2>
      {/* Повертаю тільки назву поки що  */}
    </div>
  );
};

export default ScreensPage;
