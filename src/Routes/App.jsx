import { Routes, Route } from "react-router-dom";
//Landing Aprendiz
import Navbar from "../landing/componentes/Navbar";
import ScrollTop from "../landing/componentes/ScrollTop";
import Inicio from "../landing/pages/Inicio";
import Servicios from "../landing/pages/Servicios";
import Tutoriales from "../landing/pages/Tutoriales";
import Productos from "../landing/pages/Productos";
import Galeria from "../landing/pages/Galeria";
import Precios from "../landing/pages/Precios";
import Nosotros from "../landing/pages/Nosotros";
//Profesional
import NavbarProfesional from "../profesionales/componentes/Navbar";
import InicioProfesional from "../profesionales/pages/Inicio";
import CharlaProfesional from "../profesionales/pages/SolicitudCharla";
import ContactanosProfesional from "../profesionales/pages/Contactanos";
import CronogramaProfesional from "../profesionales/pages/Cuidados";
import NosotrosProfesional from "../profesionales/pages/Nosotros";
import EventosProfesional from '../profesionales/pages/Eventos';

//Administrador
import Menulateral from "../administrador/componentes/MenuLateral"
import InicioAdmin from '../administrador/pages/ListaInicio'
import Admincharlas from '../administrador/pages/SolicitudesCharla'
import Adminsolicitudes from '../administrador/pages/ListaUsuarios'
import Adminusuarios from '../administrador/pages/Pqrs'
import Admincronograma from '../administrador/pages/ListaCronograma'
import Adminprofesional from '../administrador/pages/SolicitudesProfesional'
import { ProtectRoutesAdmin, ProtectRoutesProfesional } from './ProtectRoutes'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

const App = () => {
  return (
    <main>
      <div>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/tutoriales" element={<Tutoriales />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/galeria" element={<Galeria />} />
          </Route>

          <Route element={<ProtectRoutesProfesional />}>

            <Route path="/profesional" element={<NavbarProfesional />} >
              <Route index element={<InicioProfesional />} />
              <Route path="/profesional/nosotros" element={<NosotrosProfesional />} />
              <Route path="/profesional/charla" element={<CharlaProfesional />} />
              <Route path="/profesional/evento" element={<EventosProfesional />} />
              <Route path="/profesional/contactanos" element={<ContactanosProfesional />} />
              <Route path="/profesional/cuidados" element={<CronogramaProfesional />} />
            </Route>
          </Route>


          <Route element={<ProtectRoutesAdmin />}>
            <Route path="/admin" element={<Menulateral />}>
              <Route index element={<InicioAdmin />} />
              <Route path="/admin/charlas" element={<Admincharlas />} />
              <Route path="/admin/solicitudes" element={<Adminsolicitudes />} />
              <Route path="/admin/usuarios" element={<Adminusuarios />} />
              <Route path="/admin/cronograma" element={<Admincronograma />} />
              <Route path="/admin/profesional" element={<Adminprofesional />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </main>
  );
};

export default App;
