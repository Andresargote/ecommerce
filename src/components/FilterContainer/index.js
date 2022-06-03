import { Filter } from '../Filter';
import styles from './FilterContainer.module.css';

const FilterContainer = ({ categories }) => {
  return (
    <div className={styles.filterContainer}>
      {categories.map((category) => (
        <Filter key={category.id} category={category.name} />
      ))}
    </div>
  );
};

export { FilterContainer };
