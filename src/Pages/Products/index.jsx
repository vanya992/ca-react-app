import { Helmet } from "react-helmet";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Products.module.css";
import { Card } from "../../Components/Card";
import Loader from "../../Components/Loader";

export const Products = () => {
  const { data, isLoading, isError } = useFetch(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading data.</div>;

  return (
    <main>
      <Helmet>
        <title>Products | Market.</title>
      </Helmet>
      <h1>Products</h1>
      <section className={styles.products}>
        {data.length > 0 ? (
          <div className={styles.productGrid}>
            {data.map((item, index) => (
              <Card key={index} product={item} />
            ))}
          </div>
        ) : (
          <div>No data available.</div>
        )}
      </section>
    </main>
  );
};
