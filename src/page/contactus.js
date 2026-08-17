import React, { useState } from "react";
import "./contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="contactus-container">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Please fill out the form below for any questions or support.
      </p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
            placeholder="Your full name"
          />
          {errors.name && <small className="error-msg">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            placeholder="you@example.com"
          />
          {errors.email && <small className="error-msg">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
            placeholder="Write your message here..."
            rows="5"
          />
          {errors.message && <small className="error-msg">{errors.message}</small>}
        </div>

        <button type="submit">Send Message</button>
      </form>

      {submitted && <p className="success-msg">Thank you for reaching out! We'll get back to you soon.</p>}
    </div>
  );
};

export default ContactUs;
