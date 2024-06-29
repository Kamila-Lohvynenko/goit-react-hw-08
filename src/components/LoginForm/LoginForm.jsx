import { Form, Formik, Field } from 'formik';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
