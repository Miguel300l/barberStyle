import React, { useEffect, useRef } from "react";
import separador from '../../assets/img/separador.svg';
import CortesPrecio from './CortesPrecio'

const precios = "/carrusel_precios.webp";

const Cortes = () => {

    return (<>
        <section className="container-fluid p-5">
            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
                        <p className="fw-bold text-center text-nowrap" style={{ fontSize: 'clamp(18px, 4vw, 40px)', textTransform: 'uppercase', }}>cortes con estilo</p>

                        <div className="d-flex justify-content-center">
                            <img
                                src={separador}
                                alt="separador"
                                style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                            />
                        </div>

                        <p style={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                            Cada corte está pensado para destacar: estilo, precisión y detalle en cada servicio, logrando resultados que hablan por ti y hacen que vuelvan.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div style={{ marginTop: '100px' }}></div>
        <CortesPrecio />
    </>
    );
};

export default Cortes;
