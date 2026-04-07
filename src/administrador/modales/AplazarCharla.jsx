import React, { useEffect, useState } from 'react'
import { opProfesionales ,aplazarCharlaData} from '../data/DataAdmin';
//Opciones Profesionales


const AplazarCharla = (props) => {
    const [profesionales, setProfesionales] = useState([]);
    const [fechaAplazamiento, setFechaAplazamiento] = useState("");
    const [motivoAplazamiento, setMotivoAplazamiento] = useState("");
    const [profesionalAplazamiento, setProfesionalAplazamiento] = useState("");
useEffect(() => {
    const dataProfesionales = async () => {
        const data = await opProfesionales();
        setProfesionales(data)
    }
    dataProfesionales();
}, [])
const handleSubmit =(e)=>{
    e.preventDefault();

 aplazarCharlaData(props.id,motivoAplazamiento,fechaAplazamiento,profesionalAplazamiento);

} 
const fechaActual = new Date();
fechaActual.setHours(fechaActual.getHours() - 5);
const fechaInicio = fechaActual.toISOString().slice(0, 16);
    return (
        <>
            {/* Modal Aplazar Charla */}
            <div className="modal" id="modalAplazar"  data-bs-backdrop="static">
                <div className="modal-dialog ">
                    <div className="modal-content bg-color-blue text-white">
                        <div className="modal-header">
                            <h3 className="modal-title w-100 text-center " id="exampleModalINLabel">Aplazamiento</h3>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form className="row g-2 needs-validation" onSubmit={handleSubmit}>

                                {/* Fecha y hora de inicio */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}>
                                    <label htmlFor="validationCustom02" className="form-label">FECHA Y HORA APLAZAMIENTO</label>
                                    <input type="datetime-local" className="form-control" 
                                    min={fechaInicio} id="validationCustom02" onChange={(e)=>setFechaAplazamiento(e.target.value)}/>
                                </div>

                                {/* Seleccionar instructor */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="exampleFormControlSelect1" className="form-label">SELECCIONAR PROFESIONAL</label>
                                    <select className="form-select col-md-12 border-green" defaultValue="1" id="validationCustom04" onChange={(e)=>setProfesionalAplazamiento(e.target.value)}>
                                        <option disable="true" >Profesionales disponibles...</option>
                                        {profesionales.map((data) => (
                                            <option value={data._id} key={data._id}>{data.nombres}{" "}{data.apellidos}{"  -    "}{data.profesion}</option>
                                        ))
                                        }
                                    </select>
                                </div>

                                {/* Motivo aplazamiento */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="validationCustom01" className="form-label">MOTIVO APLAZAMIENTO</label>
                                    <textarea type="text" className="form-control" id="validationCustom01" onChange={(e)=>setMotivoAplazamiento(e.target.value)} />
                                </div>

                                {/* Botón CREAR EVENTO */}
                                <div className="col-12 d-flex justify-content-center mb-2 pb-6 pt-2">
                                    <button className="btn btn-green w-25" type="submit">Aplazar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* FinModal Alazar Charla */}
        </>
    )
}
export default AplazarCharla;
