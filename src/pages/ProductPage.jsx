/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./ProductPage.module.css";
import Quantity from "../components/Quantity";
import { NavLink } from "react-router-dom";

function ProductPage({ products, shoppingList, index, onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [subscribed, setSubscribed] = useState(true);
  const [frequency, setFrequency] = useState("1 week");

  const discountedPrice = Number((products[index - 1].price * 0.9).toFixed(2));

  const product = {
    id: products[index - 1].id,
    name: products[index - 1].name,
    price: products[index - 1].price,
    picture: products[index - 1].picture,
    quantity: quantity,
    subscribed: subscribed,
    frequency: frequency,
    discountedPrice: discountedPrice,
  };

  return (
    <div>
      <Header shoppingList={shoppingList} id="top" />
      <div className={styles.body}>
        <div className={styles.productSection}>
          <div className={styles.productSectionLeft}>
            <img
              src={`product${index}-picture.jpg`}
              alt="product picture"
              className={styles.productImg}
            ></img>
            <div className={styles.description}>
              {products[index - 1].comment}
            </div>
            <div className={styles.freeShipping}>🚚 FREE SHIPPING</div>
          </div>
          <div className={styles.productSectionRight}>
            <div className={styles.productName}>{products[index - 1].name}</div>
            {subscribed ? (
              <div>
                <div className={styles.productOldPrice}>
                  {products[index - 1].price.toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </div>
                <div className={styles.productPrice}>
                  {discountedPrice.toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </div>
              </div>
            ) : (
              <div className={styles.productPrice}>
                {products[index - 1].price.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
            )}

            <div className={styles.optionOneTime}>
              <button
                onClick={() => setSubscribed(false)}
                className={
                  !subscribed
                    ? `${styles.optionButton} ${styles.active}`
                    : `${styles.optionButton}`
                }
              >
                &nbsp;
              </button>
              <div className={styles.optionTitle}>One time purchase</div>
            </div>
            <div className={styles.quantity}>
              <div className={styles.optionTitle}>Quantity</div>
              <Quantity quantity={quantity} setQuantity={setQuantity} />
            </div>
            <div className={styles.optionSubscribe}>
              <div className={styles.optionSubscribeFirstLine}>
                <button
                  onClick={() => setSubscribed(true)}
                  className={
                    subscribed
                      ? `${styles.optionButton} ${styles.active}`
                      : `${styles.optionButton}`
                  }
                >
                  &nbsp;
                </button>
                <div className={styles.optionTitle}>
                  Subscribe and deliver every{" "}
                </div>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className={styles.select}
                >
                  <option value={"1 week"}>1 week</option>
                  <option value={"2 weeks"}>2 weeks</option>
                  <option value={"3 weeks"}>3 weeks</option>
                  <option value={"4 weeks"}>4 weeks</option>
                </select>
              </div>
              <div className={styles.optionSubscribeInfo}>
                Subscribe now and get the 10% discount on every recurent order.
                The discount will be applied at checkout
              </div>
            </div>
            <NavLink
              to="/#discover"
              style={{ textDecoration: "none", color: "white" }}
              className={styles.buttonAddToCart}
            >
              <button
                className={styles.buttonAddToCart}
                onClick={() => onAddItem(product)}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                🛒 + Add to cart
              </button>
            </NavLink>

            <div className={styles.properties}>
              <strong>{products[index - 1].conservationAsset}:</strong>{" "}
              {products[index - 1].conservation} <br />
              <strong>{products[index - 1].otherAsset}:</strong>{" "}
              {products[index - 1].otherAssetProperty} <br />
              <strong>Dimension: </strong>
              {products[index - 1].dimensions}
              <strong> Weight:</strong> {products[index - 1].weight}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
