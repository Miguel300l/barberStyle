import React, { useState, useEffect } from "react";
import { registroProfesional } from "../data/DataRegistro";
import Swal from "sweetalert2";
import "../../assets/css/estilos.css";
const Registrase = () => {
  //Registro Aprendiz
  const [nombres, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipo, setTipo] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [profesion, setProfesion] = useState("");
  const [imgProfesional, setImgProfesional] = useState(null);
  const [correo, setCorreo] = useState("");
  const [numTelefono, setNumTelefono] = useState("");
  const [contrasenaUno, setContrasenaUno] = useState("");
  const [contrasenaDos, setContrasenaDos] = useState("");
  const [genero, setGenero] = useState("");

  const validarCampo = (expresion, valor) => {
    if (expresion.test(valor)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!validarCampo(/^[a-zA-Z0-9\_\-]{1,40}$/, nombres)) {
    //     return Swal.fire({
    //         icon: "error",
    //         title: "Error en el nombre",
    //     });
    // }

    // if (!validarCampo(/^[a-zA-Z0-9\_\-]{1,40}$/, apellidos)) {
    //     return Swal.fire({
    //         icon: "error",
    //         title: "Error en el apellido",
    //     });
    // }

    if (!validarCampo(/^3\d{8,13}$/, numTelefono)) {
      return Swal.fire({
        icon: "error",
        title: "Error en el Numero Telefono",
      });
    }

    if (
      !validarCampo(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, correo)
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error en el correo",
      });
    }

    if (!validarCampo(/^.{8,20}$/, contrasenaUno)) {
      return Swal.fire({
        icon: "error",
        title: "Error en la contraseña",
        text: "La contraseña debe tener entre 8 y 20 caracteres.",
      });
    }

    if (contrasenaUno != contrasenaDos) {
      return Swal.fire({
        icon: "error",
        title: "Contraseñas no coinciden",
      });
    } else {
      const contrasena = contrasenaUno;

      const formData = new FormData();
      formData.append("nombres", nombres);
      formData.append("apellidos", apellidos);
      formData.append("tipo", tipo);
      formData.append("numeroDocumento", numeroDocumento);
      formData.append("genero", genero);
      formData.append("correo", correo);
      formData.append("numTelefono", numTelefono);
      formData.append("profesion", profesion);
      formData.append("imgProfesional", imgProfesional);
      formData.append("contrasena", contrasena);
      formData.append("rol", ["profesional"]);

      registroProfesional(formData);
    }
  };

  return (
    <>
      {/* <!-- Modal Registro Aprendiz --> */}
      <div className="modal" id="registroProfesional">
        <div className="contenedores-modal position-relative  ">
          <div id="modal-usuario-registro ">
            <div className="modal-dialog ">
              <div className="modal-content  text-dark ">
                <form
                  className="needs-validation contenedor-registro rounded-3 mx-3"
                  onSubmit={handleSubmit}
                >
                  <div className="row g-3  text-dark  p-4 rounded-3 ">
                    <div className="w-100 d-flex justify-content-end ">
                      <button
                        type="button"
                        className="btn-close bg-light"
                        style={{ width: "20px", height: "20px" }}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <h3 className="text-center pb-3">Regístrate</h3>

                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        Nombres
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        value={nombres}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-3">
                      <label htmlFor="validationGenero" className="form-label">
                        Tipo{" "}
                      </label>
                      <select
                        className="form-select"
                        id="Genero"
                        aria-label="Default select example"
                        onChange={(e) => setTipo(e.target.value)}
                        required
                      >
                        <option disable="true" defaultValue="">
                          Tipo...
                        </option>
                        <option defaultValue="C.C">C.C</option>
                        <option defaultValue="T.I">T.I</option>
                      </select>
                    </div>
                    <div className="col-sm-9">
                      <label htmlFor="lastName" className="form-label">
                        Numero Documento
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        value={numeroDocumento}
                        onChange={(e) => setNumeroDocumento(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="validationGenero" className="form-label">
                        Profesion{" "}
                      </label>
                      <select
                        className="form-select"
                        id="Genero"
                        aria-label="Default select example"
                        onChange={(e) => setProfesion(e.target.value)}
                        required
                      >
                        <option disable="true" defaultValue="">
                          Profesion...
                        </option>
                        <option defaultValue="Psicologia">Etólogo</option>
                        <option defaultValue="Salud">Médico veterinario</option>
                        <option defaultValue="Deportes">Adiestrador</option>
                        <option defaultValue="Cultura">Cinólogo</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="lastName" className="form-label">
                        Foto de perfil
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        onChange={(e) => setImgProfesional(e.target.files[0])}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="validationGenero" className="form-label">
                        Genero
                      </label>
                      <select
                        className="form-select"
                        id="validationGenero"
                        aria-label="Default select example"
                        value={genero}
                        onChange={(e) => {
                          setGenero(e.target.value);
                        }}
                        required
                      >
                        <option disable="true" key={1}>
                          Genero
                        </option>
                        <option defaultValue="Masculino" key={2}>
                          Masculino
                        </option>
                        <option defaultValue="Femenino" key={3}>
                          Femenino
                        </option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="telefono" className="form-label">
                        Telefono
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="telefono"
                        placeholder=""
                        value={numTelefono}
                        onChange={(e) => setNumTelefono(e.target.value)}
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
                        placeholder=""
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="address1" className="form-label">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="address1"
                        placeholder=""
                        value={contrasenaUno}
                        onChange={(e) => setContrasenaUno(e.target.value)}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">
                        Confirmar Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="address2"
                        placeholder=""
                        value={contrasenaDos}
                        onChange={(e) => setContrasenaDos(e.target.value)}
                      />
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                      <button
                        className="w-50 btn btn-green"
                        type="submit"
                        id="botton-registrar"
                      >
                        Registrar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrase;
