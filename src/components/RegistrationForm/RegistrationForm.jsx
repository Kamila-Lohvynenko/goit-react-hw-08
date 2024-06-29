import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Username
            <Field className={css.input} type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
