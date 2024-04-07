import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { AlertNotification } from "../../Components/AlertNotification/index";
import { Review } from "../../Components/Review";
import { useFetch } from "../../hooks/useFetch";
import { useCartStore } from "../../store/cartStore";
import styles from "./Product.module.css";
import { FaStar } from "react-icons/fa";
import Loader from "../../Components/Loader/index.jsx";

export const Product = () => {
  let params = useParams();
  const { data, isLoading, isError } = useFetch(
    `https://v2.api.noroff.dev/online-shop/${params.id}`
  );
  const addProduct = useCartStore((state) => state.addProduct);

  const [showLabel, setShowLabel] = useState(false);

  const handleUnmount = () => {
    setShowLabel(false);
  };

  const isDiscounted = data.price > data.discountedPrice;
  const priceClassNames = isDiscounted
    ? `${styles.price} ${styles.strikethrough}`
    : styles.price;
  const discountClassNames = isDiscounted
    ? `${styles.discountedPrice}`
    : styles.discountedPrice;
  const percentage = isDiscounted
    ? `${(((data.price - data.discountedPrice) / data.price) * 100).toFixed(
        0
      )}%`
    : null;

  const Review = ({ data, showRating = true }) => {
    return (
      <div>
        {showRating && (
          <p>
            <FaStar /> {data.rating}
          </p>
        )}
        <p>{data.username}</p>
        <p>{data.description}</p>
      </div>
    );
  };

  let content;
  if (isError) {
    content = <div className="error">There was an error loading the data.</div>;
  } else if (isLoading) {
    content = <Loader />;
  } else {
    content = (
      <>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className={styles.priceContainer}>
          {isDiscounted ? (
            <>
              <div className={`${styles.price} ${styles.strikethrough}`}>
                NOK {data.price}
              </div>
              <div className={styles.discountedPrice}>
                NOK {data.discountedPrice}
              </div>
              <div className={styles.discountBadge}>{percentage} OFF</div>
            </>
          ) : (
            <div className={styles.price}>NOK {data.price}</div>
          )}
        </div>

        <button
          onClick={() => {
            setShowLabel(true);
            addProduct(data);
          }}
          className="cardButton"
        >
          Add to cart
        </button>
        <div className={styles.ratingContainer}>
          <h3 className={styles.reviewsTitle}>Reviews</h3>
          {data.reviews && data.reviews.length > 0 ? (
            <div className={styles.reviewsContainer}>
              {data.reviews.map((review) => (
                <Review key={review.id} data={review} showRating={true} />
              ))}
            </div>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </>
    );
  }
  return (
    <main className={styles.productPage}>
      <Helmet>
        <title>{`${data.title} | Market.`}</title>
      </Helmet>
      {showLabel && (
        <AlertNotification
          message={`${data.title} added to cart!`}
          onUnmount={handleUnmount}
        />
      )}
      <img
        src={data.image ? data.image.url : "No image available."}
        alt={data.title}
        className={styles.productImage}
      />
      <section className={styles.productInfo}>{content}</section>
    </main>
  );
};
