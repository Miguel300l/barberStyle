import React from 'react';
import sillabarberia2 from '../../assets/img/sillabarberia2.webp';
import separador from '../../assets/img/separador.svg';

const AgendarCita = () => {

    return (
        <div className="position-relative" style={{ height: '620px', overflow: 'hidden' }}>
            {/* Imagen de fondo */}
            <img
                src={sillabarberia2}
                className="d-block w-100 object-fit-cover"
                alt="sillabarberia2"
                style={{ height: '620px', objectFit: 'cover' }}
            />

            {/* Capa oscura encima de la imagen */}
            <div
                className="position-absolute start-0 top-0 w-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    height: '620px',
                }}
            ></div>

            {/* Texto encima de la imagen */}
            <section
                className="container-fluid position-absolute top-50 start-50 translate-middle text-white p-5"
                style={{ width: '100%' }}
            >
                <div className="row d-flex flex-wrap justify-content-center align-items-center">
                    <div className="col-md-6 text-center">
                        <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify', marginTop: '-120px' }}>
                            <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 5vw, 40px)', textTransform: 'uppercase' }}>
                                Programar una cita
                            </p>

                            <div className="d-flex justify-content-center">
                                <img
                                    src={separador}
                                    alt="separador"
                                    style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                                />
                            </div>

                            <p style={{ fontSize: '16px', textAlign: 'center', padding: '10px' }}>
                                Programa tu cita de forma rápida y sencilla. Elige el servicio que necesitas, el horario que más te convenga y deja en nuestras manos tu estilo. Tu tiempo es valioso, y nosotros nos encargamos del resto.
                            </p>

                            {/* Botón personalizado */}
                            <div className="d-flex justify-content-center mt-2">
                                <a
                                    href="https://wa.me/573103669753"
                                    className="btn btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="contactar por whatsApp para solicitar una pagina web"
                                    style={{
                                        marginTop: '-6px',
                                        fontFamily: 'Lato',
                                        backgroundColor: '#C59D5F',
                                        color: 'white',
                                        padding: '10px 25px',
                                        fontSize: '16px',
                                        borderRadius: '20px',
                                        textTransform: 'uppercase',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Reservar Ahora
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgendarCita;