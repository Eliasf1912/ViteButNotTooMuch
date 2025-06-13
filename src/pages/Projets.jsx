import { Helmet } from "react-helmet";

export default function Projets() {
  return (
    <main className="bg-[#fdfcf8] text-[#0b2b15] font-[Satoshi] px-6 py-16">
      <Helmet>
        <title>
          Projets | ViteButNotTooMuch — Branding, UI/UX & design éditorial
        </title>
        <meta
          name="description"
          content="Explorez les projets du studio ViteButNotTooMuch : branding, design d’interface, direction artistique. Une sélection de réalisations sur-mesure pour startups, e-commerce et marques culturelles."
        />
        <meta
          property="og:title"
          content="Projets | ViteButNotTooMuch — Branding, UI/UX & design éditorial"
        />
        <meta
          property="og:description"
          content="Découvrez une sélection de projets réalisés par ViteButNotTooMuch, studio créatif basé à Paris. Design graphique, UI/UX, direction artistique et plus encore."
        />
        <meta
          property="og:url"
          content="https://www.vitebutnottoomuch.fr/projets"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-wide mb-4">
          Nos projets
        </h1>
        <p className="text-base md:text-lg text-[#0b2b15]/80">
          Une sélection de projets où stratégie, esthétique et impact se
          rencontrent.
        </p>
      </header>

     <section className="max-w-4xl mx-auto mb-24">
        <img
          src="/images/projet-startup.webp"
          alt="Identité visuelle pour une startup tech"
          className="w-full rounded-2xl shadow-md border border-[#0b2b15]/10 mb-6"
          loading="lazy"
        />
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
          Startup Tech – Identité visuelle & branding
        </h2>
        <p className="text-base leading-relaxed mb-4">
          Pour cette jeune entreprise innovante dans le secteur de la technologie, notre mission était de créer une identité visuelle forte et différenciante.
          Logo, palette, typographie et univers visuel ont été développés pour incarner leur ADN : innovation, agilité et clarté.
        </p>
        <ul className="list-disc pl-5 mb-4 text-base">
          <li>Création du logo</li>
          <li>Définition de la charte graphique</li>
          <li>Déclinaisons print & web</li>
        </ul>
        <a href="https://www.behance.net/vitebutnottoomuch" className="text-darkgreen underline" target="_blank" rel="noopener noreferrer">
          Voir le projet complet sur Behance →
        </a>
        <blockquote className="italic border-l-4 border-[#0b2b15]/20 pl-4 mt-6 text-[#0b2b15]/70">
          “Une équipe à l’écoute et un résultat au-delà de nos attentes. Merci pour cette identité qui reflète parfaitement notre projet !”
          <br /><span className="text-sm mt-2 block">— Julie D., cofondatrice</span>
        </blockquote>
      </section>

      {/* Projet 2 */}
      <section className="max-w-4xl mx-auto mb-24">
        <img
          src="/images/projet-ecommerce.webp"
          alt="UI/UX design pour un site e-commerce"
          className="w-full rounded-2xl shadow-md border border-[#0b2b15]/10 mb-6"
          loading="lazy"
        />
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
          Boutique éthique – UI/UX design
        </h2>
        <p className="text-base leading-relaxed mb-4">
          Pour ce projet e-commerce, nous avons conçu une interface sobre, intuitive et responsive permettant une expérience d’achat fluide.
          Chaque étape utilisateur a été pensée pour conjuguer clarté, efficacité et élégance.
        </p>
        <ul className="list-disc pl-5 mb-4 text-base">
          <li>Recherche utilisateur & wireframes</li>
          <li>Design system complet</li>
          <li>Maquettes desktop & mobile</li>
        </ul>
        <a href="https://www.behance.net/vitebutnottoomuch" className="text-darkgreen underline" target="_blank" rel="noopener noreferrer">
          Voir le projet complet sur Behance →
        </a>
        <blockquote className="italic border-l-4 border-[#0b2b15]/20 pl-4 mt-6 text-[#0b2b15]/70">
          “Une approche claire, un design raffiné : l’équipe a su traduire notre univers avec brio.”
          <br /><span className="text-sm mt-2 block">— Léa M., fondatrice</span>
        </blockquote>
      </section>

      {/* Projet 3 */}
      <section className="max-w-4xl mx-auto mb-24">
        <img
          src="/images/projet-editorial.webp"
          alt="Design éditorial pour une maison d'édition"
          className="w-full rounded-2xl shadow-md border border-[#0b2b15]/10 mb-6"
          loading="lazy"
        />
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
          Maison d’édition – Design éditorial
        </h2>
        <p className="text-base leading-relaxed mb-4">
          Collaboration avec une maison d’édition indépendante pour concevoir une collection d’ouvrages : une direction artistique sobre et expressive
          centrée sur la typographie, les marges et la hiérarchie de lecture.
        </p>
        <ul className="list-disc pl-5 mb-4 text-base">
          <li>Mise en page des ouvrages</li>
          <li>Conception des couvertures</li>
          <li>Déclinaisons numériques (PDF, ePub)</li>
        </ul>
        <a href="https://www.behance.net/vitebutnottoomuch" className="text-darkgreen underline" target="_blank" rel="noopener noreferrer">
          Voir le projet complet sur Behance →
        </a>
        <blockquote className="italic border-l-4 border-[#0b2b15]/20 pl-4 mt-6 text-[#0b2b15]/70">
          “Un sens aigu du rythme visuel et une parfaite compréhension de nos enjeux éditoriaux.”
          <br /><span className="text-sm mt-2 block">— Pierre L., directeur éditorial</span>
        </blockquote>
      </section>

      <div className="max-w-3xl mx-auto text-center mt-20">
        <p className="text-base md:text-lg text-[#0b2b15]/80 mb-6">
          Envie de créer quelque chose ensemble ?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-[#0b2b15] text-[#fdfcf8] rounded-full tracking-wide text-sm hover:bg-[#143d25] transition"
        >
          Parlons de votre projet
        </a>
      </div>
    </main>
  );
}
