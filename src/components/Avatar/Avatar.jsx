import { selectIsLoading, selectUser } from '../../redux/auth/selectors.js';
import { useSelector } from 'react-redux';

// import avaDark from '../../assets/svg/user_dark.svg';
// import avaLight from '../../assets/svg/user_light.svg';
// import avaViolet from '../../assets/svg/user_violet.svg';

import sprite from '../../assets/sprite.svg';

// import { Puff } from 'react-loader-spinner';

const Avatar = ({ size, onClick, preload }) => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  // const defaultAvatar = {
  //   dark: avaDark,
  //   light: avaLight,
  //   violet: avaViolet,
  //  };
  // let src = user.avatarURL ? user.avatarURL : defaultAvatar[user.theme];

  let src = user.avatarURL ? user.avatarURL : `${sprite}#icon-logo`;

  if (preload) src = preload;

  // const mainColor = {
  //   dark: '#bedbb0',
  //   light: '#bedbb0',
  //   violet: '#5255bc',
  // };

  return (
    <>
      {isLoading ? (
        <button
          style={{
            background: 'none',
            border: 'none',
            padding: '0',
          }}>
          {/* <Puff
            height='80'
            width='80'
            radius={1}
            color={mainColor[user.theme]}
            ariaLabel='puff-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          /> */}
        </button>
      ) : (
        <button
          onClick={onClick}
          style={{
            background: 'none',
            border: 'none',
            padding: '0',
          }}>
          <img
            src={src}
            alt={user.name}
            width={size}
            height={size}
            style={{
              borderRadius: '5px',
              cursor: 'pointer',
              border: '1px solid #808080',
            }}
          />
        </button>
      )}
    </>
  );
};

export default Avatar;
