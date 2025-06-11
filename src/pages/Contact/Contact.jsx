import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", message: "" });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: slavutych.zakarpattia@gmail.com</p>
      <p>Phone:+380 95 137 94 10</p>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?q=Slavutych+Hotel,+Mukachevo,+Zakarpattia+Oblast,+Ukraine&output=embed"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <h3>Callback Request</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <button type="submit">Send</button>
        {isSubmitted && <p>Message sent successfully</p>}
      </form>
    </div>
  );
};

export default Contact;
