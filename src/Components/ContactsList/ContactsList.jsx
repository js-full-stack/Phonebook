import styles from './ContactsList.module.scss';
import ContactListItem from './ContactListItem';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import { authSelectors } from '../../redux/auth/';

const ContactsList = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(getVisibleContacts);
  return (
    isAuthenticated &&
    contacts.length > 0 && (
      <>
        <ul className={styles.contacts}>
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </ul>
      </>
    )
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(ContactsList);
