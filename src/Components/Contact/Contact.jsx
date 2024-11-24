import React, { useState, useRef } from "react";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();  // Reference to the form element
  const [status, setStatus] = useState(""); // To track submission status
  const [loading, setLoading] = useState(false);  // Track loading state
  const [error, setError] = useState("");  // To track any error
  const [success, setSuccess] = useState("");  // To track successful submission

  const sendEmail = async (e) => {
    e.preventDefault();

    // Track loading state
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData(form.current);
    const name = formData.get("from_name");
    const email = formData.get("from_email");
    const message = formData.get("message");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess("Email sent successfully!");
        form.current.reset(); // Reset form after successful submission
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>I’m excited to contribute my skills to a dynamic team!</p>

      {/* Display success or error message */}
      {success && <div className="status-message success">{success}</div>}
      {error && <div className="status-message error">{error}</div>}

      {/* Form for email submission */}
      <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="from_email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
