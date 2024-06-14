import {
  selectBoards,
  selectBoardsError,
  selectBoardsLoading,
} from '../../redux/boards/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import css from './ProjectList.module.css';
import { fetchBoards } from '../../redux/boards/boards.js';
import { useEffect } from 'react';

const ProjectList = () => {
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

  return (
    <ul className={css.projectList}>
      {boards.map(board => (
        <li key={board._id} className={css.projectItem}>
          <img src={board.icon} alt='icon' className={css.projectIcon} />
          <span className={css.projectTitle}>{board.title}</span>
          <button className={css.editButton}>Edit</button>
          <button className={css.deleteButton}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
