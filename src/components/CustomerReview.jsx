/* eslint-disable react/prop-types */
import styles from "./CustomerReview.module.css";
import StarRating from "./StarRating.jsx";

function CustomerReview({ input }) {
  return (
    <div className={styles.customerReview}>
      <img
        src={input.picture}
        alt={input.name}
        className={styles.clientPicture}
      ></img>
      <StarRating rating={input.rating} />
      <p className={styles.clientComment}>&quot;{input.comment}&quot;</p>
      <p className={styles.clientName}>{input.name}</p>
    </div>
  );
}

export default CustomerReview;
