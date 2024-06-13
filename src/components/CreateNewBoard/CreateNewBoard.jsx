import Button from '../../components/Button/Button.jsx';
import PopUpNewBoard from '../../components/PopUpNewBoard/PopUpNewBoard.jsx';
import css from './CreateNewBoard.module.css';
import sprite from '../../assets/sprite.svg';

const CreateNewBoard = ({ openModal }) => {
  const handleOpenModal = () => {
    openModal(<PopUpNewBoard onClose={() => openModal(null)} />);
  };

  return (
    <div className={css.createNewBoard}>
      <p className={css.createNewBoardText}>Create a new board</p>
      <Button type={'button'} className={css.buttonAddBoard} onClick={handleOpenModal}>
        <svg className={css.buttonIcon}>
          <use href={`${sprite}#icon-add`} />
        </svg>
      </Button>
    </div>
  );
};

export default CreateNewBoard;
