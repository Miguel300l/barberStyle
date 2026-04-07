import React, { useState, useEffect } from "react";
import {
  loginAprendiz,
  loginProfesional,
  loginAdmin,
} from "../../landing/data/DataInicioSesion";
import "../../assets/css/estilos.css";
/* import Email from "../../assets/img/icons/email.svg"; */
/* import Pass from "../../assets/img/icons/pass.svg"; */



const InicioSesion = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  //Login Aprendiz
  const [correoAprendiz, setCorreoAprendiz] = useState("");
  const [contrasenaAprendiz, setContrasenaAprendiz] = useState("");
  //Login Profesional
  const [correoProfesional, setCorreoProfesional] = useState("");
  const [contrasenaProfesional, setContrasenaProfesional] = useState("");
  //LoginAdmin
  const [correoAdmin, setCorreoAdmin] = useState("");
  const [contrasenaAdmin, setContrasenaAdmin] = useState("");
  //LoginAdmin
  const [btnActive, setbtnActive] = useState(false);
  // Validar Login
  const [validationLogin, setValidationLogin] = useState({
    inicioSesion: "",
    validationCustom02: "",
  });
  const [errors, setErrors] = useState({});

  const handleSumbitAprendiz = (e) => {
    e.preventDefault();

    loginAprendiz(correoAprendiz, contrasenaAprendiz);
    setErrors(Validation(validationLogin));
    setValidationLogin((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
    setCorreoAprendiz("");
    setContrasenaAprendiz("");
  };

  const handleSumbitProfesional = (e) => {
    e.preventDefault();

    loginProfesional(correoProfesional, contrasenaProfesional);
    setCorreoProfesional("");
    setContrasenaProfesional("");
  };

  const handleSumbitAdmin = (e) => {
    e.preventDefault();

    loginAdmin(correoAdmin, contrasenaAdmin);
    setCorreoAdmin("");
    setContrasenaAdmin("");
  };
  useEffect(() => {
    if (btnActive === false) {
      document
        .querySelector("#tab-login-profesional")
        .classList.remove("active-green");
      document
        .querySelector("#tab-login-aprendiz")
        .classList.toggle("active-green");
    } else if (btnActive === true) {
      document
        .querySelector("#tab-login-aprendiz")
        .classList.remove("active-green");
      document
        .querySelector("#tab-login-profesional")
        .classList.toggle("active-green");
    }
  }, [btnActive]);



  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        data-bs-backdrop="static"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center w-100"
                id="exampleModalLabel"
              >
                Inicia Sesion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul
                className="nav nav-pills nav-justified mb-3 "
                style={{ backgroundColor: "#E9FFE2" }}
                id="ex1"
                role="tablist"
              >
                <li className="nav-item  " role="presentation">
                  <a
                    className="nav-link active active-green"
                    onClick={() => setbtnActive(false)}
                    id="tab-login-aprendiz"
                    data-bs-toggle="pill"
                    href="#pills-login-aprendiz"
                    role="tab"
                    aria-controls="pills-login-aprendiz"
                    aria-selected="true"
                  >
                    Usuario
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link  "
                    onClick={() => setbtnActive(true)}
                    id="tab-login-profesional"
                    data-bs-toggle="pill"
                    href="#pills-login-profesional"
                    role="tab"
                    aria-controls="pills-login-profesional"
                    aria-selected="false"
                  >
                    Profesional
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                {/*Inicio Sesion Aprendiz */}
                <div
                  className="tab-pane show active bg-opacity-0"
                  id="pills-login-aprendiz"
                  role="tabpanel"
                  aria-labelledby="tab-login-aprendiz"
                >
                  <form
                    className="form__container row g-2 needs-validation pt-4"
                    onSubmit={handleSumbitAprendiz}
                  >
                    <div className="form__group" style={{ padding: "0 70px" }}>
                      <input
                        type="email"
                        placeholder=" "
                        className="form__input"
                        id="inicioSesion"
                        name="inicioSesion"
                        onChange={(e) => setCorreoAprendiz(e.target.value)}
                      />
                      {errors.inicioSesion && (
                        <span className="text-danger">
                          {errors.inicioSesion}
                        </span>
                      )}
                      <label htmlFor="inicioSesion" className="form__label">
                        Correo
                      </label>
                    </div>

                    <div className="form__group" style={{ padding: "0 70px" }}>
                      <input
                        onChange={(e) => setContrasenaAprendiz(e.target.value)}
                        type="password"
                        placeholder=" "
                        name="validationCustom02"
                        className="form__input"
                        id="validationCustom02"
                      />
                      {errors.validationCustom02 && (
                        <span className="text-danger">
                          {errors.validationCustom02}
                        </span>
                      )}
                      <label
                        htmlFor="validationCustom02"
                        className="form__label"
                      >
                        Contraseña
                      </label>
                    </div>

                    <div className="form_paragraph col-12 d-flex justify-content-end align-items-center">
                      <span className="mt-2 me-4 pe-2 d-flex justify-content-end align-items-center">
                        No tienes cuenta?{" "}
                        <button
                          type="button"
                          className="btn text-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#registroAprendiz"
                        >
                          Regístrate
                        </button>
                      </span>
                    </div>
                    <div className="button w-100 d-flex justify-content-center">
                      <button
                        className="col-12 mb-2 btn btn-green w-50"
                        type="submit"
                      >
                        Iniciar Sesion
                      </button>
                    </div>
                  </form>
                </div>

                {/*Inicio Sesion Profesional */}
                <div
                  className="tab-pane "
                  id="pills-login-profesional"
                  role="tabpanel"
                  aria-labelledby="tab-login-profesional"
                >
                  <form
                    className="form__container row pt-4 g-2 needs-validation"
                    onSubmit={handleSumbitProfesional}
                  >
                    <div className="form__group" style={{ padding: "0 70px" }}>
                      <input
                        type="email"
                        className="form__input"
                        placeholder=" "
                        id="validationCustom01"
                        name="validationCustom01"
                        onChange={(e) => setCorreoProfesional(e.target.value)}
                      />
                      <label
                        htmlFor="validationCustom01"
                        className="form__label"
                      >
                        Correo
                      </label>
                    </div>
                    <div className="form__group" style={{ padding: "0 70px" }}>
                      <input
                        type="password"
                        className="form__input"
                        placeholder=" "
                        id="validationCustom02"
                        onChange={(e) =>
                          setContrasenaProfesional(e.target.value)
                        }
                      />
                      <label
                        htmlFor="validationCustom02"
                        className="form__label"
                      >
                        Contraseña
                      </label>
                    </div>

                    <div className="form_paragraph col-12 d-flex justify-content-end align-items-center">
                      <span className="mt-2 me-4 pe-2 d-flex justify-content-end align-items-center">
                        No tienes cuenta?{" "}
                        <button
                          type="button"
                          className=" btn text-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#registroProfesional"
                        >
                          Regístrate
                        </button>
                      </span>
                    </div>
                    <div className="button w-100 d-flex justify-content-center">
                      <button
                        className="col-12  mb-2 btn btn-green w-50"
                        type="submit"
                      >
                        Iniciar Sesion
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*inicio Sesion Admin */}
      <div className="modal text-white" id="inicioSesionAdmin">
        <div className="modal-dialog">
          <div className="modal-content text-black">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 w-100 text-center"
                id="exampleModalLabel"
                style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '20px'
                }}
              >
                Inicia Sesión
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form
                className="row pt-2 g-2 needs-validation"
                onSubmit={handleSumbitAdmin}
              >
                <div className="text-center w-100">
                  <h2
                    className="mb-5"
                    style={{
                      fontFamily: 'Bebas Neue',
                      fontSize: '30px'
                    }}
                  >
                    Administrador
                  </h2>
                </div>

                <div className="form__group" style={{ padding: "0 70px" }}>
                  <span className="icon_login">
                    {/* <img src={Email} className="mail" alt="" /> */}
                  </span>
                  <input
                    type="email"
                    className="form__input"
                    placeholder=" "
                    id="validationCustom01"
                    value={correoAdmin}
                    onChange={(e) => setCorreoAdmin(e.target.value)}
                  />
                  <label
                    htmlFor="validationCustom01"
                    className="form__label"
                    style={{
                      fontFamily: 'Lato',
                      fontSize: '20px'
                    }}
                  >
                    Usuario
                  </label>

                </div>
                <div className="form__group" style={{ padding: "0 70px" }}>
                  <span className="icon_login" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                    {/*     <img
                      src={Pass}
                      className="mail"
                      alt="icon"
                    /> */}
                  </span>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    className="form__input"
                    placeholder=" "
                    id="validationCustom02"
                    value={contrasenaAdmin}
                    onChange={(e) => setContrasenaAdmin(e.target.value)}
                    style={{ fontFamily: "Lato", fontSize: "20px" }}
                  />
                  <label htmlFor="validationCustom02" className="form__label">
                    Contraseña
                  </label>
                </div>

                <div className="w-100 pt-2 d-flex justify-content-center">
                  <button
                    className="col-12 mb-2 btn w-50"
                    type="submit"
                    style={{
                      backgroundColor: '#1E1E1E',
                      color: 'white',
                      fontFamily: 'Lato',
                      borderRadius: '10px'
                    }}
                  >
                    Iniciar Sesión
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InicioSesion;
