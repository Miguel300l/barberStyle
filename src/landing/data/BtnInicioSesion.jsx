import React, { useEffect, useState } from "react";
import box_arrow_right from "../../assets/img/icons/box-arrow-right.svg";
/* import person_circle from "../../assets/img/icons/person-circle.svg"; */
/* import bell2 from "../../assets/img/icons/bell2.svg"; */
import gear from "../../assets/img/icons/gear.svg";
import { Link } from "react-router-dom";
import { misNotificaciones } from "../../administrador/data/DataAdmin";
import jwt_decode from "jwt-decode";
import FechaNotificacion from "../../assets/js/FechaNotificacion";
import { notificacionVista } from "./DataInicioSesion";
import Swal from "sweetalert2";
import VerNotificacion from "../modales/VerNotificacion";
import { verProfesional } from "../../profesionales/data/dataProfesional";


const BtnInicioSesion = () => {
  const [notificaciones, setnotificaciones] = useState([]);
  console.log(notificaciones)
  const [siHay, setSiHay] = useState("");
  const [datosMotivoNoti, setDatosMotivoNoti] = useState({})
  const [dataPro, setDataPro] = useState({})
  console.log(notificaciones)


  const botonesIncio = () => {
    const tokenAprendiz = localStorage.getItem("Token-Aprendiz");
    const tokenProfesional = localStorage.getItem("Token-Profesional");
    const tokenAdministrador = localStorage.getItem("Token-Administrador");
    const token = tokenAprendiz || tokenProfesional || tokenAdministrador;
    if (!token) {
      return (
        <>
          <button
            className="btn btn-green ms-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Iniciar Sesion
          </button>
        </>
      );
    } else if (token) {
      setTimeout(function () {
        localStorage.clear();
        Swal.fire({
          title: "Por tu seguridad se ha cerrado sesión",
          icon: "success"
        }).then(() => {
          Swal.clickConfirm(location.reload());

        });
      }, 3600000);
      const { id } = jwt_decode(token);
      const notificacionesAbiertas = (id, motivo, nombreProf, apellidoProf, fechaAplazada, titulo, nombreApre, apellidoApre, numeroDocApre, usuarioNom, usuarioApe, contenido) => {
        (async () => {
          notificacionVista(id);
        })();
        const datos = {
          motivo, nombreProf, apellidoProf, fechaAplazada, titulo, nombreApre, apellidoApre, numeroDocApre, usuarioNom, usuarioApe, contenido
        }
        setDatosMotivoNoti(datos)
      };
      useEffect(() => {
        (async () => {

          const dataNotificaciones = await misNotificaciones(id);
          dataNotificaciones.forEach((i) => {
            i.estado === false ? setSiHay(i.estado) : ""

          })
          setnotificaciones(dataNotificaciones.reverse());
        })();
      }, []);

      const obtenerNotificaciones = async () => {
        const dataNotificaciones = await misNotificaciones(id);
        setnotificaciones(dataNotificaciones.reverse());
      };


      useEffect(() => {
        (async () => {
          const { data } = await verProfesional(id)
          setDataPro(data)
        })()
      }, [])

      return (
        <>
          <div className="navbar-nav ms-3 user">
            <li className="nav-item dropdown ">
              <Link
                className="nav-link "
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                <div
                  className="d-inline-block position-relative"
                  onClick={obtenerNotificaciones}
                  onMouseMove={obtenerNotificaciones}
                >
                  <img src={bell2} alt="icon-cerrarsesion" className="" />
                  <span className={siHay === false ? "position-absolute top-0 start-100 translate-middle p-1 bg-green border  rounded-circle" : ""}></span>
                </div>
              </Link>

              <div className="dropdown-menu dropdown-menu-end notificaciones">
                <h6 className="dropdown-header ">
                  {notificaciones.length <= 0
                    ? "No tienes notificaciones"
                    : "Notificaciones"}
                </h6>

                {notificaciones.map((n, i) => (
                  // aquí muestras cada notificación en tu componente
                  <div className={n.estado === false ? "notificacion dropdown-item contenedor-notificaciones notificacion-no-leida" : "dropdown-item contenedor-notificaciones "} onClick={() => notificacionesAbiertas(n._id, n.motivo, n.profesionalId?.nombres, n.profesionalId?.apellidos, n.fechaAplazada, n.titulo, n.usuarioId?.nombres, n.usuarioId?.apellidos, n.usuarioId?.documento.numeroDocumento)} key={i} data-bs-toggle="modal" data-bs-target="#verNotificacion">
                    <div className="media">
                      <div className="media-body">
                        <h6 className="mt-0 mb-1 fw-bold ">{n.titulo}</h6>
                        <p className=" text-wrap ">{n.contenido}</p>
                        <small className="text-muted">
                          {FechaNotificacion(n.createdAt)}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          </div>

          <div className="navbar-nav ms-3 user">
            <li className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >{dataPro && dataPro.perfil && dataPro.perfil.urlImg ?
                <img src={dataPro.perfil.urlImg} alt="icon-user" style={{ width: "70px", height: "70px" }} className="rounded-circle" />
                :
                <img src={person_circle} alt="icon-user" style={{ width: "70px", height: "70px" }} className="rounded-circle" />
                }
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end bg-green border-green"
                style={{ backgroundColor: "#000000" }}
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
                  <button
                    className="dropdown-item text-white"
                    onClick={() => localStorage.clear(location.reload())}
                  >
                    <img
                      src={box_arrow_right}
                      alt="icon-cerrarsesion"
                      className="me-3"
                    />
                    Cerrar Sesion
                  </button>
                </li>
              </ul>
            </li>
          </div>
          <VerNotificacion datosMotivoNoti={datosMotivoNoti} />
        </>
      );
    }
  };
  return botonesIncio();
};
export default BtnInicioSesion;
