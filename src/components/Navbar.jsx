import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (isMobile = false) => {
    const commonClass = "hover:opacity-60 transition-opacity duration-200";
    const activeClass = "border-b-2 border-darkgreen pb-1";
    const baseClass = isMobile ? "text-base py-2" : "";

    const links = [
      { to: "/", label: "Accueil", end: true },
      { to: "/studio", label: "Le studio" },
      { to: "/prestations", label: "Prestations" },
      { to: "/projets", label: "Projets" },
      { to: "/contact", label: "Contact" },
    ];

    return links.map(({ to, label, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        onClick={() => isMobile && setIsOpen(false)}
        className={({ isActive }) =>
          (isActive ? activeClass : commonClass) + " " + baseClass
        }
      >
        {label}
      </NavLink>
    ));
  };

  return (
    <nav className="px-6 py-4 bg-cream text-darkgreen font-sans uppercase tracking-wide text-sm">
      <div className="flex items-center justify-between w-full">
  
        <div className="text-lg font-bold">VBN™</div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex gap-6 ml-auto">
          {navLinks()}
        </div>
      </div>

      
      {isOpen && (
        <div className="flex flex-col items-end gap-4 mt-4 md:hidden">
          {navLinks(true)}
        </div>
      )}
    </nav>
  );
}
