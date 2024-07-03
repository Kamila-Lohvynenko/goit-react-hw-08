import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const ContactForm = ({ contact, setContact }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short, enter from 3 letters')
      .max(50, 'Too long, enter uo to 50 letters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short, enter from 3 characters')
      .max(50, 'Too long, enter uo to 50 characters')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={contact}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        if (!contact.name) {
          dispatch(
            addContact({
              name,
              number,
            })
          )
            .unwrap()
            .then(() => toast.success('You have added a contact successfully!'))
            .catch(() => toast.error('The contact has not been added'));
        } else {
          dispatch(editContact({ id: contact.id, name, number }))
            .unwrap()
            .then(() => toast.success('You have updated the contact!'))
            .catch(() => toast.error('The contact has not been updated'));
          setContact({ name: '', number: '' });
        }

        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" id={nameFieldId} className={css.input} />
        <ErrorMessage name="name" component="p" className={css.message} />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field name="number" id={phoneFieldId} className={css.input} />
        <ErrorMessage name="number" component="p" className={css.message} />
        <button type="submit" className={css.button}>
          {contact.name ? 'Save' : 'Add'}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
