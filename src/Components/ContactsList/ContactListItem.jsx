import styles from './ContactsList.module.scss';
import sprite from '../sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getContactItemById } from '../../redux/phonebook/phonebook-selectors';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

const ContactListItem = ({ id }) => {
  const { name, number } = useSelector(getContactItemById(id));
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <span className={styles.textContact}>
        {name} : {number}
      </span>
      <Button
        variant="contained"
        color="primary"
        className={styles.btnDelete}
        onClick={handleDeleteContact}
      >
        Delete
      </Button>
    </li>
  );
};

export default ContactListItem;
