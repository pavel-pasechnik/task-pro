import React from 'react';
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
        <div className={`${css.projectControls} ${isCurrent ? css.showControls : ''}`}>
          <button className={css.editButton}>
            <svg className={css.projectControlsEdit}>
              <use href={`${sprite}#icon-pencil`}></use>
            </svg>
          </button>
          <button className={css.deleteButton}>
            <svg className={css.projectControlsDelete}>
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </button>
        </div>
        {isCurrent && <div className={css.highlight}></div>}
      </button>
    </li>
  );
};

export default ProjectListElement;
