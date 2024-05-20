import { FaPhone } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <div className={css.contactContainer}>
        <div className={css.nameNumberWrap}>
          <p className={css.contactName}>{name}</p>

          <p className={css.contactNumber}>
            <FaPhone />
            {number}
          </p>
        </div>
        <button onClick={onOpenModal} className={css.deleteBtn}>
          <MdDeleteForever size={30} className={css.deleteBtnImg} />
        </button>
      </div>
      <ContactModal
        onCloseModal={onCloseModal}
        isModalOpen={isModalOpen}
        contact={contact}
      />
    </>
  );
};

export default Contact;
