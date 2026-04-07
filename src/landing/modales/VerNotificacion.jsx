const VerNotificacion = ({ datosMotivoNoti }) => {
  console.log(datosMotivoNoti);
  const tokenAprendiz = localStorage.getItem("Token-Aprendiz");
  const tokenProfesional = localStorage.getItem("Token-Profesional");
  const tokenAdmin = localStorage.getItem("Token-Administrador");
  if (tokenAprendiz) {
    if (datosMotivoNoti.titulo === "Solicitud Aceptada") {
      return (
        <>
          <div
            className="modal fade"
            id="verNotificacion"
            data-bs-backdrop="static"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-3 w-100 text-center"
                    id="staticBackdropLabel"
                  >
                    {datosMotivoNoti.titulo}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body w-100 text-center">
                  <p className="fw-semibold">
                    Tu solicitud ha sido aceptada con el profesional{" "}
                    {datosMotivoNoti.nombreProf} {datosMotivoNoti.apellidoProf}{" "}
                    y sera atendidad el dia {datosMotivoNoti.fechaAplazada}
                  </p>
                </div>
                <div className="modal-footer d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    className="btn btn-green border-green col-sm-3"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className="modal fade"
            id="verNotificacion"
            data-bs-backdrop="static"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-3 w-100 text-center"
                    id="staticBackdropLabel"
                  >
                    {datosMotivoNoti.titulo}
                  </h1>
                  <button
                    type="button"
                    className="btn-close font-weight-bold"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body w-100 text-center">
                  <p className="fw-semibold">
                    Tu solicitud ha sido aplazada por el motivo{" "}
                    {datosMotivoNoti.motivo} y fue asignada con el profesional{" "}
                    {datosMotivoNoti.nombreProf} {datosMotivoNoti.apellidoProf}{" "}
                    y sera atendidad el dia {datosMotivoNoti.fechaAplazada}
                  </p>
                </div>
                <div className="modal-footer d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    className="btn btn-green border-green col-sm-3"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  } else if (tokenProfesional) {
    return (
      <>
        <div
          className="modal fade"
          id="verNotificacion"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-3 w-100 text-center"
                  id="staticBackdropLabel"
                >
                  {datosMotivoNoti.titulo}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body w-100 text-center">
                Tienes una nueva cita con el Usuario{" "}
                {datosMotivoNoti.nombreApre} {datosMotivoNoti.apellidoApre} con
                número de documento {datosMotivoNoti.numeroDocApre} para el día{" "}
                {datosMotivoNoti.fechaAplazada}
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="btn btn-green border-green col-sm-3"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (tokenAdmin) {
    return (
      <>
        <div
          className="modal fade"
          id="verNotificacion"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-3 w-100 text-center"
                  id="staticBackdropLabel"
                >
                  Motivo Aplazamiento Admin
                </h1>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body fs-4 w-100 text-center">
                {datosMotivoNoti.motivo}
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="btn btn-green border-green col-sm-3"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default VerNotificacion;
