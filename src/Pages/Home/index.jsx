import { Helmet } from "react-helmet";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import market from "../../assets/images/market.png";
import styles from "./Home.module.css";
import { Card } from "../../Components/Card";
import SaleSign from "../../Components/Sale";
import { Link } from "react-router-dom";
import { SearchBar } from "../../Components/Search";
import { SearchResults } from "../../Components/SearchResults";
import Loader from "../../Components/Loader";

export const Home = () => {
  const { data, isLoading, isError } = useFetch(
    "https://v2.api.noroff.dev/online-shop"
  );

  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const productsWithBiggestDiscounts = data
    .map((product) => ({
      ...product,
      discountPercentage:
        ((product.price - product.discountedPrice) / product.price) * 100,
    }))
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 5);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading data.</div>;

  return (
    <main>
      <Helmet>
        <title>Home | Market.</title>
      </Helmet>
      <img src={market} className={styles.backgroundImg} />
      <div>
        <h2>
          Your one-stop shop. Let's bet you will find what you're looking for.
        </h2>{" "}
        <SearchBar setResults={setResults} input={input} setInput={setInput} />
        {results.length > 0 && <SearchResults results={results} />}
      </div>
      <SaleSign />
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
        <Link to="/products" className="ctaButton">
          SEE MORE PRODUCTS
        </Link>
      </div>
    </main>
  );
};
