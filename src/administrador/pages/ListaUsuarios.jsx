/* import Imgnav from "../../assets/img/historia.jpg"; */
/* import Person from '../../assets/img/icons/person-lines-fill.svg' */
import { useEffect, useState } from "react";
import { verUsuarios, inhabilitarUsu, habilitarUsu } from "../data/DataAdmin";




const Solicitudes = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuarioData = await verUsuarios();
        setUsuarios(usuarioData.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsuarios();
  }, []);

  const inhabilitar = async (id, checked) => {
    if (checked) {

      habilitarUsu(id);
    } else {
      inhabilitarUsu(id);
    }
  };
  return (
    <>
      {/* <!-- Contenido --> */}
      <div className="position-relative d-inline-block w-100">
        <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center  w-100">
          USUARIOS
          <div className=" d-flex justify-content-around ">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      {/* <!-- Fin Titulo --> */}

      {/* <!-- Inicio Contenido --> */}
      <div className="table-responsive w-100">
        <table className="table caption-top mt-3 w-100">
          <thead>
            <tr className="bg-color-blue text-white">
              <th scope="col">
                <img
                  src={Person}
                  alt=""
                  className=" bg-green-opacity p-2 rounded-2"
                />
              </th>
              <th scope="col">NOMBRE</th>
              <th scope="col">IDENTIFICACIÓN</th>
              <th scope="col">PERSONA</th>
              <th scope="col">ESTADO</th>
              <th scope="col">ACTIVAR</th>
              {/* <th Roll scope="col text-center">Roll</th> */}
            </tr>
          </thead>
          <tbody>

            {usuarios.map((user, i) => (
              <tr key={user._id}>
                <th scope="row">{i + 1}</th>
                <td>{`${user.nombres} ${user.apellidos}`}</td>
                <td>{user.documento.numeroDocumento}</td>
                <td>{user.programa.ficha}</td>
                <td className="link-light">
                  <div>
                    <p
                      className={`bg-${user.estado.habilitado === false ? "danger" : "success"
                        } rounded-pill text-center w-75`}
                    >
                      {user.estado.habilitado === false
                        ? "Deshabilitado"
                        : "Habilitado"}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="form-check form-check-inline form-switch">
                    <input
                      type="checkbox"
                      checked={user.estado.habilitado}
                      onChange={(e) =>
                        inhabilitar(user._id, e.target.checked)
                      }
                      className="form-check-input"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <!-- Fin Contenido --> */}
    </>
  );
};

export default Solicitudes;
