import { Helmet } from "react-helmet";
import { useFetch } from "../../hooks/useFetch";
import market from "../../assets/images/market.png";
import styles from "./Home.module.css";
import { Card } from "../../Components/Card";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data, isLoading, isError } = useFetch(
    "https://v2.api.noroff.dev/online-shop"
  );

  const productsWithBiggestDiscounts = data
    .map((product) => ({
      ...product,
      discountPercentage:
        ((product.price - product.discountedPrice) / product.price) * 100,
    }))
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 5);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data.</div>;

  return (
    <main>
      <Helmet>
        <title>Home | Market.</title>
      </Helmet>
      <img src={market} className={styles.backgroundImg} />
      <div>
        Your one-stop shop. Let's bet you will find what you're looking for.
      </div>
      <h2>Products</h2>
      <section className={styles.products}>
        {productsWithBiggestDiscounts.length > 0 ? (
          <div>
            {productsWithBiggestDiscounts.map((item, index) => (
              <Card key={index} product={item} />
            ))}
          </div>
        ) : (
          <div>No data available.</div>
        )}
      </section>
      <div className={styles.seeMore}>
        <Link to="/products" className={styles.seeMoreButton}>
          SEE MORE
        </Link>
      </div>
    </main>
  );
};
