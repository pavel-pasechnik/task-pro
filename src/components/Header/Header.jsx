// import { useRef, useState } from 'react';
// import css from './Header.module.css';
// import sprite from '../../assets/sprite.svg';
// import { useOutsideClick } from '../../hooks/useOutsideClick.js';

// import UserEditModal from '../UserEditModal/UserEditModal.jsx';

// const Header = ({ toggleSidebar }) => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isShowTheme, setIsShowTheme] = useState(false);
//   const ref = useRef(null);

//   useOutsideClick(ref, () => setIsShowTheme(false));

//   const toggleOpenTheme = () => setIsShowTheme(!isShowTheme);

//   const handleModalOpen = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   const onSelectTheme = value => {
//     console.log(value);
//     setIsShowTheme(false);
//   };

//   return (
//     <div className={css.headerBox}>
//       <button
//         className={css.burgerMenu}
//         onClick={toggleSidebar}
//         tabIndex={0}
//         onKeyDown={toggleSidebar}
//         aria-label='Toggle sidebar'>
//         <svg className={css.menu}>
//           <use href={`${sprite}#icon-burger`} />
//         </svg>
//       </button>

//       <div className={css.rightBlock}>
//         <div className={css.dropdown} ref={ref}>
//           <button className={css.dropbtn} onClick={toggleOpenTheme}>
//             Theme
//             <div className={`${css.arrowIcon} ${isShowTheme ? css.open : ''}`}>
//               <svg className={css.arrow}>
//                 <use href={`${sprite}#icon-arrow-down`} />
//               </svg>
//             </div>
//           </button>
//           <div className={`${css.dropdownContent} ${isShowTheme ? css.show : ''}`}>
//             <button className={css.themeBtn} onClick={() => onSelectTheme('light')}>
//               Light
//             </button>
//             <button className={css.themeBtn} onClick={() => onSelectTheme('dark')}>
//               Dark
//             </button>
//             <button className={css.themeBtn} onClick={() => onSelectTheme('violet')}>
//               Violet
//             </button>
//           </div>
//         </div>
//         <div className={css.imgBtn}>
//           <p className={css.text}>Name</p>
//           <div
//             className={css.avatarWrap}
//             onClick={handleModalOpen}
//             role='button'
//             tabIndex={0}
//             aria-label='Open user modal'>
//             <svg className={css.avatar}>
//               <use href={`${sprite}#icon-user-avatar`} />
//             </svg>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && <UserEditModal onClose={handleModalClose} />}
//     </div>
//   );
// };

// export default Header;

import { useContext, useRef, useState } from 'react';
import css from './Header.module.css';
import sprite from '../../assets/sprite.svg';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';

import UserEditModal from '../UserEditModal/UserEditModal.jsx';

import { ThemeContext } from '../ThemeContext/ThemeContext.jsx';

const Header = ({ toggleSidebar }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);
  const ref = useRef(null);

  const { toggleTheme } = useContext(ThemeContext); // Використовуємо ThemeContext

  useOutsideClick(ref, () => setIsShowTheme(false));

  const toggleOpenTheme = () => setIsShowTheme(!isShowTheme);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const onSelectTheme = value => {
    toggleTheme(value); // Викликаємо toggleTheme для зміни теми
    setIsShowTheme(false);
  };

  return (
    <div className={css.headerBox}>
      <button
        className={css.burgerMenu}
        onClick={toggleSidebar}
        tabIndex={0}
        onKeyDown={toggleSidebar}
        aria-label='Toggle sidebar'>
        <svg className={css.menu}>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>

      <div className={css.rightBlock}>
        <div className={css.dropdown} ref={ref}>
          <button className={css.dropbtn} onClick={toggleOpenTheme}>
            Theme
            <div className={`${css.arrowIcon} ${isShowTheme ? css.open : ''}`}>
              <svg className={css.arrow}>
                <use href={`${sprite}#icon-arrow-down`} />
              </svg>
            </div>
          </button>
          <div className={`${css.dropdownContent} ${isShowTheme ? css.show : ''}`}>
            <button className={css.themeBtn} onClick={() => onSelectTheme('light')}>
              Light
            </button>
            <button className={css.themeBtn} onClick={() => onSelectTheme('dark')}>
              Dark
            </button>
            <button className={css.themeBtn} onClick={() => onSelectTheme('violet')}>
              Violet
            </button>
          </div>
        </div>
        <div className={css.imgBtn}>
          <p className={css.text}>Name</p>
          <div
            className={css.avatarWrap}
            onClick={handleModalOpen}
            role='button'
            tabIndex={0}
            aria-label='Open user modal'>
            <svg className={css.avatar}>
              <use href={`${sprite}#icon-user-avatar`} />
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && <UserEditModal onClose={handleModalClose} />}
    </div>
  );
};

export default Header;
