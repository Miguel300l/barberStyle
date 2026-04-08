import React from 'react';
import estiloCorte from '../../assets/img/estiloCorte.svg';

const services = [
  {
    icon: estiloCorte,
    title: 'Curso',
    price: '1.150.000',
    description: 'Aprende técnicas modernas de barbería en 18 clases teóricas y prácticas. Incluye certificado al finalizar el curso.',
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
