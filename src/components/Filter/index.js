import styles from './Filter.module.css';

export const Filter = ({ category }) => {
  return <button className={styles.filter}>{category}</button>;
};
