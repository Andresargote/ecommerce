import styles from './ProductItem.module.css';

export const ProductItem = () => {
  return (
    <div className={styles.productItemContainer}>
      <img
        src='https://i.ibb.co/rwf1sD9/benetton1-2.png'
        alt='Camisa estampada de flores manga corta'
        width={165}
        height={200}
      />
      <p>Camisa estampada de flores manga corta</p>
      <p>$30</p>
    </div>
  );
};
