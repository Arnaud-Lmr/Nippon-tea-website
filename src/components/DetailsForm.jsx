/* eslint-disable react/prop-types */
import countries from "country-list";
import styles from "./DetailsForm.module.css";

function DetailsForm({
  contact,
  setContact,
  lastName,
  setLastName,
  firstName,
  setFirstName,
  address,
  setAddress,
  city,
  setCity,
  postalCode,
  setPostalCode,
  country,
  setCountry,
  onGoToNextSection,
}) {
  return (
    <form className={styles.form} onSubmit={onGoToNextSection}>
      <div className={styles.title}>Contact</div>
      <input
        placeholder="Email or mobile phone number"
        className={styles.input}
        pattern=".+@.+..+|[0-9]{9,}"
        required="required"
        value={contact}
        onChange={(e) => setContact(String(e.target.value))}
      ></input>
      <div className={styles.title}>Shipping Address</div>
      <div className={styles.line}>
        <input
          placeholder="Last Name"
          className={styles.input}
          pattern="\w+"
          required="required"
          value={lastName}
          onChange={(e) => setLastName(String(e.target.value))}
        ></input>
        <input
          placeholder="First Name"
          className={styles.input}
          pattern="\w+"
          required="required"
          value={firstName}
          onChange={(e) => setFirstName(String(e.target.value))}
        ></input>
      </div>
      <input
        placeholder="Address and number"
        className={styles.input}
        pattern="[\w\W]+"
        required="required"
        value={address}
        onChange={(e) => setAddress(String(e.target.value))}
      ></input>
      <input
        placeholder="Shipping note (optional)"
        className={styles.input}
      ></input>
      <div className={styles.line}>
        <input
          placeholder="City"
          className={`${styles.input} ${styles.lineThreeInputs}`}
          pattern="\w+"
          required="required"
          value={city}
          onChange={(e) => setCity(String(e.target.value))}
        ></input>
        <input
          placeholder="Postal Code"
          className={`${styles.input} ${styles.lineThreeInputs}`}
          pattern="[\w\W]+"
          required="required"
          value={postalCode}
          onChange={(e) => setPostalCode(String(e.target.value))}
        ></input>
        <select
          placeholder="Country/Region"
          className={`${styles.select} ${styles.lineThreeInputs}`}
          value={country}
          onChange={(e) => setCountry(String(e.target.value))}
        >
          {countries.getNames().map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>
      <button className={styles.greenButton}>Go to shipping</button>
    </form>
  );
}

export default DetailsForm;
