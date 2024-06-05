import { Field, Form, Formik } from 'formik';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { fetchContacts } from '../../redux/contacts/operations.js';
import { toast } from 'react-hot-toast';
import { updateContact } from '../../redux/contacts/operations.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import css from './ContactEditor.module.css';

export default function ContactEditor({ contact, onClose }) {
  const [nameText, setNameText] = useState(contact.name);
  const [numberText, setNumberText] = useState(contact.phone);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      updateContact({
        id: contact.id,
        name: nameText,
        number: numberText,
      })
    )
      .unwrap()
      .then(() => {
        onClose();
        toast.success('Success update contact!');
        dispatch(fetchContacts());
      })
      .catch(() => {
        toast.error('Error update contact!');
      });
  };

  return (
    <Formik
      initialValues={{ name: nameText, number: numberText }}
      onSubmit={handleSubmit}
      enableReinitialize={true}>
      <Form className={css.edit}>
        <div className={css.wrapper}>
          <div className={css.name}>
            <IoPersonSharp />
            <Field
              className={css.input}
              type='text'
              name='name'
              onChange={e => setNameText(e.target.value)}
            />
          </div>
          <div className={css.phone}>
            <FaPhoneAlt />
            <Field
              className={css.input}
              type='text'
              name='number'
              onChange={e => setNumberText(e.target.value)}
            />
          </div>
        </div>
        <button className={css.save} type='submit'>
          Save
        </button>
        <button className={css.close} type='button' onClick={() => onClose()}>
          Close
        </button>
      </Form>
    </Formik>
  );
}
