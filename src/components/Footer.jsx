export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 py-10 border-t border-[#0b2b15]/10 text-sm text-center text-darkgreen flex flex-col items-center font-[Satoshi]">
      <p className="mb-4">© {new Date().getFullYear()} ViteButNotTooMuch</p>

      <nav className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-xs uppercase tracking-wide">
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
  );
}
