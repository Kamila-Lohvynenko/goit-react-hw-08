import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/selectors';
import { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  return (
    <div>
      <p className={css.title}>Register now</p>
      <RegistrationForm />
      <Link to="/login" className={css.link}>
        I already have an account
      </Link>
      {isLoading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default RegisterPage;
