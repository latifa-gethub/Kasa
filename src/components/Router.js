import '../style/App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home-page/Home';
import Erreur from './page-erreur/Erreur';
import Logement from './logement/Logement';
import Apropos from './apropos/Apropos';
import Header from './header/Header';
import Footer from './footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
         
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
