import { ShoppingBasket } from '../Icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Logo</h1>

        <div className={styles.headerBasketButton}>
          <button>
            <ShoppingBasket />
          </button>
          <div className={styles.headerBasketBuble}>
            <span>3</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
