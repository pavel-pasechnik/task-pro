import { selectError, selectLoading } from '../../redux/contacts/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import { Suspense } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import { useEffect } from 'react';

import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p className={css.error}>Something went wrong. Please reload the page!</p>}
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? <p>Loading...</p> : <ContactList />}
      </Suspense>
    </div>
  );
}
