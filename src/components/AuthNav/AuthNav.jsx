import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Link className={css.link} to="/login">
          Log in
        </Link>
      </li>
      <li className={css.item}>
        <Link className={css.link} to="/register">
          Register
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
