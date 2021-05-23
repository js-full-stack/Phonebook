import ContactForm from '../../Components/ContactForm';
import Filter from '../../Components/Filter';
import ContactsList from '../../Components/ContactsList';
import styles from './PhonebookPage.module.scss';

const PhonebookPage = () => {
  return (
    <div className={styles.container}>
      <h1 align="center">Phonebook</h1>
      <ContactForm />
      <h2 align="center">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default PhonebookPage;
