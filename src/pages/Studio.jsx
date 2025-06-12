import { Helmet } from "react-helmet";

export default function Studio() {
  return (
    <main className="bg-[#fdfcf8] text-[#0b2b15] font-[Satoshi] px-6 py-16">
      <Helmet>
        <title>
          Le studio | ViteButNotTooMuch — Design graphique & direction
          artistique
        </title>

        <meta
          name="description"
          content="Découvrez les valeurs, l’approche et les expertises du studio ViteButNotTooMuch : design graphique, direction artistique et branding sur-mesure."
        />

        <meta
          property="og:title"
          content="Le studio | ViteButNotTooMuch — Design graphique & direction artistique"
        />
        <meta
          property="og:description"
          content="Le studio ViteButNotTooMuch, basé à Paris, combine esthétique minimale et exigence créative pour créer des identités visuelles fortes et durables."
        />
        <meta
          property="og:image"
          content="https://www.vitebutnottoomuch.fr/images/og-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://www.vitebutnottoomuch.fr/studio"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ViteButNotTooMuch",
            url: "https://www.vitebutnottoomuch.fr",
            logo: "https://www.vitebutnottoomuch.fr/images/logo.png",
            description:
              "Studio créatif spécialisé en design graphique, identité visuelle, branding et UI/UX.",
            founder: {
              "@type": "Person",
              name: "Clara Martin",
              jobTitle: "Fondatrice & Directrice artistique",
              sameAs: ["https://www.linkedin.com/in/clara-martin-18bb1a36a/"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "19-21 rue Erard",
              addressLocality: "Paris",
              postalCode: "75012",
              addressCountry: "FR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33 1 86 22 25 97",
              contactType: "customer service",
              areaServed: "FR",
              availableLanguage: "French",
            },
            sameAs: [
              "https://www.instagram.com/vitebutnottoomuch.studio/",
              "https://www.behance.net/vitebutnottoomuch",
              "https://www.linkedin.com/company/vitebutnottoomuch-studio/",
            ],
          })}
        </script>

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0b2b15" />
      </Helmet>

      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-wide mb-4">
          Le studio
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-[#0b2b15]/80">
          Fondé par des passionnés de design, <strong>ViteButNotTooMuch</strong>{" "}
          allie esthétique minimaliste et efficacité. Nous croyons à la beauté
          dans la simplicité.
        </p>
      </header>

      {/* Section philosophie */}
      <section className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
          Notre approche chez ViteButNotTooMuch
        </h2>
        <p className="text-base leading-relaxed">
          Vite, mais pas n’importe comment. On privilégie la clarté, l’impact
          visuel et la cohérence. Chaque projet démarre avec une vision claire :
          marier rapidité et rigueur créative.
        </p>
      </section>

      {/* Qui sommes-nous */}
      <section className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
          Qui sommes-nous ?
        </h2>
        <p className="text-base leading-relaxed">
          Le studio <strong> ViteButNotTooMuch </strong> a été fondé par Clara
          Martin, designer indépendante passionnée par les systèmes visuels, le
          branding et l’éditorial. Après plusieurs années de projets en
          freelance, elle a lancé
          <strong> ViteButNotTooMuch </strong> pour proposer un design à la fois
          expressif, pointu et humain.
        </p>
      </section>

      {/* Expertise */}
      <section className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
          Ce qu’on fait chez ViteButNotTooMuch
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-base">
          <li>Identité visuelle & branding</li>
          <li>Design web & UI/UX</li>
          <li>Direction artistique</li>
          <li>Création de sites vitrines</li>
        </ul>
        <p className="text-base leading-relaxed">
          Pour en savoir plus sur nos prestations, rendez-vous sur la{" "}
          <a href="/prestations" className="underline">
            page dédiée
          </a>
          .
        </p>
      </section>

      {/* Image / ambiance studio */}
      <section className="max-w-4xl mx-auto mb-16">
        <img
          src="/images/studio-visuel.webp"
          alt="Ambiance visuelle du studio ViteButNotTooMuch"
          className="w-full rounded-2xl shadow-md border border-[#0b2b15]/10"
          loading="lazy"
        />
      </section>

      {/* CTA vers contact */}
      <section className="max-w-3xl mx-auto text-center mt-20">
        <p className="text-base md:text-lg text-[#0b2b15]/80 mb-6">
          Une idée ? Un projet ? Un besoin d’identité visuelle ?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-[#0b2b15] text-[#fdfcf8] rounded-full tracking-wide text-sm hover:bg-[#143d25] transition"
        >
          Discutons ensemble
        </a>
      </section>
    </main>
  );
}
