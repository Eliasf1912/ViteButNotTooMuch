import { Helmet } from "react-helmet";
import Card1 from "../../public/images/ui-ux-ecommerce-refonte.webp";
import Card2 from "../../public/images/branding-startup-tech.webp";
import Branding from "../../public/images/illustration-identite-visuelle.webp";
import UX from "../../public/images/exemple-design-ui-ux.webp";
import Studio from "../../public/images/visuel-direction-artistique-studio.webp";
import Web from "../../public/images/creation-site-vitrine-exemple.webp";

const services = [
  {
    category: "Identité visuelle & branding",
    packs: [
      {
        title: "Pack Starter",
        price: "490€",
        description: "Idéal pour les projets en démarrage.",
        image: Card1,
      },
      {
        title: "Pack Avancé",
        price: "890€",
        description: "Identité complète et charte graphique.",
        image: Card1,
      },
      {
        title: "Pack Premium",
        price: "1490€",
        description: "Stratégie de marque approfondie et déclinaisons.",
        image: Card2,
      },
    ],
  },
  {
    category: "Design web & UI/UX",
    packs: [
      {
        title: "One Page",
        price: "590€",
        description: "Landing page responsive et efficace.",
        image: Card2,
      },
      {
        title: "Site vitrine",
        price: "990€",
        description: "Maquettes UI de 4 à 5 pages.",
        image: Card2,
      },
      {
        title: "Expérience complète",
        price: "1490€",
        description: "Design UI/UX sur mesure, mobile-first.",
        image: Card1,
      },
    ],
  },
  {
    category: "Direction artistique",
    packs: [
      {
        title: "Consultation",
        price: "390€",
        description: "Vision artistique sur un projet ponctuel.",
        image: Card1,
      },
      {
        title: "Suivi mensuel",
        price: "790€/mois",
        description: "Direction artistique continue.",
        image: Card2,
      },
      {
        title: "Studio à distance",
        price: "1290€/mois",
        description: "Direction + production de contenus.",
        image: Card1,
      },
    ],
  },
  {
    category: "Création de sites vitrines",
    packs: [
      {
        title: "Site Essentiel",
        price: "990€",
        description: "Pages clés, responsive & rapide.",
        image: Card2,
      },
      {
        title: "Site Business",
        price: "1590€",
        description: "Contenu dynamique + SEO.",
        image: Card1,
      },
      {
        title: "Site Premium SEO",
        price: "2290€",
        description: "Design + dev + stratégie de contenu.",
        image: Card2,
      },
    ],
  },
];

export default function Prestations() {
  return (
    <main className="bg-[#fdfbf7] text-[#0b2b15] px-4 py-12 sm:px-6 md:px-10 max-w-6xl mx-auto">
      <Helmet>
        <title>
          Prestations | Studio créatif & freelance design — ViteButNotTooMuch
        </title>
        <meta
          name="description"
          content="Découvrez les services du studio ViteButNotTooMuch : identité visuelle, design web, direction artistique et création de sites vitrines. Un accompagnement créatif sur mesure pour sublimer votre image."
        />
        <meta
          name="keywords"
          content="prestations design, studio créatif Paris, identité visuelle, branding, design UI/UX, direction artistique, site vitrine, freelance graphiste, ViteButNotTooMuch"
        />
        <meta
          property="og:title"
          content="Prestations | Studio créatif & design sur mesure — ViteButNotTooMuch"
        />
        <meta
          property="og:description"
          content="Identité visuelle, design web, branding, UI/UX et création de sites vitrines. Nos services créatifs sont conçus pour répondre à vos ambitions visuelles."
        />
        <meta
          property="og:image"
          content="https://www.vitebutnottoomuch.fr/images/og-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://www.vitebutnottoomuch.fr/prestations"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0b2b15" />
      </Helmet>

      <section className="mb-14">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">
          Nos prestations sur mesure
        </h1>
        <p className="text-base sm:text-lg max-w-3xl mb-6">
          Le studio <strong>ViteButNotTooMuch</strong> vous accompagne dans la
          création de votre image de marque, vos supports digitaux et la
          direction artistique de vos projets avec un style clair, rapide et
          impactant.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[Branding, UX, Studio, Web].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl w-full h-40 sm:h-48 group"
            >
              <img
                src={src}
                loading="lazy"
                alt={`Illustration service ${i + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Notre histoire
        </h2>
        <p className="max-w-3xl text-sm sm:text-base leading-relaxed">
          Fondé avec l'envie de concilier efficacité et esthétique,
          <strong>ViteButNotTooMuch</strong> est un studio créatif indépendant
          spécialisé dans le design rapide mais soigné. Chaque projet, qu'il
          s'agisse de branding, d'UI/UX ou de création de site vitrine, est
          pensé pour valoriser votre image tout en assurant clarté, cohérence et
          performance SEO.
        </p>
      </section>

      {services.map((service, idx) => (
        <section key={idx} className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            {service.category}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.packs.map((pack, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
              >
                <img
                  src={pack.image}
                  loading="lazy"
                  alt={`Visuel ${pack.title} - ${service.category}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">{pack.title}</h3>
                  <span className="text-sm text-gray-700 font-medium mb-2">
                    {pack.price}
                  </span>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {pack.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-[#0b2b15] text-white py-3 px-6 rounded-full text-sm sm:text-base hover:bg-[#124026] transition"
        >
          Discutons de votre projet
        </a>
      </div>
    </main>
  );
}
