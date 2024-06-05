import Contact from '../Contact/Contact.jsx';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <div className={css.list}>
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className={css.item}>
                <Contact name={contact.name} phone={contact.number} id={contact.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
