import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './ProjectList.module.css';
import fetchBoards from '../../redux/boards/boards.js';
import ProjectListElement from '../ProjectListElement/ProjectListElement.jsx';
import {
  selectBoards,
  selectBoardsError,
  selectBoardsLoading,
  selectCurrentBoard,
} from '../../redux/boards/selectors.js';
import { setCurrentBoard } from '../../redux/boards/slice.js';

const ProjectList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const loading = useSelector(selectBoardsLoading);
  const error = useSelector(selectBoardsError);
  const currentBoard = useSelector(selectCurrentBoard);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleBoardClick = board => {
    dispatch(setCurrentBoard(board));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!boards || boards.length === 0 || error.status === 'Not Found') {
    return <p className={css.projectList}></p>;
  }

  return (
    <ul className={css.projectList}>
      {boards.map(board => (
        <ProjectListElement
          key={board._id}
          board={board}
          isCurrent={currentBoard && currentBoard._id === board._id}
          onClick={handleBoardClick}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
