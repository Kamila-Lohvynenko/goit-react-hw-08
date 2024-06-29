import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const linkClassName = ({ isActive }) =>
    clsx(css.link, isActive && css.isActive);
  return (
    <nav className={css.nav}>
      <NavLink className={linkClassName} to="/">
        Home
      </NavLink>
      <NavLink className={linkClassName} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
