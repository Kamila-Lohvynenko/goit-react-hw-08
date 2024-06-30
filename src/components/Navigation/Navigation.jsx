import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const linkClassName = ({ isActive }) =>
    clsx(css.link, isActive && css.isActive);
  return (
    <nav className={css.nav}>
      <NavLink className={linkClassName} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={linkClassName} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
