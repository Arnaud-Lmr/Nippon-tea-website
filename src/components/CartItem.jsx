/* eslint-disable react/prop-types */

import styles from "./CartItem.module.css";

function CartItem({
  item,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  let totalPrice = 0;
  if (item.subscribed === true) {
    totalPrice = item.discountedPrice * item.quantity;
  } else {
    totalPrice = item.price * item.quantity;
  }

  return (
    <tr>
      <td className={styles.article}>
        <img
          className={styles.articlePicture}
          src={item.picture}
          alt={item.name}
        />
        <div className={styles.articleName}>{item.name}</div>
        <div className={styles.articleSubscription}>
          {item.subscribed ? `Delivery frequency: every ${item.frequency}` : ""}
        </div>
        <div className={styles.removeButton} onClick={() => onRemoveItem(item)}>
          Remove
        </div>
      </td>
      {item.subscribed ? (
        <td>
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
        </td>
      ) : (
        <td className={styles.price}>
          {item.price.toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </td>
      )}
      <td>
        <div className={styles.plusMinus}>
          <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
          <div>{item.quantity}</div>
          <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
        </div>
      </td>
      <td className={styles.price}>
        {totalPrice.toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
        })}
      </td>
    </tr>
  );
}

export default CartItem;
