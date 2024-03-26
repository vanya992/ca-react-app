import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./Contact.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      message: "",
    });
  };

  return (
    <main>
      <Helmet>
        <title>Contact | Market.</title>
      </Helmet>
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

        <button type="submit">Send</button>
      </form>
    </main>
  );

  if (!formData.email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }
};
