/* eslint-disable react/prop-types */
import styles from "./PurchasedProduct.module.css";

function PurchasedProduct({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.picture} alt={item.name} className={styles.img}></img>
      <div className={styles.quantity}>{item.quantity}</div>
      <div className={styles.rightSection}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.subscribed}>
          {item.subscribed ? `Delivery frequency: every ${item.frequency}` : ""}
        </div>
        <div className={styles.price}>
          {item.subscribed ? (
            <div>
              <div className={styles.oldPrice}>
                {item.price.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
              <div className={styles.price}>
                {item.discountedPrice.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
            </div>
          ) : (
            <div className={styles.price}>
              {item.price.toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PurchasedProduct;
