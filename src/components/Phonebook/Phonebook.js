import { useSelector } from 'react-redux';

import styles from './Phonebook.module.scss';
import Contacts from './Contacts';
import AddContact from './AddContact';
import Filter from './Filter';

function Phonebook() {
  const contacts = useSelector(state => state.contacts.items);

  const isShowFilter = contacts.length > 1;

  return (
    <div className={styles.componenet}>
      <h1 className={styles.title}>Phonebook</h1>
      <AddContact />
      <h2 className={styles.title}>Contacts</h2>
      {isShowFilter && <Filter />}
      <Contacts />
    </div>
  );
}

export default Phonebook;
