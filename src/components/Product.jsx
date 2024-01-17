/* eslint-disable react/prop-types */

import styles from "./Product.module.css";

function Product({ input }) {
  return (
    <div className={styles.product}>
      <img src={input.picture} alt={input.name} className={styles.img}></img>
      <div>
        <p className={styles.name}>{input.name}</p>
        <p className={styles.price}>
          {input.price.toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
      </div>
    </div>
  );
}

export default Product;
