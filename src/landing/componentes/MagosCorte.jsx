import React from 'react';
import separador from '../../assets/img/separador.svg';

const MagosCorte = () => {

    return (
        <section className="container-fluid p-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'center' }}>
                        <p
                            className="fw-bold text-uppercase"
                            style={{ fontSize: 'clamp(16px, 3vw, 40px)', textAlign: 'center' }}
                        >
                            Conoce a nuestro mago del cabello
                        </p>

                        <div className="d-flex justify-content-center">
                            <img
                                src={separador}
                                alt="separador"
                                style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                            />
                        </div>

                        <p style={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                            Nuestro equipo está formado por barberos apasionados y expertos en cuidar tu estilo. Cada uno aporta su talento, dedicación y creatividad para ofrecerte una experiencia única y personalizada. Conoce a los magos detrás de cada transformación.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MagosCorte;