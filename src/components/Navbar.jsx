import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<div>
				<strong>VBN™</strong>
			</div>
			<div>
				<NavLink to='/' end>
					Accueil
				</NavLink>
				<NavLink to='/studio'>Le studio</NavLink>
				<NavLink to='/prestations'>Prestations</NavLink>
				<NavLink to='/projets'>Projets</NavLink>
				<NavLink to='/contact'>Contact</NavLink>
			</div>
		</nav>
	);
}
