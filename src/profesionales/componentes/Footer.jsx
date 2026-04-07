import React from "react";
/* import People from "../../assets/img/icons/people-fill.svg"; */
/* import Clock from "../../assets/img/icons/clock.svg"; */
/* import Arrow from "../../assets/img/icons/arrow-down-right-square.svg"; */
/* import Facebook from "../../assets/img/icons/facebook.svg";
import Instagram from "../../assets/img/icons/instagram.svg";
import Twitter from "../../assets/img/icons/twitter.svg";
import Whatsapp from "../../assets/img/icons/whatsapp.svg"; */
import { Link } from "react-router-dom";


const Fotter = () => {
  return (
    <div>


      <footer>
        <div className="container-fluid bg-color-blue px-5 pt-5">
          <div className="row">
            <div className="col-lg-5 mt-lg-0">
              <div className="mx-4 te">
                <p className="text-white fs-4 fw-semibold text-center">
                  <img src={People} className="me-3" alt="iconnosotros" />
                  ACERCA DE NOSOTROS
                </p>
                <hr className="text-white" />
                <p className="text-muted1 fs-6">
                  Es una estrategia institucional para contribuir en la
                  permanencia y el desempeño exitoso de los aprendices de la
                  entidad en su proceso formativo con enfoque territorial y
                  diferencial.
                </p>
              </div>
            </div>
            <div className="col-lg-3 mt-lg-0 mt-5">
              <p className="fs-4 fw-semibold text-center text-white">
                <img src={Arrow} className="me-3" alt="iconacceso" />
                NAVEGACION
              </p>
              <hr className="text-white" />

              <div className="text-muted1 text-center">
                <Link className="nav-link" aria-current="page" to="/">
                  INICIO
                </Link>
                <Link className="nav-link" to="/nosotros" >
                  NOSOTROS
                </Link>
                <Link className="nav-link" to="/profesionales">
                  PROFESIONALES
                </Link>
                <Link className="nav-link" to="/contactanos" >
                  CONTACTANOS
                </Link>
                <Link className="nav-link" to="/adopcion" >
                  ADOPCION
                </Link>
                <Link className="nav-link" to="/cuidados" >
                  CUIDADOS
                </Link>
              </div>

            </div>

            <div className="col-lg-4 mt-0 mt-md-0 mt-5">
              <div className="ps-3">
                <p className="fs-4 fw-semibold text-center text-white">
                  <img src={Clock} className="me-3" alt="iconreloj" />
                  HORARIO DE ATENCION
                </p>
                <hr className="text-white" />
                <p className="d-flex justify-content-between text-muted1 fs-6">
                  Lunes a Viernes:
                  <span>
                    8:00 AM A 12:00 AM <br />
                    2:00 PM A 9:00 PM
                  </span>
                </p>
                <br />
                <p className="text-muted1 fs-6">
                  No se atiende fines de semana y festivos
                </p>
              </div>
            </div>
          </div>

          <hr className="text-white mt-5" />
          <div className="d-flex flex-wrap justify-content-center pb-3">
            <Link
              href="https://www.facebook.com/Bienestaralaprendizctpi"
              className="text-decoration-none"
            >
              <img src={Facebook} className="me-2 icon" alt="logofacebook" />
            </Link>

            <Link
              href="https://twitter.com/CTPIsenacauca"
              className="ms-4 text-decoration-none"
            >
              <img src={Twitter} className="me-2 icon" alt="logotwiter" />
            </Link>

            <Link
              href="https://instagram.com/ctpisenacauca?igshid=YmMyMTA2M2Y="
              className="ms-4 text-decoration-none"
            >
              <img src={Instagram} className="me-2 icon" alt="logoinstagram" />
            </Link>

            <Link href="#" className="ms-4 text-decoration-none">
              <img src={Whatsapp} className="me-2 icon" alt="logoWhatsaap" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
