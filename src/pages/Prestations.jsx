import { Helmet } from "react-helmet";

const services = [
	{
		category: "Identité visuelle & branding",
		description:
			"Donnez vie à votre marque grâce à une identité visuelle forte et cohérente. Chez ViteButNotTooMuch, nous créons des univers graphiques uniques adaptés à votre ADN, incluant logo, palette, typographie, et plus. Un branding percutant pour une reconnaissance immédiate.",
		packs: [
			{
				title: "Pack Starter",
				image: "https://source.unsplash.com/600x400/?branding",
				description:
					"Idéal pour les jeunes marques ou les projets en lancement.",
				bullets: [
					"Logo principal et secondaire",
					"Palette de couleurs",
					"Guide de style PDF simple",
				],
				cta: "Demander un devis",
			},
			{
				title: "Pack Évolution",
				image: "https://source.unsplash.com/600x400/?identity",
				description:
					"Pour les entreprises en croissance souhaitant renforcer leur image.",
				bullets: [
					"Charte graphique complète",
					"Déclinaisons print & digital",
					"Moodboard et typographies personnalisées",
				],
				cta: "Nous contacter",
			},
			{
				title: "Pack Premium",
				image: "https://source.unsplash.com/600x400/?visual-design",
				description: "Une identité visuelle sur-mesure et approfondie.",
				bullets: [
					"Logo, symboles, icônes",
					"Supports de communication personnalisés",
					"Conseil stratégique de marque",
				],
				cta: "Réserver un appel",
			},
		],
	},
	{
		category: "Design web & UI/UX",
		description:
			"Concevez des interfaces digitales intuitives et esthétiques. ViteButNotTooMuch propose des maquettes ergonomiques, adaptées aux parcours utilisateurs modernes. Notre approche allie rapidité, finesse et cohérence visuelle pour des expériences web engageantes et accessibles.",
		packs: [
			{
				title: "Landing Page",
				image: "https://source.unsplash.com/600x400/?ui",
				description: "Une page unique pour convertir efficacement.",
				bullets: [
					"Wireframe + maquette Figma",
					"Responsive design",
					"Conseils UX inclus",
				],
				cta: "Voir un exemple",
			},
			{
				title: "Site vitrine complet",
				image: "https://source.unsplash.com/600x400/?ux",
				description: "Maquettes multi-pages pour site professionnel.",
				bullets: [
					"Structure complète (Accueil, À propos, Services, Contact)",
					"Composants UI personnalisés",
					"Animation & micro-interactions",
				],
				cta: "Planifier une démo",
			},
			{
				title: "Audit & refonte",
				image: "https://source.unsplash.com/600x400/?web-design",
				description: "Optimisez l'existant pour améliorer les conversions.",
				bullets: [
					"Audit UX complet",
					"Recommandations stratégiques",
					"Redesign des écrans clés",
				],
				cta: "Recevoir une analyse",
			},
		],
	},
	{
		category: "Direction artistique",
		description:
			"Profitez d'une direction artistique sur mesure avec ViteButNotTooMuch. Nous donnons le ton graphique global de vos projets (web, print, social) pour assurer une cohérence visuelle forte, créative et alignée avec vos ambitions de marque.",
		packs: [
			{
				title: "Direction ponctuelle",
				image: "https://source.unsplash.com/600x400/?art-director",
				description: "Pour un projet spécifique ou une campagne unique.",
				bullets: [
					"Moodboard & recommandations",
					"Suivi créatif sur le projet",
					"Livrables graphiques",
				],
				cta: "En discuter",
			},
			{
				title: "DA mensuelle",
				image: "https://source.unsplash.com/600x400/?creative",
				description: "Accompagnement créatif régulier pour vos supports.",
				bullets: [
					"Direction artistique mensuelle",
					"Création de visuels réguliers",
					"Points hebdo",
				],
				cta: "Voir les modalités",
			},
			{
				title: "DA + production",
				image: "https://source.unsplash.com/600x400/?studio",
				description: "Direction + création graphique complète.",
				bullets: [
					"Stratégie + exécution",
					"Tous supports visuels",
					"Direction photo si besoin",
				],
				cta: "Réserver maintenant",
			},
		],
	},
	{
		category: "Création de sites vitrines",
		description:
			"ViteButNotTooMuch développe des sites vitrines modernes, épurés et optimisés. Conçus pour mettre en valeur votre marque et vos services, nos sites sont performants, responsives et pensés SEO pour assurer visibilité et impact.",
		packs: [
			{
				title: "Pack Essentiel",
				image: "https://source.unsplash.com/600x400/?website",
				description:
					"Site simple avec pages clés (Accueil, Contact, Services).",
				bullets: [
					"Développement avec React/Vite",
					"Optimisé mobile & SEO",
					"Formulaire de contact",
				],
				cta: "Demander une démo",
			},
			{
				title: "Pack Business",
				image: "https://source.unsplash.com/600x400/?coding",
				description: "Pour une présence digitale professionnelle et complète.",
				bullets: [
					"Pages dynamiques (blog, témoignages)",
					"Animations CSS / JS",
					"Référencement local inclus",
				],
				cta: "Créer mon site",
			},
			{
				title: "Pack Premium SEO",
				image: "https://source.unsplash.com/600x400/?seo",
				description: "Un site vitrine sur-mesure avec stratégie de contenu.",
				bullets: [
					"Optimisation SEO avancée",
					"Intégration analytics & meta",
					"Création de contenu texte",
				],
				cta: "Lancer le projet",
			},
		],
	},
];

export default function Prestations() {
	return (
		<main className='bg-[#fdfbf7] text-[#0b2b15] min-h-screen px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 lg:min-w-5xl'>
			<Helmet>
				<title>Prestations | ViteButNotTooMuch</title>
				<meta
					name='description'
					content='Identité visuelle, branding freelance, création de maquettes web. Découvrez les services du studio créatif ViteButNotTooMuch.'
				/>
				<meta
					name='keywords'
					content='identité visuelle, branding freelance, création de maquettes web, studio créatif, ViteButNotTooMuch, design UI, UX, direction artistique, création de sites vitrines'
				/>
			</Helmet>

			<div className='max-w-6xl mx-auto'>
				<h1 className='text-4xl sm:text-5xl font-bold mb-6 sm:mb-10'>
					Nos prestations
				</h1>
				<p className='text-base sm:text-lg mb-10 sm:mb-16 max-w-3xl leading-relaxed'>
					Chez <strong>ViteButNotTooMuch</strong>, nous proposons un éventail
					complet de prestations créatives alliant réactivité, précision et
					style. De la stratégie visuelle à la création digitale, chaque projet
					est une opportunité de sublimer votre image.
				</p>

				{services.map((service, idx) => (
					<section key={idx} className='mb-20 sm:mb-24'>
						<h2 className='text-2xl sm:text-3xl font-semibold mb-4'>
							{service.category}
						</h2>
						<p className='text-sm sm:text-base mb-8 sm:mb-10 max-w-xl leading-relaxed'>
							{service.description}
						</p>
						<div className='grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3'>
							{service.packs.map((pack, i) => (
								<div
									key={i}
									className='bg-white rounded-2xl shadow-md overflow-hidden flex flex-col'
								>
									<img
										src={pack.image}
										alt={pack.title}
										className='h-48 sm:h-52 w-full object-cover'
									/>
									<div className='p-5 sm:p-6 flex-1 flex flex-col'>
										<h3 className='text-lg sm:text-xl font-bold mb-2'>
											{pack.title}
										</h3>
										<p className='text-xs sm:text-sm text-gray-700 mb-3'>
											{pack.description}
										</p>
										<ul className='text-xs sm:text-sm text-gray-600 mb-6 list-disc list-inside space-y-1'>
											{pack.bullets.map((item, index) => (
												<li key={index}>{item}</li>
											))}
										</ul>
										<button className='mt-auto bg-[#0b2b15] text-white py-2 px-4 rounded-xl hover:bg-[#124026] transition text-sm'>
											{pack.cta}
										</button>
									</div>
								</div>
							))}
						</div>
					</section>
				))}
			</div>
		</main>
	);
}
