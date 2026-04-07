import ImagenTitulo from '../../assets/img/fondoAdmin.webp';
import React, { useState, useEffect } from 'react';
import { datosInicio, eliminarEvento } from '../../administrador/data/DataAdmin';
import ActualizarEvento from '../modales/ActualizarEvento';
import handleDelete from '../../assets/js/Handledelete';
import FechaNotificacion from '../../assets/js/FechaNotificacion';
import Swal from 'sweetalert2';

const Inicio = () => {
    const [dataInicio, setDataInicio] = useState([]);
    const [dataEvento, setDataEvento] = useState({
        _id: "",
        descripcion: "",
        fecha_inicio: "",
        fecha_final: "",
        idImg: "",
        urlImg: "",
        lugar: "",
        tipo: "",
        titulo: "",
        video: ""
    });

    const [filtroSeleccionado, setFiltroSeleccionado] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await datosInicio(1);
            setDataInicio(data.reverse());
        }
        setTimeout(function () {
            localStorage.clear();
            Swal.fire({
                title: "Por tu seguridad se ha cerrado sesión",
                icon: "success"
            }).then(() => {
                Swal.clickConfirm(location.reload());
            });
        }, 3600000);

        fetchData()
    }, []);

    const verEventos = async (e) => {
        const loading = Swal.fire({
            title: 'Filtrando',
            text: 'Espere un momento...',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const data = await datosInicio(e);
        setDataInicio(data.reverse());
        loading.close()
    }

    const dataEventos = (_id, descripcion, fecha_inicio, fecha_final, idImg, urlImg, lugar, tipo, titulo, video) => {
        const data = { _id, descripcion, fecha_inicio, fecha_final, idImg, urlImg, lugar, tipo, titulo, video };
        setDataEvento(data)
    }

    return (
        <>
            <div className="col-12">
                <div className="position-relative w-100">
                    <img src={ImagenTitulo} className="w-100 img-titulo-fondo" alt="" />
                    <h1 className="text-titulo position-absolute text-center w-100">
                        EVENTOS
                        <div className="d-flex justify-content-around mt-2">
                            <div className="bg-green p-1 w-25"></div>
                            <div className="bg-green p-1 w-25"></div>
                        </div>
                    </h1>
                </div>

                {/* Filtro */}
                <div className="filter-container my-4 px-3">
                    <div className="d-flex justify-content-end">
                        <select
                            id="filtro-eventos"
                            className="form-select w-100 w-sm-75 w-md-50"
                            defaultValue=""
                            onChange={(e) => verEventos(e.target.value)}
                            style={{ maxWidth: '350px' }}
                        >
                            <option value="" disabled>
                                Filtrar por...
                            </option>
                            <option value="destacado">Tutorial</option>
                            <option value="noticia">Evento</option>
                        </select>
                    </div>
                </div>

                {/* Tarjetas tipo "box" responsivas */}
                <div className="row gx-0 justify-content-center">
                    {dataInicio.map((data) => {
                        const hasVideo = data.video && data.video !== "null" && data.video.trim() !== "";
                        const hasImage = data.imagen?.urlImg;

                        const mostrarImagen =
                            (!filtroSeleccionado && hasImage) || (filtroSeleccionado === "noticia" && hasImage);

                        const mostrarVideo =
                            (!filtroSeleccionado && hasVideo) || (filtroSeleccionado === "destacado" && hasVideo);

                        return (
                            <div
                                className="col-12 col-sm-12 col-md-12 col-lg-6 mx-5 mb-3 d-flex"
                                key={data._id}
                                style={{ maxWidth: '400px' }}
                            >
                                <div
                                    className="box border rounded-0 d-flex flex-column w-100"
                                    style={{ height: '100%', overflow: 'hidden' }}
                                >
                                    {/* Imagen */}
                                    {mostrarImagen && (
                                        <img
                                            className="w-100"
                                            src={data.imagen.urlImg}
                                            alt="slider1"
                                            style={{ height: '200px', objectFit: 'cover', flexShrink: 0 }}
                                        />
                                    )}

                                    {/* Video */}
                                    {mostrarVideo && (
                                        <div style={{ width: '100%', height: '200px', flexShrink: 0 }}>
                                            <video
                                                width="100%"
                                                height="100%"
                                                controls
                                                style={{ objectFit: 'cover', display: 'block' }}
                                            >
                                                <source src={data.video} type="video/mp4" />
                                                Tu navegador no soporta la reproducción de video.
                                            </video>
                                        </div>
                                    )}

                                    <div
                                        className="mx-3 my-2 d-flex flex-column justify-content-between"
                                        style={{ flexGrow: 1 }}
                                    >
                                        <h5 className="text-uppercase text-center mb-3">{data.titulo}</h5>
                                        <p
                                            className="text-body"
                                            style={{
                                                flexGrow: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 4,
                                                WebkitBoxOrient: 'vertical',
                                            }}
                                        >
                                            {data.descripcion}
                                        </p>

                                        {data.pdf?.urlPdf && (
                                            <p className="mt-2">
                                                <a href={data.pdf.urlPdf} target="_blank" rel="noopener noreferrer">
                                                    Ver documento
                                                </a>
                                            </p>
                                        )}
                                    </div>

                                    <div className="bg-green px-3 py-2" style={{ flexShrink: 0 }}>
                                        <small className="text-muted1 d-flex justify-content-between align-items-center flex-wrap gap-2">
                                            Última actualización {data.updatedAt ? FechaNotificacion(data.updatedAt) : ""}
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-secondary me-2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#actualizarEvento"
                                                    onClick={() =>
                                                        dataEventos(
                                                            data._id,
                                                            data.descripcion,
                                                            data.fecha_inicio,
                                                            data.fecha_final,
                                                            data.imagen.idImg,
                                                            data.imagen.urlImg,
                                                            data.lugar,
                                                            data.tipo,
                                                            data.titulo,
                                                            data.video
                                                        )
                                                    }
                                                >
                                                    Actualizar
                                                </button>
                                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(data._id)}>
                                                    Eliminar
                                                </button>
                                            </div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='p-4'></div>
            </div>

            <ActualizarEvento data={dataEvento} />
        </>
    );
}

export default Inicio;
