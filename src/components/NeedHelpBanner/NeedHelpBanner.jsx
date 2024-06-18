import React, { useState } from 'react';
import css from './NeedHelpBanner.module.css';
import cactus from '../../assets/jpg/cactus.jpg';
import cactus2x from '../../assets/jpg/cactus@2x.jpg';
import cactus3x from '../../assets/jpg/cactus@3x.jpg';
import sprite from '../../assets/sprite.svg';
import { PopUpNeedHelp } from '../PopUpNeedHelp/PopUpNeedHelp.jsx';
import Modal from '../Modal/Modal.jsx';

const NeedHelpBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.needHelpContainer}>
      <img
        className={css.needHelpImg}
        src={cactus}
        srcSet={`${cactus2x} 2x, ${cactus3x} 3x`}
        alt='Cactus'
      />
      <p className={css.needHelpText}>
        If you need help with <span className={css.needHelpLink}>TaskPro</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <div
        className={css.needHelpLinkInfo}
        role='button'
        tabIndex='0'
        onClick={openModal}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            openModal();
          }
        }}>
        <svg className={css.iconLogoContainer}>
          <use href={`${sprite}#icon-help-circle`}></use>
        </svg>
        <p>Need help?</p>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <PopUpNeedHelp onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default NeedHelpBanner;
