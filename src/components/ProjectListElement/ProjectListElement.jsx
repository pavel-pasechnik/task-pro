import React from 'react';
import css from './ProjectListElement.module.css';
import sprite from '../../assets/sprite.svg';

const ProjectListElement = ({ board, isCurrent, onClick, onEditClick, onDeleteClick }) => {
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
          <div
            className={css.editButton}
            role='button'
            tabIndex='0'
            onClick={e => {
              e.stopPropagation();
              onEditClick(board);
            }}>
            <svg className={css.projectControlsEdit}>
              <use href={`${sprite}#icon-pencil`}></use>
            </svg>
          </div>
          <div
            className={css.deleteButton}
            role='button'
            tabIndex='0'
            onClick={e => {
              e.stopPropagation();
              onDeleteClick(board._id);
            }}>
            <svg className={css.projectControlsDelete}>
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </div>
        </div>
        {isCurrent && <div className={css.highlight}></div>}
      </button>
    </li>
  );
};

export default ProjectListElement;
