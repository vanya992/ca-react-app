import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./Contact.module.css";
import logo2 from "../../assets/images/logo2.png";
import { AlertNotification } from "../../Components/AlertNotification";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showLabel, setShowLabel] = useState(false);

  const handleUnmount = () => {
    setShowLabel(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main>
      <Helmet>
        <title>Contact | Market.</title>
      </Helmet>
      {showLabel && (
        <AlertNotification
          message={
            "Your message is sent. Thank you for your interess. We will be in touch shortly."
          }
          onUnmount={handleUnmount}
        />
      )}
      <div class={styles.container}>
        <section className={styles.sectionOne}>
          <img src={logo2} alt="Contact page" />
          <h1>Contact Us</h1>
          <h2>Welcome to Market. Customer Support</h2>
          <p>
            At Market., we're committed to offering you a seamless shopping
            experience across our wide range of products. Whether you have
            questions, need assistance with your order, or want to provide
            feedback, we're here to help.
          </p>
        </section>
        <section className={styles.sectionTwo}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="3"
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              minLength="3"
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              minLength="3"
            />

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength="3"
            />

            <button
              type="submit"
              className="send"
              onClick={() => {
                setShowLabel(true);
                addProduct(data);
              }}
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </main>
  );

  if (!formData.email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }
};
