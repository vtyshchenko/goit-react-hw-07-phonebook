import { useSelector } from 'react-redux';

import ContactsItem from './ContactsItem';
import styles from './Contacts.module.scss';

function Contacts() {
  let contactsList = useSelector(state => state.contacts.items);
  const filterText = useSelector(state => state.contacts.filterText);

  if (filterText) {
    contactsList = contactsList.filter(contactItem =>
      contactItem.name.toLowerCase().includes(filterText.toLowerCase()),
    );
  }

  return contactsList.length > 0 ? (
    <ul>
      {contactsList.map(contactsItem => (
        <li key={contactsItem.id} className={styles.item}>
          <ContactsItem item={contactsItem} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No contacts here</p>
  );
}

export default Contacts;
