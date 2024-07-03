import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div>
      <p className={css.title}>Register now</p>
      <RegistrationForm />
      <Link to="/login" className={css.link}>
        I already have an account
      </Link>
    </div>
  );
};

export default RegisterPage;
