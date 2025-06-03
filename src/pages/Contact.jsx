import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSent(true);
  };

  return (
    <main>
      <h1>Contact</h1>
      <p>Écrivez-nous à <a href="mailto:contact@vitebutnottoomuch.com">contact@vitebutnottoomuch.com</a></p>
      <p>Suivez-nous : 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> • 
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </p>
      {sent ? (
        <p>Merci pour votre message !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Votre nom" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Votre email" onChange={handleChange} required />
          <textarea name="message" placeholder="Votre message" onChange={handleChange} required />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </main>
  );
}
