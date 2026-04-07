import React, {useState } from 'react'
import {rechazarProfesional} from '../data/DataAdmin' 
//Opciones Profesionales 


const AplazarCharla = ({idProfesional}) => {
    const [motivoRechazo, setMotivoRechazo] = useState("");

const handleSubmit =(e)=>{
    e.preventDefault();

 rechazarProfesional(motivoRechazo,idProfesional);

} 
    return (
        <>
            {/* Modal Aplazar Charla */}
            <div className="modal" id="rechazarProfesional" data-bs-backdrop="static" >
                <div className="modal-dialog ">
                    <div className="modal-content bg-color-blue text-white">
                        <div className="modal-header">
                            <h3 className="modal-title w-100 text-center " id="exampleModalINLabel">Rechazo solicitud profesional</h3>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form className="row g-2 needs-validation" onSubmit={handleSubmit}>

                                {/* Motivo rechazo */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="validationCustom01" className="form-label">MOTIVO RECHAZO</label>
                                    <textarea type="text" className="form-control" id="validationCustom01" onChange={(e)=>setMotivoRechazo(e.target.value)} />
                                </div>

                                <div className="col-12 d-flex justify-content-center mb-2 pb-6 pt-2">
                                    <button className="btn btn-green w-25" type="submit">Rechazar</button>
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
