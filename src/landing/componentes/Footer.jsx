import React from "react";
import Facebook from "../../assets/img/facebook.webp";
import Instagram from "../../assets/img/instagram1.webp";
import Twitter from "../../assets/img/twitter.webp";
import Whatsapp from "../../assets/img/whatsapp.webp";
import barberLogo from "../../assets/img/logo_barber.webp";
import { Link } from "react-router-dom";

const Fotter = () => {

  return (
    <div>
      <footer>
        <div className="container-fluid bg-color-blue px-5 pt-5" style={{ marginTop: '-100px' }}>
          <div className="row" style={{ marginTop: '80px' }}>
            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="box d-flex align-items-center justify-content-center" style={{ width: '18rem', backgroundColor: '#1E1E1E', minHeight: '230px' }}>
                <div className="card-body text-center">
                  <h3 className="card-title text-white" style={{ fontSize: '18px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginTop: '-40px' }}>
                    Ubicación
                  </h3>
                  <p className="card-text text-white mt-3">
                    Cra. 12 # 68 NORTE-11 <br />Popayán, Cauca
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="box d-flex align-items-center justify-content-center" style={{ width: '18rem', backgroundColor: '#1E1E1E', minHeight: '230px' }}>
                <div className="card-body text-center">
                  <h3 className="card-title text-white" style={{ fontSize: '18px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginTop: '10px' }}>
                    Horario de atención
                  </h3>
                  <p className="card-text text-white mt-3">
                    Lunes a sábado:<br />8:00 a. m. a 8:00 p. m.<br /><br />Domingo:<br />8:00 a. m. a 5:00 p. m.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="box d-flex align-items-center justify-content-center" style={{ width: '18rem', backgroundColor: '#1E1E1E', minHeight: '230px' }}>
                <div className="card-body text-center">
                  <h3 className="card-title text-white" style={{ fontSize: '18px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginTop: '-40px' }}>
                    Información de contacto
                  </h3>
                  <p className="card-text text-white mt-3">
                    3103669753<br /><br />academyjhonatans@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 text-center">
            <img src={barberLogo} alt="Logo" className="img-logo mx-auto d-block" />
          </div>

          <div className="row justify-content-center flex-wrap text-center">
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/">
                INICIO
              </Link>
            </div>
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/nosotros">
                NOSOTROS
              </Link>
            </div>
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/servicios">
                SERVICIOS
              </Link>
            </div>
            <div className="col-auto my-2">
              <Link className="nav-link active text-white" to="/galeria">
                GALERIA
              </Link>
            </div>
          </div>

          <div className="row justify-content-center flex-wrap text-center">
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/precios">
                PRECIOS
              </Link>
            </div>

            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/tutoriales">
                TUTORIALES
              </Link>
            </div>

            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/productos">
                PRODUCTOS
              </Link>
            </div>
            <div className="col-12 my-2 d-flex justify-content-center">
              <a
                className="btn"
                id="btn-inicio-admin"
                data-bs-toggle="modal"
                data-bs-target="#inicioSesionAdmin"
                style={{
                  fontFamily: 'Lato',
                  backgroundColor: '#1E1E1E',
                  color: 'white',
                  borderRadius: '14px',
                  width: '100%',
                  maxWidth: '280px',
                  padding: '8px 0',
                  fontSize: '16px',
                  textAlign: 'center'
                }}
              >
                INICIAR SESIÓN ADMINISTRADOR
              </a>
            </div>
          </div>

          <hr className="text-white mt-4" />
          <div className="d-flex flex-wrap justify-content-center pb-3">
            <a
              href="https://www.facebook.com/share/1DzUMZFeFo/"
            >
              <img src={Facebook} className="me-2 icon" alt="logofacebook" style={{ width: '24px', height: '24px' }} />
            </a>

            <a
              href="https://www.instagram.com/barberstyle_jhonatan?igsh=Z2c4NGFyNDJ3YnF4"
              target="_blank"
              className="ms-4 text-decoration-none"
            >
              <img
                src={Instagram}
                className="me-2 icon"
                alt="logoinstagram"
                style={{ width: '24px', height: '24px' }}
              />
            </a>

            <a href="https://wa.me/573103669753" target="_blank" className="ms-4 text-decoration-none ">
              <img src={Whatsapp} className="me-2 icon" alt="logoWhatsaap" style={{ width: '24px', height: '24px' }} />
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
