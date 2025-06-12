import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Studio from './pages/Studio';
import Prestations from './pages/Prestations';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import Footer from "./components/Footer";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
