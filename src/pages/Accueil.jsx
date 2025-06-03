import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Accueil() {
  return (
    <main className="bg-[#fdfcf8] text-[#0b2b15] min-h-screen flex flex-col items-center font-[Satoshi]">
      <Helmet>
        <title>ViteButNotTooMuch | Studio créatif indépendant</title>
        <meta
          name="description"
          content="ViteButNotTooMuch est un studio créatif qui est spécialisé en design graphique et branding. Freelance design basé en France. Création d’identités visuelles et interfaces web."
        />
        <meta
          name="keywords"
          content="studio créatif, design graphique, freelance design, vitebutnottoomuch"
        />
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
          src="/images/look1.jpg"
          alt="Look 1"
          className="object-cover w-full aspect-[4/5]"
        />
        <img
          src="/images/look1.jpg"
          alt="Look 1"
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
      <h3 className="text-lg md:text-xl font-semibold mb-2">Philosophie</h3>
      <p className="leading-relaxed text-sm md:text-base">
        Chez <strong>ViteButNotTooMuch</strong>, on croit au pouvoir du design rapide, mais réfléchi. 
        Chaque projet est abordé avec une intention claire : allier efficacité, esthétique et sens. 
        Notre mission est de créer des identités visuelles durables, qui parlent à votre public dès le premier regard.
      </p>
    </div>

    {/* Expertise */}
    <div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Ce qu’on fait</h3>
      <p className="leading-relaxed text-sm md:text-base">
        Le studio <strong>ViteButNotTooMuch</strong> est spécialisé dans le branding, l’UI/UX design 
        et la création de maquettes web élégantes. Basé à Paris, nous accompagnons les marques ambitieuses, 
        startups, créateurs et indépendants dans la construction de leur image.
      </p>
    </div>

    {/* Fondatrice */}
    <div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Fondatrice</h3>
      <p className="leading-relaxed text-sm md:text-base">
        Le studio a été fondé par une designer indépendante passionnée par l’univers du digital, 
        du print et de la narration visuelle. Forte d’une expérience freelance auprès de projets variés, 
        elle a lancé <strong>ViteButNotTooMuch</strong> pour offrir un design à la fois rapide, pointu et humain.
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
      {/* Footer */}
      <footer className="w-full px-6 py-10 border-t border-[#0b2b15]/10 text-sm text-center">
        <p className="mb-2">© {new Date().getFullYear()} ViteButNotTooMuch</p>
        <nav className="flex flex-wrap justify-center gap-4 text-xs">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/studio" className="hover:underline">Le studio</a>
          <a href="/prestations" className="hover:underline">Prestations</a>
          <a href="/projets" className="hover:underline">Projets</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
