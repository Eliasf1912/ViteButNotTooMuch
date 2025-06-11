import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <main className="bg-[#fdfcf8] text-[#0b2b15] min-h-screen flex flex-col items-center font-[Satoshi]">
      <Helmet>
  <title>ViteButNotTooMuch | Studio créatif à Paris — Design & Branding sur mesure</title>

  <meta
    name="description"
    content="ViteButNotTooMuch, studio créatif indépendant basé à Paris, crée des identités visuelles uniques et des interfaces web sur mesure pour donner vie à vos projets."
  />

  <meta
    property="og:title"
    content="ViteButNotTooMuch | Studio créatif à Paris — Design & Branding sur mesure"
  />
  <meta
    property="og:description"
    content="Création d'identités visuelles uniques et interfaces web personnalisées par ViteButNotTooMuch, studio créatif indépendant."
  />
  <meta
    property="og:image"
    content="https://www.vitebutnottoomuch.fr/images/og-cover.jpg"
  />
  <meta
    property="og:url"
    content="https://www.vitebutnottoomuch.fr"
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

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
<link rel="icon" href="../../public/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="../../apple-touch-icon.png" />
<meta name="theme-color" content="#0b2b15" />
</Helmet>


      {/* Header */}
      <header className="w-full text-center mt-16 mb-8">
        <h1 className="text-3xl md:text-5xl tracking-wide uppercase font-bold">
          ViteButNotTooMuch
        </h1>
        <p className="mt-2 text-sm md:text-lg tracking-wider">
          Studio créatif pas comme les autres
        </p>
      </header>

      {/* Text intro */}
      <section className="max-w-xl text-center px-4 mb-6">
        <p className="leading-relaxed text-base md:text-lg">
          <strong>ViteButNotTooMuch</strong> conçoit des identités visuelles
          élégantes, des interfaces web claires et des expériences digitales
          cohérentes. <br /> Design rapide, jamais bâclé.
        </p>
      </section>

      {/* Image grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-5xl mb-12">
        <img
          src="/images/fond-editorial-branding-gouttes.webp"
          alt="Image éditoriale, fond visuel branding. Des gouttes d'eau sur une surface" loading="lazy"
          className="object-cover w-full aspect-[4/5]"
        />
        <img
          src="/images/fond-editorial-branding-gouttes.webp"
          alt="Image éditoriale, fond visuel branding. Des gouttes d'eau sur une surface" loading="lazy"
          className="object-cover w-full aspect-[4/5] transform -scale-x-100"
        />
      </section>

      {/* Barcode / tag */}
      <section className="text-xs uppercase tracking-wide mb-12">
        <p>Branding — UI/UX — Création rapide & soignée</p>
      </section>

      {/* Mini présentation du studio */}
      <section className="text-[#0b2b15] px-6 py-16 w-full">
        <div className="max-w-4xl mx-auto text-left space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            À propos de ViteButNotTooMuch
          </h2>

          {/* Philosophie */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Philosophie
            </h3>
            <p className="leading-relaxed text-sm md:text-base">
              Chez <strong>ViteButNotTooMuch</strong>, on croit au pouvoir du
              design rapide, mais réfléchi. Chaque projet est abordé avec une
              intention claire : allier efficacité, esthétique et sens. Notre
              mission est de créer des identités visuelles durables, qui parlent
              à votre public dès le premier regard.
            </p>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Ce qu’on fait
            </h3>
            <p className="leading-relaxed text-sm md:text-base">
              Le studio <strong>ViteButNotTooMuch</strong> est spécialisé dans
              le branding, l’UI/UX design et la création de maquettes web
              élégantes. Basé à Paris, nous accompagnons les marques
              ambitieuses, startups, créateurs et indépendants dans la
              construction de leur image.
            </p>
          </div>

          {/* Fondatrice */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Fondatrice
            </h3>
            <p className="leading-relaxed text-sm md:text-base">
              Le studio a été fondé par une designer indépendante passionnée par
              l’univers du digital, du print et de la narration visuelle. Forte
              d’une expérience freelance auprès de projets variés, elle a lancé{" "}
              <strong>ViteButNotTooMuch</strong> pour offrir un design à la fois
              rapide, pointu et humain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="flex flex-row justify-center gap-4 mb-12">
        <Link
          to="/studio"
          className="px-6 py-2 border border-[#0b2b15] text-[#0b2b15] hover:bg-[#0b2b15] hover:text-[#fdfcf8] transition-colors text-sm uppercase tracking-wide"
        >
          Découvrir notre approche
        </Link>
        <Link
          to="/prestations"
          className="px-6 py-2 border border-[#0b2b15] text-[#0b2b15] hover:bg-[#0b2b15] hover:text-[#fdfcf8] transition-colors text-sm uppercase tracking-wide"
        >
          Voir les services
        </Link>
        <Link
          to="/contact"
          className="px-6 py-2 border border-[#0b2b15] text-[#0b2b15] hover:bg-[#0b2b15] hover:text-[#fdfcf8] transition-colors text-sm uppercase tracking-wide"
        >
          Parlons de votre projet
        </Link>
      </section>
      {/* Aperçu des prestations */}
      <section className="w-full px-6 py-16 bg-[#fdfcf8] text-[#0b2b15]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-12">
            Nos prestations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Carte 1 */}
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#0b2b15]/10">
              <h3 className="font-semibold text-xl mb-3">Identité visuelle</h3>
              <p className="text-base leading-relaxed">
                Création de logos, chartes graphiques et systèmes visuels
                cohérents pour faire rayonner votre marque.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#0b2b15]/10">
              <h3 className="font-semibold text-xl mb-3">Branding freelance</h3>
              <p className="text-base leading-relaxed">
                Une stratégie de marque sur-mesure pour vous démarquer avec
                impact.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#0b2b15]/10">
              <h3 className="font-semibold text-xl mb-3">UI/UX design</h3>
              <p className="text-base leading-relaxed">
                Interfaces claires et intuitives, pensées pour vos utilisateurs.
              </p>
            </div>

            {/* Carte 4 */}
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#0b2b15]/10">
              <h3 className="font-semibold text-xl mb-3">Sites vitrines</h3>
              <p className="text-base leading-relaxed">
                Design et maquettes de sites élégants, rapides et responsive.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="/prestations"
              className="inline-block px-8 py-3 border border-[#0b2b15] rounded-full text-sm font-medium hover:bg-[#0b2b15] hover:text-[#fdfcf8] transition-all"
            >
              Voir toutes les prestations
            </a>
          </div>
        </div>
      </section>
      {/* Projets en avant */}
      <section className="w-full px-6 py-16 bg-[#fdfcf8] text-[#0b2b15]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-12">
            Projets en avant
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Projet 1 */}
            <div className="flex flex-col items-center text-left bg-white rounded-2xl shadow-md overflow-hidden border border-[#0b2b15]/10">
              <img
                src="/images/branding-startup-tech.webp"
                alt="Identité visuelle pour une startup tech, création de logo et système de marque" loading="lazy"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Branding pour startup tech
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Une identité visuelle moderne pour une entreprise innovante.
                  Augmentation de la notoriété de +70%.
                </p>
                <a
                  href="/projets"
                  className="text-sm font-medium underline hover:text-[#0b2b15]/70 transition"
                >
                  Voir le projet →
                </a>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="flex flex-col items-center text-left bg-white rounded-2xl shadow-md overflow-hidden border border-[#0b2b15]/10">
              <img
                src="/images/ui-ux-ecommerce-refonte.webp"
                alt="Interface e-commerce repensée pour optimiser l’expérience utilisateur et la conversion" loading="lazy"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  UI/UX design pour e-commerce
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Refonte complète d’une interface e-commerce, +40% de
                  conversion dès le premier mois.
                </p>
                <a
                  href="/projets"
                  className="text-sm font-medium underline hover:text-[#0b2b15]/70 transition"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="/projets"
              className="inline-block px-8 py-3 border border-[#0b2b15] rounded-full text-sm font-medium hover:bg-[#0b2b15] hover:text-[#fdfcf8] transition-all"
            >
              Voir tous les projets
            </a>
          </div>
        </div>
      </section>
      {/* Les temoingnages des clients */}
      <section className="w-full px-6 py-16 bg-[#fdfcf8] text-[#0b2b15]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-12">
            Ce que nos clients disent
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
            {[
              {
                quote:
                  "Une collaboration fluide du début à la fin. Leur approche créative a donné un vrai coup d’éclat à notre image.",
                author: "Julien B., CEO de Novatek",
              },
              {
                quote:
                  "Identité visuelle livrée en un temps record, avec une qualité irréprochable. On recommande à 100%.",
                author: "Amélie R., fondatrice de Releaf",
              },
              {
                quote:
                  "ViteButNotTooMuch a su traduire notre vision avec justesse et modernité. Une vraie expertise du branding.",
                author: "Karim T., directeur de Koyo Studio",
              },
            ].map((item, idx) => (
              <blockquote
                key={idx}
                className="relative bg-white w-full md:w-1/3 px-6 py-8 rounded-2xl shadow-sm border border-[#0b2b15]/10 text-left mx-auto transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Liseré vertical crème */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#fdfcf8] rounded-r-full" />

                <p className="italic mb-4 relative z-10">{`“${item.quote}”`}</p>
                <footer className="text-sm text-[#0b2b15]/70 relative z-10">
                  — {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fdfcf8] text-[#0b2b15] px-6 py-20 border-t border-[#0b2b15]/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
              Une idée ? Un projet ?
            </h2>
            <p className="text-base md:text-lg text-[#0b2b15]/80 leading-relaxed">
              Vous cherchez un studio créatif pour imaginer une identité forte,
              un site clair ou un design impactant ? Chez{" "}
              <strong>ViteButNotTooMuch</strong>, on conçoit vite, mais jamais à
              moitié.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#0b2b15] text-[#fdfcf8] font-medium tracking-wide rounded-full hover:bg-[#143d25] transition"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 py-10 border-t border-[#0b2b15]/10 text-sm text-center">
        <p className="mb-2">© {new Date().getFullYear()} ViteButNotTooMuch</p>
        <nav className="flex flex-wrap justify-center gap-4 text-xs">
          <a href="/" className="hover:underline">
            Accueil
          </a>
          <a href="/studio" className="hover:underline">
            Le studio
          </a>
          <a href="/prestations" className="hover:underline">
            Prestations
          </a>
          <a href="/projets" className="hover:underline">
            Projets
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </footer>
    </main>
  );
}
