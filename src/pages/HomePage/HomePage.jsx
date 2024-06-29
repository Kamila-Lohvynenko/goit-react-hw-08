import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <h1 className={css.title}>
      Welcome to <span className={css.accent}>Phonebook</span> application! You
      can save your contacts here!{' '}
    </h1>
  );
};

export default HomePage;
