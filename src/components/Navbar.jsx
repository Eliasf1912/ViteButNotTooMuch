import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-cream text-darkgreen font-sans uppercase tracking-wide text-sm">
      <div className="text-lg font-bold">VBN™</div>
      
      <div className="flex gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "border-b-2 border-darkgreen pb-1" : "hover:opacity-60"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/studio"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-darkgreen pb-1" : "hover:opacity-60"
          }
        >
          Le studio
        </NavLink>

        <NavLink
          to="/prestations"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-darkgreen pb-1" : "hover:opacity-60"
          }
        >
          Prestations
        </NavLink>

        <NavLink
          to="/projets"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-darkgreen pb-1" : "hover:opacity-60"
          }
        >
          Projets
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-darkgreen pb-1" : "hover:opacity-60"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
