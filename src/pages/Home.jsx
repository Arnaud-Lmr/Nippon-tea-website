/* eslint-disable react/prop-types */

import CustomerReview from "../components/CustomerReview";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const clientsReviews = [
  {
    id: 1,
    name: "Jessica",
    comment: "Amazing products, best choices!",
    rating: 5,
    picture: "client1.jpg",
  },
  {
    id: 2,
    name: "Frank",
    comment: "Good quality with fair price!",
    rating: 4,
    picture: "client2.jpg",
  },
  {
    id: 3,
    name: "Jeanne",
    comment: "The taste is yummy",
    rating: 4,
    picture: "client3.jpg",
  },
];

function Home({ products, shoppingList }) {
  return (
    <div className={styles.page}>
      <Header shoppingList={shoppingList} />
      <div className={styles.titleSection}>
        <div className={styles.title}>
          <div className={styles.sectionTitle}>🍃</div>
          <div className={styles.sectionTitle}>The nippon tea</div>
          <div className={styles.sectionSubtitle}>
            Your natural and healthy Japanese tea to help you in your search for
            well-being
          </div>
          <NavLink to="#discover">
            <button className={styles.discoverButton}>
              Discover our collection
            </button>
          </NavLink>
        </div>
      </div>

      <div className={styles.productsSection} id="discover">
        <div className={styles.sectionTitle}>Products</div>
        <div className={styles.sectionSubtitle}>
          Order them for you or for your beloved ones
        </div>
        <div className={styles.productList}>
          {products.map((input) => (
            <NavLink
              to={`product${input.id}#top`}
              key={input.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Product input={input} key={input.id} />
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles.descriptionSection} id="about">
        <div className={styles.description}>
          <div className={styles.descriptionLeft}>
            <div className={styles.descriptionSectionTitle}>
              Ethical and ecological <br /> Japanese tea
            </div>
            <div className={styles.descriptionSumUp}>
              Harvest and dried for your well-being
            </div>
            <ul className={styles.benefits}>
              <li>
                <b>Health:</b> Prevent diseases, boost immunity, and protect the
                skin from aging
              </li>
              <li>
                <b>Relaxation:</b> Promote relaxation, mental clarity, and
                concentration
              </li>
              <li>
                <b>Ecologic:</b> Harvest by han, in fiels managed ecologically
                and with respect for the environnement
              </li>
              <li>
                <b>Ethic:</b> Fair trade with fair remuneration for producers
              </li>
            </ul>
          </div>
          <img
            src="description-section-picture.jpg"
            alt="description-picture"
            className={styles.descriptionPicture}
          ></img>
        </div>
      </div>
      <div className={styles.testimonialsSection}>
        <div className={styles.sectionTitle}>Testimonials</div>
        <div className={styles.sectionSubtitle}>
          Some quotes from our happy customers
        </div>
        <div className={styles.customerReviewList}>
          {clientsReviews.map((input) => (
            <CustomerReview input={input} key={input.id} />
          ))}
        </div>
      </div>
      <div className={styles.popularsSection}>
        <div className={styles.sectionTitle}>Popular</div>
        <div className={styles.sectionSubtitle}>
          Our top selling products that you may like
        </div>
        <div className={styles.productList}>
          <NavLink
            to="product1#top"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Product input={products[0]} />
          </NavLink>
          <NavLink
            to="product2#top"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Product input={products[1]} />
          </NavLink>
          <NavLink
            to="product3#top"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Product input={products[2]} />
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
