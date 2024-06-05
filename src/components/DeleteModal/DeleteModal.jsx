import Modal from 'react-modal';
import { deleteContact } from '../../redux/contacts/operations.js';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './DeleteModal.module.css';

Modal.setAppElement(document.getElementById('root'));

export default function DeleteModal({ isOpen = false, onClose, contactName, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerClick = async () => {
    await dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Success delete contact!');
      })
      .catch(() => {
        toast.error('Error delete contact!');
      });
    navigate('/contacts');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modal}
      overlayClassName={`${css.overlay} ${isOpen ? css.open : ''}`}>
      <div className={css.wrapper}>
        <p className={css.p}>Are you sure you wont to delete contact {contactName} ?</p>
        <ul className={css.list}>
          <li>
            <button className={css.button} type='button' onClick={handlerClick}>
              <span className={css.yes}>Yes</span>
            </button>
          </li>
          <li>
            <button className={css.button} type='button' onClick={onClose}>
              <span className={css.no}>No</span>
            </button>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
