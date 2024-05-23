import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
} from '../../utils/constants';

import { addContact } from '../../redux/contacts/operations';
import { selectFilter } from '../../redux/filters/selectors';

import css from './ContactForm.module.css';

const FORM_INITIAL_VALUES = {
  name: '',
  number: '',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_NAME_VALIDATION, 'Too Short!')
    .max(MAX_CHAR_NAME_VALIDATION, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    if (filter) {
      dispatch(clearFilter());
    }
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formAddTitle}>New contact</h3>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formAdd}>
          <label className={css.nameLabel}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.formInput}
            />

            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="name"
            />
          </label>
          <div className={css.numberBtnWrap}>
            <label className={css.numberLabel}>
              <Field
                type="number"
                name="number"
                placeholder="Number"
                className={css.formInput}
              />

              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="number"
              />
            </label>

            <button type="submit" className={css.addNewbtn}>
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
