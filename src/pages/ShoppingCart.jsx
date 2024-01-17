/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./ShoppingCart.module.css";

function ShoppingCart({
  shoppingList,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  let totalAmount = shoppingList.reduce(
    (prev, cur) =>
      prev + (cur.subscribed ? cur.discountedPrice : cur.price) * cur.quantity,
    0
  );
  return (
    <div>
      <Header shoppingList={shoppingList} />
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.title}>Your cart items</div>
          <NavLink to="/#discover" className={styles.shoppingButton}>
            <div>Back to shopping</div>
          </NavLink>
          {shoppingList.length !== 0 ? (
            <table className={styles.shoppingTable}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {shoppingList.map((item) => (
                  <CartItem
                    item={item}
                    key={item.id}
                    onRemoveItem={onRemoveItem}
                    onIncreaseQuantity={onIncreaseQuantity}
                    onDecreaseQuantity={onDecreaseQuantity}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.amount} style={{ textAlign: "center" }}>
              Your shopping list is empty. Click on the above button to purchase
              our products!
            </div>
          )}
          <div className={styles.total}>
            <div className={styles.amountBox}>
              <div className={styles.amount}>Sub-total</div>
              <div className={styles.amount}>
                {totalAmount.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
              {totalAmount > 0 ? (
                <NavLink to="/purchase">
                  <button className={styles.checkoutButton}>Check-out</button>
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <div className={styles.taxInfo}>
              Tax and shipping cost will be calculated later
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
