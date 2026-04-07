import React from 'react'
import Horizontal from '../../assets/img/logo_barber.webp'
import gear from '../../assets/img/icons/gear.svg'
import box_arrow from '../../assets/img/icons/box-arrow-right.svg'
import { Link } from 'react-router-dom';
// Modales
import CrearEvento from '../modales/CrearEvento'
import DatosAjustes from '../modales/DatosAjustes'
import AgregarFicha from '../modales/AgregarFicha'

function MenuSup() {
  return (
    <>
      {/* Inicio Nav */}
      <nav
        className="navbar p-0 navbar-dark sticky-top w-100"
        style={{ backgroundColor: "#1E1E1E", minHeight: "100px" }}
      >
        <div
          className="container-fluid d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between px-3 gap-3"
        >
          {/* Logo */}
          <Link className="navbar-brand flex-shrink-0" to="/">
            <img
              src={Horizontal}
              alt="Logo"
              className="img-logo"
              id="logoadmin"
              style={{ height: "clamp(40px, 6vw, 60px)" }}
            />
          </Link>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}
          >
            <button
              className="btn"
              style={{
                backgroundColor: "#000000",
                color: "white",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(14px, 1.5vw, 15px)",
                padding: "0.5rem 1rem",
                minWidth: "150px",
                maxWidth: "100%",
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModalIN"
            >
              + CREAR EVENTO
            </button>
          </div>

          {/* Avatar + Dropdown */}
          <div className="flex-shrink-0 d-flex justify-content-end">
            <li className="nav-item dropdown list-unstyled m-0">
              <Link
                className="nav-link dropdown-toggle p-0"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <img
                  src="https://res.cloudinary.com/dvuzzneet/image/upload/v1684280453/sinF_ksqjai.png"
                  style={{
                    width: "clamp(45px, 8vw, 65px)",
                    height: "clamp(45px, 8vw, 65px)",
                  }}
                  className="ms-3 rounded-circle"
                  alt="avatar"
                />
              </Link>

              <ul
                className="dropdown-menu dropdown-menu-end bg-color-blue"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#modalInicioDatos"
                  >
                    <img src={gear} alt="icon-ajustes" className="me-3" />
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-white"
                    onClick={() => {
                      localStorage.clear();
                      location.reload();
                    }}
                  >
                    <img
                      src={box_arrow}
                      alt="icon-cerrarsesion"
                      className="me-3"
                    />
                    Cerrar Sesión
                  </Link>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>

      <AgregarFicha />

      {/* Modales */}
      <CrearEvento />
      <DatosAjustes />

    </>
  )
}

export default MenuSup
