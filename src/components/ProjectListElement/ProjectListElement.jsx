import css from './ProjectListElement.module.css';
import sprite from '../../assets/sprite.svg';

const ProjectListElement = ({ board, isCurrent, onClick }) => {
  return (
    <li className={`${css.projectItem} ${isCurrent ? css.currentProject : ''}`}>
      <button onClick={() => onClick(board)} className={css.projectButton}>
        <div className={css.projectTitleContainer}>
          <svg className={css.projectIcon}>
            <use href={`${sprite}#${board.icon}`}></use>
          </svg>
          <span className={css.projectTitle}>{board.title}</span>
        </div>
        <div className={css.projectControls}>
          <div className={css.editButton}>
            <svg className={css.projectControlsEdit}>
              <use href={`${sprite}#icon-pencil`}></use>
            </svg>
          </div>
          <div className={css.deleteButton}>
            <svg className={css.projectControlsDelete}>
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </div>
        </div>
      </button>
    </li>
  );
};

export default ProjectListElement;
