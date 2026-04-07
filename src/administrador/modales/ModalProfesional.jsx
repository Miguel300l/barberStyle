import React from "react";
/* import Users1 from "../../assets/img/user1.png"; */
import { aceptarProfesional } from "../data/DataAdmin";
import RechazarProfesional from '../modales/RechazarProfesional'

const ModalProfesional = ({ dataProfesional }) => {
  const btnAceptarProfesional = () => {
    aceptarProfesional(dataProfesional.id);
  }
  return (
    <>
      {/* Modal solicitud profesional */}

      <div
        className="modal fade"
        id="profesional"
        data-bs-backdrop="static"
        data-bs-keyboard="false"

      >
        <div className="modal-dialog modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title text-center w-100 "
                id="staticBackdropLabel"
              >
                SOLICITUD PROFESIONAL
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className=" modal-body">
              <h5>Profesional</h5>
              <div className="row mt-4 ">
                <div className="col-2">
                  <img className="w-100 rounded-circle" src={Users1} />
                </div>
                <div className="col-4">
                  <div className=" d-flex">
                    <p className=" fw-bold">Nombre: </p>
                    <p className="ms-2">{dataProfesional.nombre}{" "}{dataProfesional.apellido}</p>
                  </div>
                  <div className=" d-flex">
                    <p className=" fw-bold">Documento: </p>
                    <p className="ms-2">{dataProfesional.tipoDoc}{" "}{dataProfesional.numDoc}</p>
                  </div>
                  <div className=" d-flex">
                    <p className=" fw-bold">Telefono: </p>
                    <p className="ms-2">{dataProfesional.telefono}</p>
                  </div>
                  <div className=" d-flex">
                    <p className=" fw-bold">Correo: </p>
                    <p className="ms-2">{dataProfesional.correo}</p>
                  </div>
                  <p></p>
                </div>
                <div className="col-6">
                  <div className=" d-flex">
                    <p className=" fw-bold">Profesion: </p>
                    <p className="ms-2">{dataProfesional.profesion}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal" onClick={btnAceptarProfesional}
              >
                Aceptar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#rechazarProfesional"

              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>
      <RechazarProfesional idProfesional={dataProfesional.id} />
    </>
  );
};

export default ModalProfesional;
