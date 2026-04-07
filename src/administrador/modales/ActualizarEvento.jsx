import React, { useState, useEffect } from 'react';
import { actualizarEvento } from '../data/DataAdmin';

const ActualizarEvento = ({ data }) => {
    const [evento, setEvento] = useState('');
    const [tipoEvento, setTipoEvento] = useState('');
    const [lugar, setLugar] = useState('');
    const [fechaInicial, setFechaInicial] = useState('');
    const [imagenes, setImagenes] = useState(null);
    const [video, setVideo] = useState(null);
    const [descripcion, setDescripcion] = useState('');
    const [videoKey, setVideoKey] = useState(0);

    const fechas = (datefecha) => {
        const fecha = new Date(datefecha);
        const año = fecha.getFullYear();
        const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
        const dia = ('0' + fecha.getDate()).slice(-2);
        const hora = ('0' + fecha.getHours()).slice(-2);
        const minutos = ('0' + fecha.getMinutes()).slice(-2);
        return `${año}-${mes}-${dia}T${hora}:${minutos}`;
    };

    useEffect(() => {
        if (!data) return;
        setEvento(data.titulo || '');
        setTipoEvento(data.tipo || '');
        setLugar(data.lugar || '');
        setFechaInicial(fechas(data.fecha_inicio));
        setDescripcion(data.descripcion || '');
        setImagenes(null);
        setVideo(null);
        setVideoKey(0);
    }, [data]);

    useEffect(() => {
        if (!window.cloudinary) return;

        window.myVideoWidget = window.cloudinary.createUploadWidget(
            {
                cloud_name: 'dmzhkgiwu',
                uploadPreset: "ml_default",
                folder: "videos",
                resourceType: "video",
                sources: ["local", "camera", "url"],
            },
            (error, result) => {
                if (!error && result.event === "success") {
                    console.log("Video subido:", result.info);
                    setVideo(result.info.secure_url);
                    setVideoKey(prev => prev + 1);
                }
            }
        );
    }, []);

    const abrirWidgetVideo = () => {
        if (window.myVideoWidget) {
            window.myVideoWidget.open();
        }
    };

    const mostrarLugar = tipoEvento === 'noticia';
    const mostrarImagen = tipoEvento === 'noticia';
    const mostrarVideo = tipoEvento === 'destacado';

    const fechaActual = new Date();
    fechaActual.setHours(fechaActual.getHours() - 5);
    const fechaInicio = fechaActual.toISOString().slice(0, 16);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('titulo', evento);
        formData.append('lugar', lugar);
        formData.append('tipo', tipoEvento);
        formData.append('fecha_inicio', fechaInicial);
        if (imagenes) formData.append('eventoImg', imagenes);
        if (video) formData.append('video', video);
        formData.append('descripcion', descripcion);

        actualizarEvento(data._id, formData);
    };

    const selectFuncion = (e) => {
        setTipoEvento(e);
        setImagenes(null);
        setVideo(null);
        setVideoKey(0);
    };

    const selectImage = () => {
        document.getElementById('image-input').click();
    };

    let videoSrc = null;
    if (video) {
        if (video instanceof File) {
            videoSrc = URL.createObjectURL(video) + `?t=${videoKey}`;
        } else {
            videoSrc = video + `?t=${videoKey}`;
        }
    } else if (data && data.video) {
        videoSrc = data.video;
    }

    return (
        <div className="modal fade" id="actualizarEvento" data-bs-backdrop="static">
            <div className="modal-dialog ">
                <div className="modal-content text-white" style={{ backgroundColor: "#1E1E1E" }}>
                    <div className="modal-header">
                        <h3 className="modal-title w-100 text-center">ACTUALIZAR EVENTO</h3>
                        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" />
                    </div>

                    <div className="modal-body mt-2">
                        <form className="row g-2 needs-validation" onSubmit={handleSubmit}>
                            {mostrarImagen && (
                                <div className="d-flex justify-content-center position-relative" id="con-img">
                                    {(imagenes || data.urlImg) ? (
                                        <>
                                            <img
                                                src={imagenes ? URL.createObjectURL(imagenes) : data.urlImg}
                                                width="50%"
                                                id="image"
                                                className="mb-4 shadow-black"
                                                onClick={selectImage}
                                                alt="Imagen del evento"
                                                style={{ cursor: 'pointer' }}
                                            />
                                            <input
                                                type="file"
                                                id="image-input"
                                                accept="image/*"
                                                onChange={(e) => setImagenes(e.target.files[0])}
                                                style={{ display: 'none' }}
                                            />
                                        </>
                                    ) : (
                                        <button type="button" onClick={selectImage} className="btn btn-secondary mb-4">
                                            Seleccionar Imagen
                                        </button>
                                    )}
                                </div>
                            )}
                            {mostrarVideo && (
                                <div className="col-12 mt-4" style={{ padding: "0 50px" }}>
                                    <button
                                        type="button"
                                        onClick={abrirWidgetVideo}
                                        className="btn btn-light w-100"
                                    >
                                        ACTUALIZAR VIDEO
                                    </button>

                                    {videoSrc && (
                                        <div className="mt-2">
                                            <video key={videoKey} controls width="100%">
                                                <source
                                                    src={videoSrc}
                                                    type="video/mp4"
                                                />
                                                Tu navegador no soporta la reproducción de video.
                                            </video>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="col-12 mt-0" style={{ padding: '0 50px' }}>
                                <label className="form-label">CATEGORIA EVENTO</label>
                                <select
                                    value={tipoEvento}
                                    className="form-control"
                                    onChange={(e) => selectFuncion(e.target.value)}
                                >
                                    <option value="">Seleccionar...</option>
                                    <option value="destacado">Tutorial</option>
                                    <option value="noticia">Evento</option>
                                </select>
                            </div>

                            <div className="col-12 mt-4" style={{ padding: '0 50px' }}>
                                <label className="form-label">TITULO</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Titulo"
                                    value={evento}
                                    onChange={(e) => setEvento(e.target.value)}
                                    required
                                />
                            </div>

                            {mostrarLugar && (
                                <div className="col-12 mt-4" style={{ padding: '0 50px' }}>
                                    <label className="form-label">LUGAR EVENTO</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Lugar adopción"
                                        value={lugar}
                                        onChange={(e) => setLugar(e.target.value)}
                                    />
                                </div>
                            )}

                            <div className="col-12 mt-4" style={{ padding: '0 50px' }}>
                                <label className="form-label">FECHA Y HORA DE INICIO</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    min={fechaInicio}
                                    value={fechaInicial}
                                    onChange={(e) => setFechaInicial(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-12 mt-4" style={{ padding: '0 50px' }}>
                                <label className="form-label">DESCRIPCION</label>
                                <textarea
                                    rows="3"
                                    className="form-control"
                                    placeholder="Ingresar descripcion"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>

                            <div className="col-12 d-flex justify-content-center mb-2 pb-6 pt-4">
                                <button
                                    className="btn"
                                    type="submit"
                                    style={{
                                        backgroundColor: "#000000",
                                        color: "white",
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "16px"
                                    }}
                                >
                                    ACTUALIZAR EVENTO
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActualizarEvento;