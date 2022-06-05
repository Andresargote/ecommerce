import { Filter } from '../Filter';
import styles from './FilterContainer.module.css';

const FilterContainer = ({ categories }) => {
  return (
    <section className={styles.filterContainer}>
      {categories.map((category) => (
        <Filter key={category.id} category={category.name} />
      ))}
    </section>
  );
};

export { FilterContainer };
