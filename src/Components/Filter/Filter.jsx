import styles from './Filter.module.scss';
import sprite from '../sprite.svg';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/phonebook/phonebook-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(filterContacts(e.target.value));

  return (
    <>
      <span className={styles.text}>Find contacts by name</span>

      <label className={styles.label}>
        <div className={styles.wrapper}>
          <svg className={styles.iconSearch}>
            <use href={`${sprite}#icon-search`}></use>
          </svg>
          <input className={styles.input} onChange={handleChangeFilter} type="text" />
        </div>
      </label>
    </>
  );
};

export default Filter;
