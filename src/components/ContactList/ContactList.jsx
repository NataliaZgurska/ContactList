import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilter } from '../../redux/filters/selectors';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contacts/selectors';
import { useMemo } from 'react';

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);

  const sortedContacts = useMemo(() => {
    if (Array.isArray(allContacts)) {
      const filteredContacts = allContacts.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
      return filteredContacts
        .slice()
        .sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
    } else {
      return [];
    }
  }, [allContacts, filterName]);

  return (
    <div>
      {allContacts.length > 0 ? (
        <ul className={css.contactList}>
          {sortedContacts.map(contact => (
            <li className={css.contactItem} key={contact._id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>save your first contact</p>
      )}
    </div>
  );
};
export default ContactList;
