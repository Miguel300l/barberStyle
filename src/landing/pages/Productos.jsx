import React, { useEffect, useState, useRef } from "react";
import { datosInicio } from "../data/DataInicioSesion";
import FechaNotificacion from "../../assets/js/FechaNotificacion";
import productos from '../../assets/img/carrucel_productos.jpg'
import music from "../../assets/img/videos/musica_fondo.mp3";

const Productos = () => {
    const [dataInicio, setDataInicio] = useState([]);
    const [imgSeleccionada, setImgSeleccionada] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const datos = await datosInicio();
            const destacados = datos.filter(d => d.tipo === "noticia");
            setDataInicio(destacados.reverse());
        };

        fetchData();

        const startMusic = () => {

            if (audioRef.current) {
                audioRef.current.volume = 0.15;
                audioRef.current.play().catch(() => { });
            }

            window.removeEventListener("click", startMusic);
            window.removeEventListener("scroll", startMusic);

        };

        window.addEventListener("click", startMusic);
        window.addEventListener("scroll", startMusic);
    }, []);

    return (
        <>
            <div className="position-relative w-100" style={{ height: '750px' }}>
                {/* audio */}
                <audio ref={audioRef} loop>
                    <source src={music} type="audio/mp3" />
                </audio>
                {/* Imagen de fondo */}
                <img
                    src={productos}
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    alt="productos"
                    style={{ objectFit: 'cover' }}
                />

                {/* Capa oscura */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
                ></div>

                <div
                    className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
                    style={{
                        fontFamily: 'Lato, sans-serif',
                        fontSize: 'clamp(24px, 5vw, 50px)',
                        zIndex: 2,
                    }}
                >
                    PRODUCTOS
                </div>
            </div>

            <div className="row gx-3 justify-content-center mx-3 mx-md-4" style={{ marginTop: '40px' }}>
                {dataInicio.map((data) => (

                    <div
                        key={data._id}
                        className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4"
                    >
                        <div className="card producto-card rounded-0 d-flex flex-column w-100 h-100">

                            <img
                                className="card-img-top"
                                src={data.imagen?.urlImg}
                                alt="img"
                                style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                                onClick={() => setImgSeleccionada(data.imagen?.urlImg)}
                            />

                            <div className="card-body d-flex flex-column flex-grow-1">
                                <h5 className="card-title text-uppercase text-center mb-3">
                                    {data.titulo}
                                </h5>

                                <p className="card-text">
                                    {data.descripcion}
                                </p>

                                {data.pdf?.urlPdf && (
                                    <a
                                        href={data.pdf.urlPdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto"
                                    >
                                        Ver documento
                                    </a>
                                )}
                            </div>

                            <div className="card-footer bg-green text-center">
                                <small className="text-muted1">
                                    {data.updatedAt ? FechaNotificacion(data.updatedAt) : ""}
                                </small>
                            </div>

                        </div>
                    </div>

                ))}
            </div>
            <div className="p-5"></div>
            <div className="p-3"></div>
            {/* MODAL */}
            {imgSeleccionada && (
                <div className="modal-img" onClick={() => setImgSeleccionada(null)}>
                    <span className="cerrar">&times;</span>
                    <img src={imgSeleccionada} alt="grande" className="img-grande" />
                </div>
            )}
        </>
    );
};

export default Productos;
