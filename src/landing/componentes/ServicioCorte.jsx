import React from 'react';
import barberPrecio from '../../assets/img/barberPrecio.webp';
import servicioCorte2 from '../../assets/img/servicioCorte2.webp';
import servicioCorte3 from '../../assets/img/servicioCorte3.jpeg';
import servicioCorte4 from '../../assets/img/servicioCorte4.jpeg';
import tijera from '../../assets/img/tijera.svg';
import maquina from '../../assets/img/maquina.svg';
import estiloCorte from '../../assets/img/estiloCorte.svg';
import cuchilla from '../../assets/img/cuchilla.svg';
import separador from '../../assets/img/separador.svg';
import '../../assets/css/videoSection.css'

const services = [
    { id: 1, title: 'Corte de Pelo', img: barberPrecio, icon: tijera, description: 'Servicios espléndidos que realzan tu imagen, combinando estructuras precisas con un estilo totalmente personalizado.' },
    { id: 2, title: 'Corte maquina', img: servicioCorte2, icon: maquina, description: 'Ideal para un estilo limpio y definido. Precisión y rapidez para lograr un fade en tendencia y fácil de mantener.' },
    { id: 3, title: 'Estilo Personalizado', img: servicioCorte3, icon: estiloCorte, description: 'Diseños únicos adaptados a tu personalidad y estilo. Nuestro barbero creará un corte que refleje quién eres.' },
    { id: 4, title: 'Perfilado y Detalles', img: servicioCorte4, icon: cuchilla, description: 'Un afeitado clásico con técnica y estilo, dejando tu piel suave, con un acabado impecable y una frescura inigualable.' }
];

const ServicesSection = () => (
    <section className="container py-5 services-section" style={{ marginTop: '-180px' }}>

        <section className="container-fluid p-5">
            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
                        <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 5vw, 40px)', textTransform: 'uppercase', }}>Nuestro servicio</p>

                        <div className="d-flex justify-content-center">
                            <img
                                src={separador}
                                alt="separador"
                                style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                            />
                        </div>

                        <p style={{ fontSize: '16px', textAlign: 'center', padding: '10px' }}>
                            Nuestro servicio está diseñado para ofrecerte una experiencia única. Con un enfoque personalizado, nos aseguramos de que cada corte, afeitado y detalle se ajuste a tus necesidades.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {services.map((service) => (
            <div key={service.id} className="row align-items-start mb-5 service-row">
                <div className="col-lg-5 d-flex justify-content-center justify-content-lg-start">
                    <img src={service.img} alt={service.title} className="service-img rounded mb-3 mb-lg-0" />
                </div>
                <div className="col-lg-6">
                    <div className="service-content">
                        <img src={service.icon} alt="icon" className="service-icon mb-2 d-block mx-auto" />
                        <h3 className="service-title mb-3 text-center">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                    </div>
                </div>
            </div>
        ))}

        <h3 className="text-center mb-5">
            UBICACIÓN
        </h3>

        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.068607544737!2d-76.56854582527227!3d2.484243097494466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30041156f8329d%3A0xa235acbb8460fd11!2sCra.%2012%20%23%2068%20NORTE-11%2C%20Popay%C3%A1n%2C%20Cauca!5e0!3m2!1ses!2sco!4v1775265009000!5m2!1ses!2sco"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación BarberStyle"
            ></iframe>
        </div>
    </section >


);

export default ServicesSection;
