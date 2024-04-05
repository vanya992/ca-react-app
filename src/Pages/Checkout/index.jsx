import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/logo.png";

export const Checkout = () => {
  return (
    <main>
      <Helmet>
        <title>Checkout | Market.</title>
      </Helmet>
      <section>
        <img src={logo} alt="logo" />
        <h2>Checkout successful!</h2>
        <p>
          Thank you so much for your order. We appreciate your trust and hope
          you will be satisfied with your purchase. You will receive an order
          confirmation to the email you provided with your order shortly.
        </p>
        <p>You can track your order live with order number: #1206at </p>
        <div></div>
        <Link to="/products" className="ctaButton">
          Back to shopping
        </Link>
      </section>
    </main>
  );
};
