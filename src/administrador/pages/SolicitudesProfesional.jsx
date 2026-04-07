import ModalProfesional from '../modales/ModalProfesional';
import MotivoRecProf from '../modales/MotivoRecProf'
/* import Imgnav from "../../assets/img/Dog1.webp"; */
import { verPro } from '../../landing/data/DataInicioSesion'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { solicitudesRechazadasProfesional, solicitudesprofesional, habilitarPro, inhabilitarPro } from '../data/DataAdmin';


const Profesional = () => {
  const [data, setData] = useState([]);
  const [solirechazadas, setSoliRechazadas] = useState([]);
  const [dataPro, setDataPro] = useState({});
  const [datosPro, setDatosPro] = useState([]);


  useEffect(() => {
    const datos = async () => {
      const solicitudesProfesional = await solicitudesprofesional()
      const soliRechazadasProfesional = await solicitudesRechazadasProfesional();
      setSoliRechazadas(soliRechazadasProfesional.reverse())
      setData(solicitudesProfesional.reverse())
    }
    datos()
  }, [])

  useEffect(() => {
    const fetchProfesional = async () => {
      try {
        const usuarioData = await verPro();
        setDatosPro(usuarioData.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfesional();
  }, []);

  const enviarDataPro = (nombre, apellido, tipoDoc, numDoc, profesion, correo, telefono, id, motivoRechazo) => {
    const dataProfesional = {
      nombre, apellido, tipoDoc, numDoc, profesion, correo, telefono, id, motivoRechazo
    }
    setDataPro(dataProfesional)
  }

  const inhabilitar = async (id, checked) => {
    if (checked) {
      habilitarPro(id);
    } else {
      inhabilitarPro(id)
    }
  }

  return (
    <>

      <div className="position-relative d-inline-block w-100">
        <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center w-100">
          SOLICITUD PROFESIONAL
          <div className="d-flex justify-content-around">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      {/* Fin Titulo */}

      {/* Fin selecionar filtro */}

      {/* Inicio Contenido solicitud profesional*/}
      <main className="mt-3">
        <div className="table-responsive">
          <table className="table table-hover table-sm border-green">
            <thead className="border-1">
              <tr className="table-active bg-color-blue text-white">
                <th>NOMBRE</th>
                <th>CC</th>
                <th>PROFESIÓN</th>
                <th>ESTADO</th>
                <th>OPCIONES</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((d, i) => (
                  <tr key={d._id}>
                    <td data-label="paciente">{d.nombres}{" "}{d.apellidos}</td>
                    <td data-label="Nit">{d.documento.numeroDocumento}</td>
                    <td data-label="profesion">{d.profesion}</td>
                    <td data-label="descripcion">
                      <Link className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#profesional" onClick={() => enviarDataPro(d.nombres, d.apellidos, d.documento.tipo, d.documento.numeroDocumento, d.profesion, d.correo, d.numTelefono, d._id)} style={{ cursor: "pointer" }}> Ver mas...</Link>
                    </td>
                  </tr>
                ))
              }
              {
                solirechazadas.map((d, i) => (
                  <tr key={i}>
                    <td data-label="paciente">{d.nombres}{" "}{d.apellidos}</td>
                    <td data-label="Nit">{d.documento.numeroDocumento}</td>
                    <td data-label="profesion">{d.profesion}</td>
                    <td className=" link-light ">
                      <div >
                        <p className="bg-danger rounded-pill text-center w-75">Rechazada</p>
                      </div>
                    </td>
                    <td data-label="descripcion">
                      <Link className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#rechazoProfesional" onClick={() => enviarDataPro(d.nombres, d.apellidos, d.documento.tipo, d.documento.numeroDocumento, d.profesion, d.correo, d.numTelefono, d._id, d.motivoRechazo)} style={{ cursor: "pointer" }}> Ver mas...</Link>
                    </td>

                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>
      </main>
      {/* Modales */}
      <ModalProfesional dataProfesional={dataPro} />
      <MotivoRecProf dataProfesional={dataPro} />

      {/* Fin Contenido solicitud profesional */}


      {/* Inicio tabla Profesionales  */}
      <main>
        <div className="table-responsive">
          <table className="table table-hover table-sm border-green">
            <thead className="border-1 text-center w-100">
              <tr className='text-center col-sm-12 table-active'>
                <th colSpan="6">PROFESIONALES ACTIVOS</th>
              </tr>
            </thead>
            <thead className="border-1">
              <tr className="table-active bg-color-blue text-white">
                <th>NOMBRE</th>
                <th>CC</th>
                <th>PROFESIÓN</th>
                <th>OPCIONES</th>
                <th>ACTIVAR</th>
              </tr>
            </thead>

            <tbody>
              {datosPro.map((p, i) => (
                <tr key={p._id}>
                  <td data-label="paciente">{`${p.nombres} ${p.apellidos}`}</td>
                  <td data-label="Nit">{p.documento.numeroDocumento}</td>
                  <td data-label="profesion">{p.profesion}</td>

                  <td className="link-light">
                    <div>
                      <p
                        className={`bg-${p.estado.habilitado === false ? "danger" : "success"
                          } rounded-pill text-center w-75`}
                      >
                        {p.estado.habilitado === false
                          ? "Deshabilitado"
                          : "Habilitado"}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-check-inline form-switch">
                      <input
                        type="checkbox"
                        checked={p.estado.habilitado}
                        onChange={(e) =>
                          inhabilitar(p._id, e.target.checked)
                        }
                        className="form-check-input"
                      />
                    </div>
                  </td>
                </tr>
              ))
              }

            </tbody>
          </table>
        </div>

      </main>
      {/* Fin tabla Profesional */}


    </>
  );
};

export default Profesional;
