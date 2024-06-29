import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div>
      <p className={css.title}>Please enter your data</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
