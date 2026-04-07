import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { verAdmin, actualizarAdministrador } from '../../administrador/data/DataAdmin';

const DatosAjustes = () => {
    const [id, setId] = useState("");
    const [adminDatos, setAdminDatos] = useState({
        nombres: "",
        apellidos: "",
        correo: "",
        genero: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('Token-Administrador');
        if (!token) {
            return;
        } else {
            const { id } = jwt_decode(token);
            setId(id);

            const fetAdmin = async () => {
                const { data } = await verAdmin(id);
                setAdminDatos({
                    ...data,
                    password: "",
                });
            };
            fetAdmin();
        }
    }, []);

    const handleTarget = ({ target }) => {
        setAdminDatos({ ...adminDatos, [target.name]: target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {
            ...adminDatos,
            password: adminDatos.password === "" ? undefined : adminDatos.password,
        };

        try {
            await actualizarAdministrador(id, updatedData);
        } catch (error) {
            console.error("Error al actualizar los datos", error);
        }
    };

    return (
        <>
            {/* <!-- Modal datos ajustes --> */}
            <div className="modal fade" id="modalInicioDatos" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content text-white" style={{ backgroundColor: '#1E1E1E' }}>
                        <form
                            className="needs-validation"
                            action=""
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <div className="modal-header">
                                <h4 className="modal-title w-100 text-center">Perfil</h4>
                                <button
                                    type="button"
                                    className="btn-close bg-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-white">
                                <div className="container">
                                    <div className="col-md-7 col-lg-10 mx-auto">
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <label htmlFor="firstName" className="form-label">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white border-green"
                                                    value={adminDatos.nombres}
                                                    id="firstName"
                                                    placeholder=""
                                                    required
                                                    name="nombres"
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="lastName" className="form-label">
                                                    Apellido
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white border-green"
                                                    value={adminDatos.apellidos}
                                                    id="lastName"
                                                    placeholder=""
                                                    required
                                                    name="apellidos"
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Correo</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="correo"
                                                    value={adminDatos.correo}
                                                    placeholder=""
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="password" className="form-label">Contraseña</label>
                                                <div className="input-group">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        value={adminDatos.password}
                                                        placeholder="Ingresa nueva contraseña"
                                                        onChange={handleTarget}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary text-white"
                                                        onClick={togglePasswordVisibility}
                                                        style={{ height: "100%" }}
                                                    >
                                                        {showPassword ? "Ocultar" : "Mostrar"}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="validationGenero" className="form-label">Género</label>
                                                <select
                                                    className="form-select"
                                                    name="genero"
                                                    value={adminDatos.genero}
                                                    onChange={handleTarget}
                                                    id="validationGenero"
                                                    aria-label="Default select example"
                                                    required
                                                >
                                                    <option value="" disabled>Género</option>
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="Femenino">Femenino</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer w-100 d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{
                                        backgroundColor: '#000000',
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "clamp(16px, 1.5vw, 16px)",
                                        color:'white'
                                    }}
                                >
                                    ACTUALIZAR CAMBIOS
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Fin Modal Datos Ajustes --> */}
        </>
    );
};

export default DatosAjustes;