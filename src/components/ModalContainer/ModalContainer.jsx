import ReactDOM from 'react-dom';
import css from './ModalContainer.module.css';

const ModalContainer = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={css.modalBackdrop}>
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default ModalContainer;
