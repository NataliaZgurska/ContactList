import { FaPhone } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactContainer}>
      <div className={css.nameNumberWrap}>
        <p className={css.contactName}>{name}</p>

        <p className={css.contactNumber}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.deleteBtn}>
        <MdDeleteForever size={30} className={css.deleteBtnImg} />
      </button>
    </div>
  );
};

export default Contact;
