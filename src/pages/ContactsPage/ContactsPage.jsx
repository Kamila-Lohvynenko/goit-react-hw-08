import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { Toaster } from 'react-hot-toast';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';

const ContactsPage = () => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm contact={contact} setContact={setContact} />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList setContact={setContact} />
      <Toaster position="top-right" />
    </div>
  );
};

export default ContactsPage;
