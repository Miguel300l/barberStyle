import React from "react";
/* import Users1 from "../../assets/img/user1.png"; */
import RechazarProfesional from './RechazarProfesional'

const ModalProfesional = ({ dataProfesional }) => {
  return (
    <>
      {/* Modal solicitud profesional */}

      <div
        className="modal fade"
        id="rechazoProfesional"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
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
                    <p className=" fw-bold">Nit: </p>
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

                </div>
                <div className="col-6">
                  <div className=" d-flex">
                    <p className=" fw-bold">Profesion: </p>
                    <p className="ms-2">{dataProfesional.profesion}</p>
                  </div>
                  <div className=" d-flex">
                    <p className=" fw-bold">Motivo Rechazo: </p>
                    <p className="ms-2">{dataProfesional.motivoRechazo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RechazarProfesional idProfesional={dataProfesional.id} />
    </>
  );
};

export default ModalProfesional;
