import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
// selectors
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsContacts,
  selectIsContactsShown,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import { Box } from 'components/Box';
import { ContactForm } from 'components/contacts/ContactForm/ContactForm';
import { Filter } from 'components/contacts/Filter/Filter';
import { ContactList } from 'components/contacts/ContactList/ContactList';
import { Notification } from 'components/contacts/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isContacts = useSelector(selectIsContacts);
  const isContactsShown = useSelector(selectIsContactsShown);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);
  return (
    <Box p={5} as="main">
      <Box
        width="430px"
        p={4}
        mx="auto"
        bg="white"
        borderRadius="md"
        boxShadow="primary"
        color="text"
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Box mt={4}>
          {errorMessage && <p>{errorMessage}</p>}
          {isContacts && <Filter />}
          {isLoading && <Loader />}
          {isContactsShown && <ContactList />}
          {!isContacts && !isLoading && !Error && <Notification />}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsPage;
