import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <h1 className={css.title}>
        Welcome to <span className={css.accent}>Phonebook</span> application!
        You can save your contacts here!{' '}
      </h1>
      <Link to="/login" className={css.link}>
        {isLoggedIn ? 'To contacts' : 'Get started'}
      </Link>
    </>
  );
};

export default HomePage;
