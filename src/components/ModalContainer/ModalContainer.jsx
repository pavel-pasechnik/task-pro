import ReactDOM from 'react-dom';
import css from './ModalContainer.module.css';
import { useEffect } from 'react';

const ModalContainer = ({ children, onClose }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className={css.modalBackdrop}
      onClick={handleBackdropClick}
      role='button'
      tabIndex={0}
      onKeyDown={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default ModalContainer;
