import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={css.div}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.logOut} onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
