/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Purchase.module.css";
import PurchasedProduct from "../components/purchasedProduct";
import DetailsForm from "../components/DetailsForm";
import { useState } from "react";
import ShippingForm from "../components/ShippingForm";
import Payment from "../components/Payment";

const progress = [
  { id: "1", name: "Cart" },
  { id: "2", name: "Details" },
  { id: "3", name: "Shipping" },
  { id: "4", name: "Payment" },
];

function Purchase({ shoppingList, setShoppingList }) {
  const [contact, setContact] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [step, setStep] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [messageCoupon, setMessageCoupon] = useState("");

  let totalAmount = shoppingList.reduce(
    (prev, cur) =>
      prev + (cur.subscribed ? cur.discountedPrice : cur.price) * cur.quantity,
    0
  );

  function goToNextSection(e) {
    e.preventDefault();
    step < 4 && setStep(step + 1);
  }

  function goToPreviousSection() {
    step > 1 && setStep(step - 1);
  }

  function testCoupon() {
    if (coupon === "DBYIZUEFYU") {
      setMessageCoupon("Reduction is applied !");
    } else {
      setMessageCoupon("The coupon is invalid !");
    }
    setCoupon("");
  }

  return (
    <div className={styles.page}>
      <div className={styles.leftSection}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className={styles.logo}>
            <img src="logo.png" alt="logo" className={styles.img}></img>
            <div className={styles.logoName}>Nippon tea</div>
          </div>
        </NavLink>
        <div className={styles.progress}>
          {progress.map((item) => (
            <div
              className={`${styles.progressItem} ${
                Number(item.id) === step + 1 && styles.active
              } ${Number(item.id) < step + 1 && styles.previous}`}
              key={item.id}
            >
              {item.name}{" "}
              {item.id < progress.length ? <>&nbsp;&nbsp;&#62;</> : ""}
            </div>
          ))}
        </div>
        {step === 1 && (
          <DetailsForm
            contact={contact}
            setContact={setContact}
            lastName={lastName}
            setLastName={setLastName}
            firstName={firstName}
            setFirstName={setFirstName}
            address={address}
            setAddress={setAddress}
            city={city}
            setCity={setCity}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
            country={country}
            setCountry={setCountry}
            onGoToNextSection={goToNextSection}
          />
        )}
        {step === 2 && (
          <ShippingForm
            contact={contact}
            address={address}
            city={city}
            postalCode={postalCode}
            country={country}
            setStep={setStep}
            onGoToNextSection={goToNextSection}
          />
        )}
        {step === 3 && <Payment />}
        <div className={styles.navigation}>
          {step === 1 && (
            <NavLink to="/shoppingcart" style={{ textDecoration: "none" }}>
              <div
                className={styles.backButton}
                onClick={() => goToPreviousSection()}
              >
                Back to cart
              </div>
            </NavLink>
          )}
          {step === 2 && (
            <div
              className={styles.backButton}
              onClick={() => goToPreviousSection()}
            >
              Back to {step === 2 && progress[1].name}
            </div>
          )}
          {step === 3 && (
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div
                className={styles.backButton}
                onClick={() => setShoppingList([])}
              >
                Back to home
              </div>
            </NavLink>
          )}
        </div>
      </div>
      <div className={styles.rightSection}>
        {step < 3 && (
          <div className={styles.recap}>
            {shoppingList.map((item) => (
              <PurchasedProduct key={item.id} item={item} />
            ))}
          </div>
        )}

        {step < 3 && (
          <div className={styles.coupon}>
            <input
              className={styles.couponInput}
              placeholder="Coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            ></input>
            <button className={styles.greenButton} onClick={() => testCoupon()}>
              Add code
            </button>
            <div className={styles.text}>{messageCoupon}</div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.purchaseOk}>
            <div className={styles.purchaseMessage}>
              Thank you for your purchase 😁
            </div>
            <img
              className={styles.imgCheck}
              src="../public/checkCircle.png"
              alt="ok logo"
            ></img>
          </div>
        )}

        <div className={styles.subtotalContainer}>
          <div className={styles.subtotal}>
            <div className={styles.subtotalTitle}>Subtotal</div>
            <div className={styles.subtotalValue}>
              {" "}
              {totalAmount.toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
              })}
            </div>
          </div>
          <div className={styles.subtotal}>
            <div className={styles.subtotalTitle}>Shipping</div>
            <div className={styles.subtotalTitle}>Free Shipping</div>
          </div>
        </div>
        <div className={styles.totalContainer}>
          <div className={styles.total}>Total</div>
          <div className={styles.totalValue}>
            {" "}
            {totalAmount.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
