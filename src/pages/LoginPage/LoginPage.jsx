import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div>
      <p className={css.title}>Please enter your data</p>
      <LoginForm />
      <Link to="/register" className={css.link}>
        I do not have an account
      </Link>
    </div>
  );
};

export default LoginPage;
