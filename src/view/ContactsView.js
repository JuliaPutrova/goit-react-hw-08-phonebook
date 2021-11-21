import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContact } from '../redux/contacts/contact-operation';

import { ContactTitle } from '../App.styled';

import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

function ContactView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container title="Phonebook">
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList title="Contacts"></ContactList>
    </Container>
  );
}

export default ContactView;
