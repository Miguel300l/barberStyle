/* import Imgnav from '../../assets/img/dognosotros.webp' */
/* import Person from '../../assets/img/icons/person-lines-fill.svg' */
/* import Pencil from '../../assets/img/icons/pencil-square.svg' */
import { useState, useEffect } from 'react'
import { datosPqrs } from '../data/DataAdmin'
import ResponderPqrs from '../modales/ResponderPqrs'

const Usuarios = () => {
  const [dataPqrs, setDataPqrs] = useState([])
  const [dataModalPqrs, setdataModalPqrs] = useState("")


  useEffect(() => {
    (async () => {
      const data = await datosPqrs()
      setDataPqrs(data.reverse())
    })()

  }, [])

  const modalPqrs = (tipo, motivo, id) => {
    const datos = {
      tipo, motivo, id
    }
    setdataModalPqrs(datos)
  }
  return (
    <>

      {/* <!-- Contenido --> */}

      <div className="col">

        <div className="position-relative d-inline-block w-100" >
          <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
          <h1 className="text-titulo position-absolute text-center  w-100">PQRS
            <div className=" d-flex justify-content-around ">
              <div className="bg-green p-1 w-25" ></div>
              <div className="bg-green p-1 w-25" ></div>
            </div>
          </h1>
        </div>
        {/* <!-- Fin Titulo --> */}


        {/* Fin selecionar filtro */}


        {/* <!-- Inicio Contenido --> */}
        <div className='table-responsive w-100 mt-3'>


          <table className="table caption-top w-100">
            <thead>
              <tr className='text-white' style={{ backgroundColor: '#000000' }} >

                <th className='col-1'><img src={Person} alt="" className="ms-2 bg-green-opacity p-2 rounded-2" /></th>
                <th className='col-3'>NOMBRES</th>
                <th className='col-2'>PERSONA</th>
                <th className='col-2'>TIPO</th>
                <th className=' col-5' >PQRS</th>
                <th className='col-1 '><img src={Pencil} alt="" className=" bg-green-opacity p-2 rounded-2" /></th>
              </tr>
            </thead>
            <tbody>
              {dataPqrs.map((d, i) => (
                <tr key={i}>
                  <th>{i}</th>
                  <td>{d.id_usuario.nombres}{" "}{d.id_usuario.apellidos}</td>
                  <td>{d.id_usuario.programa.ficha}</td>
                  <td>{d.tipo}</td>
                  <td className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>{d.motivo}
                  </td>
                  <td>

                    <button type='submit' className='bg-success btn p-1 border-0 link-light text-center' data-bs-toggle="modal" href="" data-bs-target="#modalpqrs" onClick={() => modalPqrs(d.tipo, d.motivo, d._id)}>Responder</button>
                  </td>
                </tr>

              ))}


            </tbody>
          </table>
        </div>

      </div>
      {/* <!-- Fin Contenido --> */}
      <ResponderPqrs dataModalPqrs={dataModalPqrs} />
    </>
  )
}

export default Usuarios;