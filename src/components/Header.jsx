/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header({
  handleClickDiscover,
  handleClickAbout,
  handleClickContact,
  shoppingList,
}) {
  return (
    <div className={styles.header} id="top">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className={styles.logo}>
          <img src="logo.png" alt="logo" className={styles.img}></img>
          <div className={styles.logoName}>Nippon tea</div>
        </div>
      </NavLink>

      <div className={styles.thumbnails}>
        <NavLink to="/#discover" style={{ textDecoration: "none" }}>
          <div className={styles.link} onClick={handleClickDiscover}>
            Discover
          </div>
        </NavLink>
        <NavLink to="/#about" style={{ textDecoration: "none" }}>
          <div className={styles.link} onClick={handleClickAbout}>
            About
          </div>
        </NavLink>
        <NavLink to="#contact" style={{ textDecoration: "none" }}>
          <div className={styles.link} onClick={handleClickContact}>
            Contact us
          </div>
        </NavLink>
      </div>
      <div className={styles.user}>
        <NavLink to="/shoppingcart">
          <img src="cart.png" alt="cart" className={styles.img}></img>
        </NavLink>
        {shoppingList.length > 0 ? (
          <div className={styles.shoppingCartQuantity}>
            {shoppingList.length}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
