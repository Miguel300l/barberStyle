import React,{useState} from 'react'
import { agregarPrograma } from '../data/DataAdmin'

function AgregarFicha() {

    const [data, setData] = useState({
        nombre:"",
        ficha:"",
        fecha_inicio:"",
        fecha_final:"",
        jornada:""
    })

    const handleTarget= ({target})=>{
        setData({...data, [target.name]:target.value})
    }
const handleSubmit= (e)=>{
e.preventDefault()
agregarPrograma(data)
}
    return (
        <>
            <div className="modal fade" id="agregarFicha" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-color-blue text-white">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">DATOS DE EDADES</h1>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mx-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombrePrograma" className="form-label">Rango de edad</label>
                                    <input type="text" name='nombre' value={
                                        data.nombre} onChange={handleTarget} placeholder='Joven, Sr/a, Tercera edad' className="form-control" id="nombrePrograma" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fichaPrograma" className="form-label">Rangos</label>
                                    <input type="Number" className="form-control" name='ficha' value={data.ficha} id="fichaPrograma" onChange={handleTarget} placeholder="1, 2, 3..." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jornada" className="form-label">Rango de edades</label>
                                    <select className="form-select" name="jornada"  onChange={handleTarget} id="jornada" aria-label="Default select example" required>
                                        <option disable="true" >Elija rango de edad...</option>
                                        <option defaultValue="Manana" >Joven</option>
                                        <option defaultValue="Tarde" >Sr/a</option>
                                        <option defaultValue="Noc
                                        he" >Tercera edad</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fechaInicio" className="form-label">Fecha inicio</label>
                                    <input type="date" name='fecha_inicio' className="form-control" id="fechaInicio"   onChange={handleTarget}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fechaFin" className="form-label">Fecha fin</label>
                                    <input type="date" name='fecha_final'  onChange={handleTarget} className="form-control" id="fechaFin" />
                                </div>
                                <div className='w-100 text-center mt-4'>

                                    <button type="submit" className="btn btn-green">Agregar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AgregarFicha
