import sprite from '../../assets/sprite.svg';
import styles from './FiltersModal.module.css';
import { useState } from 'react';

const FiltersModal = ({ onClose }) => {
  const [selectedLevels, setSelectedLevels] = useState({
    withoutPriority: false,
    low: false,
    medium: false,
    high: false,
  });

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;

    setSelectedLevels(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleShowAll = () => {
    setSelectedLevels({
      withoutPriority: true,
      low: true,
      medium: true,
      high: true,
    });
  };

  return (
    <div className={styles.filtersModal}>
      <div className={styles.containerModal}>
        <div className={styles.closeBtn}>
          <button className={styles.btn} onClick={onClose}>
            <svg className={styles.btnIcon}>
              <use href={`${sprite}#icon-x-close`} />
            </svg>
          </button>
        </div>
        <p className={styles.title}>Filters</p>
        <div className={styles.containerContent}>
          <hr className={styles.line} />
          <div className={styles.containerLabel}>
            <p className={styles.titleLabel}>Label color</p>
            <button className={styles.btnAll} onClick={handleShowAll}>
              Show all
            </button>
          </div>
          <div>
            <div className={styles.containerLevel}>
              <label className={styles.customCheckbox} htmlFor='withoutPriority'>
                <input
                  className={styles.checkboxInput}
                  type='checkbox'
                  id='withoutPriority'
                  name='withoutPriority'
                  checked={selectedLevels.withoutPriority}
                  onChange={handleCheckboxChange}
                />
                <div className={`${styles.checkboxCustom} ${styles.gray}`}>
                  <span className={`${styles.checkboxMiddle} ${styles.gray}`}></span>
                </div>
                Without priority
              </label>
            </div>
            <div className={styles.containerLevel}>
              <label className={styles.customCheckbox} htmlFor='low'>
                <input
                  className={styles.checkboxInput}
                  type='checkbox'
                  id='low'
                  name='low'
                  checked={selectedLevels.low}
                  onChange={handleCheckboxChange}
                />
                <div className={`${styles.checkboxCustom} ${styles.blue}`}>
                  <span className={`${styles.checkboxMiddle} ${styles.blue}`}></span>
                </div>
                Low
              </label>
            </div>
            <div className={styles.containerLevel}>
              <label className={styles.customCheckbox} htmlFor='medium'>
                <input
                  className={styles.checkboxInput}
                  type='checkbox'
                  id='medium'
                  name='medium'
                  checked={selectedLevels.medium}
                  onChange={handleCheckboxChange}
                />
                <div className={`${styles.checkboxCustom} ${styles.pink}`}>
                  <span className={`${styles.checkboxMiddle} ${styles.pink}`}></span>
                </div>
                Medium
              </label>
            </div>
            <div className={styles.containerLevel}>
              <label className={styles.customCheckbox} htmlFor='high'>
                <input
                  className={styles.checkboxInput}
                  type='checkbox'
                  id='high'
                  name='high'
                  checked={selectedLevels.high}
                  onChange={handleCheckboxChange}
                />
                <div className={`${styles.checkboxCustom} ${styles.green}`}>
                  <span className={`${styles.checkboxMiddle} ${styles.green}`}></span>
                </div>
                High
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;
