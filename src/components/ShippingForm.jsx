/* eslint-disable react/prop-types */
import styles from "./ShippingForm.module.css";
function ShippingForm({
  contact,
  address,
  postalCode,
  city,
  country,
  setStep,
  onGoToNextSection,
}) {
  return (
    <form className={styles.form} onSubmit={onGoToNextSection}>
      <div className={styles.line}>
        <div className={styles.name}>Contact</div>
        <div className={styles.content}>{contact}</div>
        <div className={styles.button} onClick={() => setStep(1)}>
          Edit
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.name}>Ship to</div>
        <div
          className={styles.content}
        >{`${address} ${postalCode} ${city} ${country}`}</div>
        <div className={styles.button} onClick={() => setStep(1)}>
          Edit
        </div>
      </div>
      <div className={styles.title}>Shipping method</div>
      <div className={styles.line}>
        <div className={styles.optionButton}>&nbsp;</div>
        <div className={styles.content}>Standard shipping</div>
        <div className={styles.content}>Free</div>
      </div>
      <button className={styles.greenButton}>Go to payment</button>
    </form>
  );
}

export default ShippingForm;
