import React from 'react';
import { useEffect } from 'react';
import {
  ContactItem,
  BtnDelete,
  SpanIcon,
  ContactInfo,
} from './ContactList.styled';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import {
  isLoading,
  onFilteredContacts,
} from '../../redux/contacts/contact-selectors';
import {
  fetchContact,
  deleteContact,
} from '../../redux/contacts/contact-operation';
import { AiOutlineUser } from 'react-icons/ai';

function ContactList() {
  const contacts = useSelector(onFilteredContacts);
  const loader = useSelector(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    !loader &&
    contacts && (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={shortid.generate()}>
            <ContactInfo>
              <SpanIcon style={{ fontWeigth: 'bold' }}>
                <AiOutlineUser size={12} />
              </SpanIcon>
              {name}: {number}
            </ContactInfo>
            <BtnDelete
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </BtnDelete>
          </ContactItem>
        ))}
      </ul>
    )
  );
}

export default ContactList;
