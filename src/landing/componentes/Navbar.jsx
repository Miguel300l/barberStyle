import React, { useState, useEffect } from 'react';
import Horizontal from "../../assets/img/logo_barber.webp";
import Favicon2 from "../../assets/img/logo_barber.webp";
import "../../assets/css/navbar.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
// Modales
import InicioSesion from '../modales/InicioSesion'
import DatosAjustes from '../modales/Ajustes'
import NotificacionAseptar from '../modales/AceptarRechazarCharla'
import RegistroAprendiz from '../modales/RegistroAprendiz'
import RegistroProfesional from '../modales/RegistroProfesional'
import WhatsappFloat from "../componentes/WhatsappFloat";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const closeMenu = () => {
    const menu = document.getElementById('navbarSupportedContent');
    if (menu) {
      menu.classList.remove('show');
    }
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      {/* OVERLAY BLUR */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'bg-custom' : 'bg-transparent'} ${menuOpen ? 'no-background' : ''}`}
        id="menu"
      >

        <div className="container-fluid" id="img-slider">

          {/* Logo, se oculta cuando menuOpen es true */}
          <Link className={`navbar-brand logo-container ${menuOpen ? 'hidden' : ''}`} to="/">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img
              src={Favicon2}
              alt="Logo"
              className="img-logo-mini d-none me-auto"
            />
          </Link>

          <button
            className={`navbar-toggler ${menuOpen ? 'd-none' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <button
            className={`btn-close-menu ${menuOpen ? '' : 'd-none'}`}
            onClick={closeMenu}
          >
            &times;
          </button>

          <div
            className={`collapse navbar-collapse opciones-navbar ${menuOpen ? 'show' : 'hidden-menu'}`}
            id="navbarSupportedContent"
          >

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item fs-6">
                <Link className="nav-link custom-link" to="/" onClick={handleLinkClick}>
                  INICIO
                </Link>
              </li>

              <li className="nav-item fs-6">
                <Link className="nav-link custom-link" to="/nosotros" onClick={handleLinkClick}>
                  NOSOTROS
                </Link>
              </li>

              <li className="nav-item fs-6">
                <Link className="nav-link custom-link" to="/servicios" onClick={handleLinkClick}>
                  SERVICIOS
                </Link>
              </li>

              <li className="nav-item fs-6">
                <Link className="nav-link custom-link" to="/galeria" onClick={handleLinkClick}>
                  GALERIA
                </Link>
              </li>

              <li className="nav-item fs-6">
                <Link className="nav-link custom-link" to="/precios" onClick={handleLinkClick}>
                  PRECIOS
                </Link>
              </li>

              <li className="nav-item fs-6">
                <Link className="nav-link custom-link" to="/tutoriales" onClick={handleLinkClick}>
                  TUTORIALES
                </Link>
              </li>

              <li className="nav-item fs-6">
                <Link className="nav-link custom-link" to="/productos" onClick={handleLinkClick}>
                  PRODUCTOS
                </Link>
              </li>
            </ul>
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
      {!menuOpen && <WhatsappFloat />}
      <Footer />
    </>
  );
};

export default Navbar;