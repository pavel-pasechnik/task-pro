import { selectUser } from '../../redux/auth/selectors.js';
import { useRef, useState, useEffect, useContext } from 'react';
import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import styles from './AvatarModal.module.css';
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx';

export function Previews({ onImageSelect }) {
  const user = useSelector(selectUser);
  const { theme } = useContext(ThemeContext);
  const fileInput = useRef(null);

  const defaultPreview = user.avatarURL ? user.avatarURL : `${sprite}#icon-user-avatar`;

  const [preview, setPreview] = useState(defaultPreview);

  useEffect(() => {
    if (!user.avatarURL) {
      setPreview(`${sprite}#icon-user-avatar`);
    }
  }, [user.avatarURL]);

  const handlePickImage = e => {
    const selectedFile = e.target.files[0];

    onImageSelect(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleLoadedImage = () => {
    if (preview.startsWith('blob:')) URL.revokeObjectURL(preview);
  };

  return (
    <section className={styles.container}>
      <div className={styles.imageG}>
        <input
          className={styles.fileInput}
          type='file'
          accept='.jpg, .jpeg, .png'
          onChange={handlePickImage}
          ref={fileInput}
        />
        <aside className={styles.thumbsContainer}>
          <div className={styles.thumb}>
            {preview.startsWith('blob:') ? (
              <img
                src={preview}
                alt='avatarURL'
                className={styles.imageG}
                onLoad={handleLoadedImage}
              />
            ) : (
              <svg className={`${styles.imageG} ${styles.avatar}`}>
                <use href={preview} />
              </svg>
            )}
          </div>
        </aside>
        <span
          className={theme === 'violet' ? styles.btnViolet : styles.btn}
          role='button'
          tabIndex={0}
          onClick={() => fileInput.current.click()}>
          +
        </span>
      </div>
    </section>
  );
}
