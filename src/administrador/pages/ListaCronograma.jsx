/* import Imgnav from "../../assets/img/profesional.webp"; */
import { datosCronograma } from "../data/DataAdmin";
import { useState, useEffect } from "react";
import ActualizarCronograma from '../modales/ActualizarCronograma';
/* import Check from '../../assets/img/icons/check-circle.svg' */
import { horaLocal } from '../../assets/js/FormatoHora';
import { format, subDays } from 'date-fns';
import { es } from 'date-fns/locale';


const Cronograma = () => {

  const [dataCronograma, setDataCronograma] = useState([]);
  const [dataEvento, setDataEvento] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const data = await datosCronograma();
      setDataCronograma(data.reverse());
    }
    fetchData()
  }, []);

  const dataEventos = (_id, descripcion, fecha_inicio, fecha_final, idImg, urlImg, lugar, tipo, titulo, op) => {
    const data = { _id, descripcion, fecha_inicio, fecha_final, idImg, urlImg, lugar, tipo, titulo, op };
    setDataEvento(data)
  }

  return (
    <>
      <div className="col">
        <div className="position-relative d-inline-block w-100">
          <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
          <h1 className="text-titulo position-absolute text-center  w-100">
            SALUD CANINA
            <div className=" d-flex justify-content-around ">
              <div className="bg-green p-1 w-25"></div>
              <div className="bg-green p-1 w-25"></div>
            </div>
          </h1>
        </div>

        <div className="container">

          <div className="container-fluid mt-6">
            <div className="row d-flex justify-content-around">
              {dataCronograma.map((data, i) => (
                <div className="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades" key={i}>
                  <div className="border-green mx-2 px-4 py-3 contenedor-actividades ">
                    <p className="fs-5 fw-bold">
                      {" "}
                      <img src={Check} className="me-3" alt="" />
                      {data.titulo}
                    </p>
                    <p className="fs-6  m-0">
                      <b>Descripcion:</b>{data.descripcion}
                    </p>
                    <p className="fs-6  m-0">
                      <b>Lugar:</b> {data.lugar}
                    </p>
                    <p className="fs-6  m-0">
                      <b>Hora:</b> {horaLocal(data.fecha_inicio)}
                    </p>
                    <div className="d-flex justify-content-around">
                      <button className="btn btn-sm btn-secondary mt-3 me-3 " data-bs-toggle="modal" data-bs-target="#actualizarCronograma" onClick={() => dataEventos(data._id, data.descripcion, data.fecha_inicio, data.fecha_final, data.imagen.idImg, data.imagen.urlImg, data.lugar, data.tipo, data.titulo, 2)}>Actualizar</button>

                      <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                        {" "}
                        {(format(subDays((new Date(data.fecha_inicio)), 0), 'eeee d \'de\' MMMM', { locale: es }))}

                      </p>
                    </div>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
        <ActualizarCronograma data={dataEvento} />
      </div>
    </>
  );
};

export default Cronograma;
