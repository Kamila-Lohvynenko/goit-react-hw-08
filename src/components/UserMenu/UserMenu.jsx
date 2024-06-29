import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.div}>
      <p className={css.text}>Welcome, username</p>
      <button className={css.logOut}>Log out</button>
    </div>
  );
};

export default UserMenu;
