import sprite from '../sprite.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getCurrentContacts } from '../../redux/phonebook/phonebook-selectors';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const currentContactsName = useSelector(getCurrentContacts).map(
    contact => contact.name,
  );

  const handleSubmit = e => {
    e.preventDefault();

    currentContactsName.includes(name.trim())
      ? toast.info(`${name.trim()} is alredy in contacts`)
      : dispatch(addContact(name.trim(), number));

    setName('');
    setNumber('');
  };

  const handleInputName = e => {
    setName(e.target.value);
  };

  const handleInputNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ToastContainer autoClose={3000} transition={Zoom} />
      <label className={styles.label}>
        <span>Name</span>
        <input
          className={styles.inputName}
          onChange={handleInputName}
          value={name}
          type="text"
          name="name"
          pattern="^\s*[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*\s*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.inputNumber}
          onChange={handleInputNumber}
          value={number}
          type="tel"
          name="number"
          pattern="\s*(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})\s*"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Add contact
        <svg className={styles.iconAdd}>
          <use href={`${sprite}#icon-add`}></use>
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
