import { Helmet } from 'react-helmet';

export default function Accueil() {
  return (
    <main>
      <Helmet>
        <title>Accueil – ViteButNotTooMuch</title>
        <meta name="description" content="Studio créatif spécialisé en design graphique et branding. Freelance design basé en France. Création d’identités visuelles et interfaces web." />
        <meta name="keywords" content="studio créatif, design graphique, freelance design, vitebutnottoomuch" />
      </Helmet>

      <h1>ViteButNotTooMuch</h1>
      <p>
        Studio créatif indépendant au style minimaliste, nous concevons des identités visuelles 
        élégantes, des interfaces web claires et des expériences digitales cohérentes. 
        Design rapide, jamais bâclé.
      </p>
    </main>
  );
}
