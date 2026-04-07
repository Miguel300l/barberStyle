import React from "react";
/* import Horizontal from "../../assets/img/Dog3.png";
import Favicon2 from "../../assets/img/Dog3.png"; */
import { Link, Outlet } from "react-router-dom";
import Footer from "../componentes/Footer";
import BtnInicio from '../../landing/data/BtnInicioSesion'
// Modales
import InicioSesion from '../../landing/modales/InicioSesion'
import DatosAjustes from '../../profesionales/modales/ajustesProfesional'
import NotificacionAseptar from '../../landing/modales/AceptarRechazarCharla'
import RegistroAprendiz from '../../landing/modales/RegistroAprendiz'
import RegistroProfesional from '../../landing/modales/RegistroProfesional'

const Navbar = () => {

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-color-blue p-3"
        id="menu"
      >
        <div className="container-fluid" id="navbarr">
          <Link className="navbar-brand" to="/">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img
              src={Favicon2}
              alt="Logo"
              className="img-logo-mini d-none me-auto"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse opciones-navbar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-6 ">
                <Link className="nav-link active" aria-current="page" to="/">
                  INICIO
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link active" to="/nosotros">
                  NOSOTROS
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link
                  className="nav-link active"
                  to="/profesionales"
                >
                  PROFESIONALES
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link active" to="/cuidados">
                  CUIDADOS
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link active" to="/adopcion">
                  ADOPCIÓN
                </Link>
              </li>
              <li className="nav-item   fs-6">
                <Link className="nav-link active" to="/contactanos">
                  CONTACTANOS
                </Link>
              </li>
            </ul>
            <BtnInicio />


          </div>
        </div>
      </nav>


      {/* Modales */}
      <InicioSesion />
      <DatosAjustes />
      <NotificacionAseptar />
      <RegistroAprendiz />
      <RegistroProfesional />

      <Outlet />
      <Footer />

    </>
  );
};

export default Navbar;
