import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={css.search}>
        <p className={css.text}>You can find contact by name</p>
        <input
          type="text"
          className={css.input}
          value={filter}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
