import React from 'react';
import tijera from '../../assets/img/tijera.svg';
import maquina from '../../assets/img/maquina.svg';
import cuchilla from '../../assets/img/cuchilla.svg';

const services = [
    {
        icon: tijera,
        title: 'CORTE DE PELO',
        price: '20.000',
        description: 'Servicios espléndidos que realzan tu imagen, combinando estructuras precisas con un estilo totalmente personalizado.',
    },
    {
        icon: maquina,
        title: 'CORTE MAQUINA',
        price: '20.000',
        description: 'Ideal para un estilo limpio y definido. Precisión y rapidez para lograr un fade en tendencia y fácil de mantener.',
    },
    {
        icon: cuchilla,
        title: 'AFEITAR',
        price: '10.000',
        description: 'Un afeitado clásico con técnica y estilo, dejando tu piel suave, con un acabado impecable y una frescura inigualable.',
    },
];

export default function ServicesList() {
    return (
        <div className="container-md" style={{ marginTop: '-167px' }}>
            <div className="services-wrapper">
                <ul className="list-unstyled services-list">
                    {services.map((service, idx) => (
                        <li key={idx} className="service-item mb-4">
                            <div className="d-flex align-items-center service-header">
                                <img src={service.icon} alt={service.title} className="service-icon" />
                                <h5 className="service-title ms-3 mb-0 text-uppercase">
                                    {service.title}
                                </h5>
                                <div className="dots flex-grow-1 mx-3"></div>
                                <span className="service-price">{service.price}</span>
                            </div>
                            <p className="service-desc mt-2 mb-0 text-center">{service.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
