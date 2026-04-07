import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { verAdmin } from "../../administrador/data/DataAdmin";
import { acualizarAprendiz } from "../data/DataRegistro";

const DatosAjustes = () => {
  const [id, setId] = useState("");
  const [imagen, setImagen] = useState(null);
  const [mostrar, setMostrar] = useState({
    nombres: "",
    apellidos: "",
    idImg: "",
    correo: "",
    genero: "",
    numTelefono: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("Token-Aprendiz");
    if (!token) {
      return;
    } else {
      const { id } = jwt_decode(token);
      setId(id);

      const fetAprendiz = async () => {
        const { data } = await verAdmin(id);
        console.log(data);
        setMostrar(data);
      };
      fetAprendiz();
    }
  }, []);

  const handleTarget = ({ target }) => {
    setMostrar({ ...mostrar, [target.name]: target.value });
  };

  const handleOnsumbit = (e) => {
    e.preventDefault();

    // Put para actulalizar
    const fromDateImg = new FormData();
    fromDateImg.append("nombres", mostrar.nombres);
    fromDateImg.append("apellidos", mostrar.apellidos);
    fromDateImg.append("imgAprendiz", imagen);
    fromDateImg.append("correo", mostrar.correo);
    fromDateImg.append("genero", mostrar.genero);
    fromDateImg.append("numTelefono", mostrar.numTelefono);

    acualizarAprendiz(id, fromDateImg);
  };

  function selectImage() {
    const imageInput = document.getElementById("image-input");
    imageInput.click();

    imageInput.onchange = function (e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const image = document.getElementById("image");
        image.src = e.target.result;
      };

      reader.readAsDataURL(file);
    };
  }

  return (
    <>
      {/* <!-- Modal datos ajustes --> */}
      <div
        className="modal fade"
        id="modalInicioDatos"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-color-blue  text-white ">
            <form
              className="needs-validation"
              action=""
              autoComplete="off"
              onSubmit={handleOnsumbit}
            >
              <div className="modal-header">
                <h4 className="modal-title w-100 text-center ">Perfil</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-white">
                <div className="container">
                  <div className="col-md-12 col-lg-10 mx-auto">
                    <div
                      className="d-flex justify-content-center mb-4 t-3"
                      style={{ position: "relative" }}
                    >
                      {mostrar && mostrar.perfil && mostrar.perfil.urlImg ? (
                        <>
                          <img
                            src={mostrar.perfil.urlImg}
                            width={"40%"}
                            id="image"
                            className="shadow-black rounded-circle w-25"
                            onClick={() => selectImage()}
                            alt=""
                            style={{
                              cursor: "pointer",
                              width: "100px",
                              height: "100px",
                            }}
                          />
                          <input
                            type="file"
                            id="image-input"
                            accept="image/* "
                            onChange={(e) => setImagen(e.target.files[0])}
                            style={{ display: "none" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          ></div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label ">
                          Nombre
                        </label>
                        <input
                          type="text"
                          className="form-control bg-white border-green"
                          name="nombres"
                          value={mostrar.nombres}
                          id="firstName"
                          placeholder=""
                          required
                          onChange={handleTarget}
                        />
                      </div>

                      <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">
                          Apellido
                        </label>
                        <input
                          type="text"
                          className="form-control  bg-white border-green"
                          name="apellidos"
                          value={mostrar.apellidos}
                          id="lastName"
                          placeholder=""
                          required
                          onChange={handleTarget}
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Correo
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="correo"
                          value={mostrar.correo}
                          placeholder=""
                          onChange={handleTarget}
                        />
                      </div>

                      <div className="col-12">
                        <label
                          htmlFor="validationGenero"
                          className="form-label"
                        >
                          Genero
                        </label>
                        <select
                          className="form-select"
                          name="genero"
                          value={mostrar.genero}
                          onChange={handleTarget}
                          id="validationGenero"
                          aria-label="Default select example"
                          required
                        >
                          <option disable="true">Genero</option>
                          <option defaultValue="Masculino">Masculino</option>
                          <option defaultValue="Femenino">Femenino</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Telefono<span className="text-muted"></span>
                        </label>
                        <input
                          type="number"
                          className="form-control  bg-white border-green"
                          id="email"
                          name="numTelefono"
                          value={mostrar.numTelefono}
                          placeholder=""
                          required
                          onChange={handleTarget}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer w-100  d-flex justify-content-center">
                <button type="submit" className="btn btn-green border-green">
                  Actualizar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Fin Modal Datos Ajustes --> */}
    </>
  );
};

export default DatosAjustes;
