import { useState } from "react";
import { Helmet } from "react-helmet";

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
    <main className="bg-[#fdfcf8] text-[#0b2b15] min-h-screen px-6 py-16 font-[Satoshi]">
       <Helmet>
        <title>Contact — ViteButNotTooMuch</title>
        <meta
          name="description"
          content="Contactez ViteButNotTooMuch, studio créatif à Paris spécialisé en branding, design graphique et digital."
        />
        <meta property="og:title" content="Contact — ViteButNotTooMuch" />
        <meta property="og:description" content="Discutons de votre projet ou collaboration. Contactez notre studio à Paris." />
        <meta property="og:url" content="https://www.vitebutnottoomuch.fr/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.vitebutnottoomuch.fr/images/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ViteButNotTooMuch",
            "url": "https://www.vitebutnottoomuch.fr",
            "logo": "https://www.vitebutnottoomuch.fr/images/logo.png",
            "description": "Studio créatif spécialisé en design graphique, identité visuelle, branding et UI/UX.",
            "founder": {
              "@type": "Person",
              "name": "Clara Martin",
              "jobTitle": "Fondatrice & Directrice artistique",
              "sameAs": [
                "https://www.linkedin.com/in/clara-martin-18bb1a36a/"
              ]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "19-21 rue Erard",
              "addressLocality": "Paris",
              "postalCode": "75012",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33 1 86 22 25 97",
              "contactType": "customer service",
              "areaServed": "FR",
              "availableLanguage": "French"
            },
            "sameAs": [
              "https://www.instagram.com/vitebutnottoomuch.studio/",
              "https://www.behance.net/vitebutnottoomuch",
              "https://www.linkedin.com/company/vitebutnottoomuch-studio/"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Page de contact — ViteButNotTooMuch",
            "url": "https://www.vitebutnottoomuch.fr/contact",
            "about": {
              "@type": "Organization",
              "name": "ViteButNotTooMuch"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold uppercase mb-8 text-center">
          Contact
        </h1>

        <p className="text-center text-base md:text-lg mb-4">
          Écrivez-nous à{" "}
          <a
            href="mailto:contact@vitebutnottoomuch.fr"
            className="underline hover:text-[#0b2b15]/70"
          >
            contact@vitebutnottoomuch.fr
          </a>
        </p>

        <p className="text-center text-sm mb-12">
          Suivez-nous :{" "}
          <a
            href="https://www.instagram.com/vitebutnottoomuch.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-1"
          >
            Instagram
          </a>
          •
          <a
            href="https://www.linkedin.com/company/vitebutnottoomuch-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-1"
          >
            LinkedIn
          </a>
          •
          <a
            href="https://www.behance.net/vitebutnottoomuch"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-1"
          >
            Behance
          </a>
        </p>

        {sent ? (
          <p className="text-center text-lg text-green-700">
            Merci pour votre message !
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              onChange={handleChange}
              required
              className="px-4 py-3 border border-[#0b2b15] rounded-md bg-white placeholder:text-[#0b2b15]/60"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              onChange={handleChange}
              required
              className="px-4 py-3 border border-[#0b2b15] rounded-md bg-white placeholder:text-[#0b2b15]/60"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 border border-[#0b2b15] rounded-md bg-white placeholder:text-[#0b2b15]/60"
            />
            <button
              type="submit"
              className="bg-[#0b2b15] text-[#fdfcf8] py-3 px-6 rounded-full font-medium hover:bg-[#143d25] transition"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>

    </main>
  );
}
