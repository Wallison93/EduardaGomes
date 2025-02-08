import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './Inicio.jsx'
import "bootstrap/dist/css/bootstrap.css";
import RedesSociais from './RedesSociais/RedesSociais.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Polaroid from './Polaroid/Polaroid.jsx';
import Book from './Book/Book.jsx';
import Composit from './Composit/Composit.jsx';
import Atributos from './Composit/Atributos.jsx';
import Contact from './Contact/Contact.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <section id="Home">
        <Inicio />
      </section>
      <section id="Polaroid">
        <Polaroid />
      </section>
      <section id="Book">
        <Book />
      </section>
      <section id="Composit">
        <Composit />
        <Atributos />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    <RedesSociais />
  </StrictMode>,
)
