
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { verProfesional } from '../../profesionales/data/dataProfesional'
import { acualizarProfesional } from "../../landing/data/DataRegistro"

 
const DatosAjustes = () => {    

    const [id, setId] = useState("");
    const [imagen, setImagen] = useState(null);
    const [datos, setDatos] = useState({
        nombres: "",
        apellidos: "",
        idImg: "", 
        correo: "",
        genero: "",
        profesion: "",
        numTelefono: "",
    });

    useEffect(() => {

        const token = localStorage.getItem('Token-Profesional');
        if (!token) {

            return
        } else {

            const { id } = jwt_decode(token);
            setId(id);

            const fetProfesional = async () => {
                const { data } = await verProfesional(id)
                setDatos(data);
            }
            fetProfesional()
        }
    }, []);

    const handleTarget = ({ target }) => {
        setDatos({ ...datos, [target.name]: target.value });
    };

    const handleOnsumbit = (e) => {
        e.preventDefault();


        // Put para actulalizar
        const fromProfe = new FormData()
        fromProfe.append('imgProfesional', imagen);
        fromProfe.append('nombres', datos.nombres);
        fromProfe.append('apellidos', datos.apellidos);
        fromProfe.append('correo', datos.correo);
        fromProfe.append('genero', datos.genero);
        fromProfe.append('profesion', datos.profesion);
        fromProfe.append('numTelefono', datos.numTelefono);

        acualizarProfesional(id, fromProfe);

    };

    function selectImage() {

        const imageInput = document.getElementById('image-input');
        imageInput.click();

        imageInput.onchange = function (e) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                const image = document.getElementById('image');
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

                                        <div className="d-flex justify-content-center mb-4 t-3" style={{ position: "relative" }}>
                                            {datos && datos.perfil && datos.perfil.urlImg ? (
                                                <>
                                                    <img
                                                        src={datos.perfil.urlImg}
                                                        width={"40%"}
                                                        id="image"
                                                        className="shadow-black rounded-circle w-25"
                                                        onClick={() => selectImage()}
                                                        alt=""
                                                        style={{ cursor: "pointer", width: "100px", height:"100px" }}
                                                    />  
                                                    <input type="file" id="image-input" accept="image/* " onChange={(e) => setImagen(e.target.files[0])} style={{ display: "none" }} />
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            top: "50%",
                                                            left: "50%",
                                                            transform: "translate(-50%, -50%)",
                                                        }}
                                                    >

                                                    </div>
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
                                                    value={datos.nombres}
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
                                                    value={datos.apellidos}
                                                    id="lastName"
                                                    placeholder=""
                                                    required
                                                    onChange={handleTarget}
                                                />
                                            </div>


                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Correo</label>
                                                <input type="email" className="form-control"
                                                    id="email"
                                                    name="correo"
                                                    value={datos.correo}                        
                                                    placeholder=""
                                                    onChange={handleTarget}

                                                />
                                            </div>

                                            <div className="col-sm-12">
                                                <label htmlFor="firstName" className="form-label ">
                                                    profesion
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white border-green"
                                                    name="profesion"
                                                    value={datos.profesion}
                                                    id="firstName"
                                                    placeholder=""
                                                    required
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="validationGenero" className="form-label">Genero</label>
                                                <select className="form-select"
                                                    name="genero"
                                                    value={datos.genero}                               
                                                    onChange={handleTarget}
                                                    id="validationGenero" aria-label="Default select example" required>
                                                    <option disable="true" >Genero</option>
                                                    <option defaultValue="Masculino" >Masculino</option>
                                                    <option defaultValue="Femenino" >Femenino</option>
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
                                                    value={datos.numTelefono}
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
    )
}

export default DatosAjustes;