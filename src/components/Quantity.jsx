/* eslint-disable react/prop-types */
import styles from "./Quantity.module.css";

function Quantity({ quantity, setQuantity }) {
  function ReduceQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  }

  function IncreaseQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <div className={styles.plusMinus}>
      <div className={styles.box} onClick={() => ReduceQuantity()}>
        -
      </div>
      <div>{quantity}</div>
      <div className={styles.box} onClick={() => IncreaseQuantity()}>
        +
      </div>
    </div>
  );
}

export default Quantity;
