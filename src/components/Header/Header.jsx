// import { useContext, useRef, useState } from 'react';
// import css from './Header.module.css';
// import sprite from '../../assets/sprite.svg';
// import { useOutsideClick } from '../../hooks/useOutsideClick.js';

// import EditUserProfile from '../EditUserProfile/EditUserProfile.jsx';

// import { ThemeContext } from '../ThemeContext/ThemeContext.jsx';

// const Header = ({ toggleSidebar }) => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isShowTheme, setIsShowTheme] = useState(false);
//   const ref = useRef(null);

//   const { toggleTheme } = useContext(ThemeContext); // Використовуємо ThemeContext

//   useOutsideClick(ref, () => setIsShowTheme(false));

//   const toggleOpenTheme = () => setIsShowTheme(!isShowTheme);

//   const handleModalOpen = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   const onSelectTheme = value => {
//     toggleTheme(value); // Викликаємо toggleTheme для зміни теми
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
//       {isModalOpen && <EditUserProfile onClose={handleModalClose} />}
//     </div>
//   );
// };

// export default Header;

import { useContext, useEffect, useRef, useState } from 'react';
import css from './Header.module.css';
import sprite from '../../assets/sprite.svg';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';
import EditUserProfile from '../EditUserProfile/EditUserProfile.jsx';
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx';

const Header = ({ toggleSidebar }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);
  const [userData, setUserData] = useState({ name: '', avatarUrl: '' });
  const ref = useRef(null);

  const { toggleTheme } = useContext(ThemeContext);

  useOutsideClick(ref, () => setIsShowTheme(false));

  const toggleOpenTheme = () => setIsShowTheme(!isShowTheme);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const onSelectTheme = value => {
    toggleTheme(value);
    setIsShowTheme(false);
  };

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       // Замість '/api/user' треба напевно щось інше
  //       const response = await fetch('/api/user');

  //       // Перевіряємо, чи відповідає контент типу JSON
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const contentType = response.headers.get('content-type');

  //       if (!contentType || !contentType.includes('application/json')) {
  //         throw new TypeError('Expected JSON response');
  //       }

  //       const data = await response.json();

  //       setUserData({
  //         name: data.name,
  //         avatarUrl: data.avatarUrl,
  //       });
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);

  //       // Діагностика помилок
  //       if (error instanceof TypeError) {
  //         console.error('Response was not JSON.');
  //       } else {
  //         console.error('Error with the network or server.');
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, []);

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
          <p className={css.text}>{userData.name || 'Name'}</p>
          <div
            className={css.avatarWrap}
            onClick={handleModalOpen}
            role='button'
            tabIndex={0}
            aria-label='Open user modal'>
            {userData.avatarUrl ? (
              <img src={userData.avatarUrl} alt='User Avatar' className={css.avatarImage} />
            ) : (
              <svg className={css.avatar}>
                <use href={`${sprite}#icon-user-avatar`} />
              </svg>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && <EditUserProfile onClose={handleModalClose} />}
    </div>
  );
};

export default Header;
