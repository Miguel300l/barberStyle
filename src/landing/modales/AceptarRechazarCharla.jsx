import React from "react";

const NotificacionAceptar = () => {
  return (
    <>
      {/* Modal notificaciones aceptar y rechazar  */}
      <div
        className="modal fade"
        id="modalAseptarRecha"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-color-blue  text-white">
            <div className="modal-header">
              <h5
                className="modal-title text-center w-100"
                id="exampleModalLabel"
              >
                Solicitud Charla
              </h5>
              <button
                type="button"
                className="btn-close bg-white "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body text-center ">
              Hola Fernando, Tu solicitud quedo asignada para el lunes 30 de
              Abril del 2023 a las 16:00:00 horas del dia, Pedimos su
              confirmacion de la solicitud
            </div>
            <div className="modal-footer mx-auto">
              <button
                type="button"
                className="btn btn-green"
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
              <button type="button" className="btn btn-danger">
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fin notificacion de aseptar y rechazar */}
    </>
  );
};

export default NotificacionAceptar;
