import css from './BurgerMenu.module.css';

const BurgerMenu = ({ toggleSidebar }) => {
  return (
    <div
      className={css.burgerMenu}
      onClick={toggleSidebar}
      role='button'
      tabIndex={0}
      onKeyDown={toggleSidebar}
      aria-label='Toggle sidebar'>
      <svg>
        <use href='/src/assets/sprite.svg#icon-burger'></use>
      </svg>
    </div>
  );
};

export default BurgerMenu;
