import ContactEditor from '../ContactEditor/ContactEditor.jsx';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { useState } from 'react';

import css from './Contact.module.css';

export default function Contact({ name, phone, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isEditing ? (
        <ContactEditor contact={{ name, phone, id }} onClose={() => setIsEditing(false)} />
      ) : (
        <div className={css.card}>
          <div className={css.wrapper}>
            <div className={css.name}>
              <IoPersonSharp />
              <p>{name}</p>
            </div>
            <div className={css.phone}>
              <FaPhoneAlt />
              <p>{phone}</p>
            </div>
          </div>
          <button className={css.edit} type='button' onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button
            className={css.delete}
            type='button'
            onClick={() => {
              setIsOpen(true);
            }}>
            Delete
          </button>
        </div>
      )}
      <DeleteModal isOpen={isOpen} onClose={closeModal} contactName={name} id={id} />
    </>
  );
}
