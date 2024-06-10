import Button from '../../helpers/Button/Button.jsx';
import css from './CreateNewBoard.module.css';

const CreateNewBoard = () => {
  return (
    <div className={css.createNewBoard}>
      <p className={css.createNewBoardText}>Create a new board</p>
      <Button
        type={'button'}
        className={css.buttonAddBoard}
        onClick={() => {
          console.log('Додаємо нову дошку');
        }}>
        <svg className={css.buttonIcon}>
          <use href='/src/assets/sprite.svg#icon-add' />
        </svg>
      </Button>
    </div>
  );
};

export default CreateNewBoard;
