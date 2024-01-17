/* eslint-disable react/prop-types */
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.footerBox}>
        <div className={styles.credits}>
          <img src="logo.png" alt="footer-logo"></img>
          <div className={styles.info}>
            Enjoy the benefits of natural and healthy Japanese tea for your
            well-being
          </div>
        </div>
        <div className={styles.info}>
          <div>Contact us:</div> <div>The nippon tea</div>
          <div>1 chemin d&apos;ici 44000 Nantes, France</div>
          <div>+33 2 34 56 78 90</div> <div>contact@nippontea.com</div>
          <div>
            &copy; The nippon tea {new Date().getFullYear()} All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
