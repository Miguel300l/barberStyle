import React from 'react';
import tijera from '../../assets/img/tijera.svg';
import maquina from '../../assets/img/maquina.svg';
import estiloCorte from '../../assets/img/estiloCorte.svg';
import cuchilla from '../../assets/img/cuchilla.svg';
import tijeraGrande from '../../assets/img/tijeraGrande.png';
import separador from '../../assets/img/separador.svg';

const servicios = [
  {
    icon: tijera,
    titulo: 'CORTE DE PELO',
    descripcion: 'Servicios espléndidos que realzan tu imagen, combinando estructuras precisas con un estilo totalmente personalizado.'
  },
  {
    icon: maquina,
    titulo: 'CORTE MAQUINA',
    descripcion: 'Ideal para un estilo limpio y definido. Precisión y rapidez para lograr un fade en tendencia y fácil de mantener.'
  },
  {
    icon: cuchilla,
    titulo: 'AFEITADO',
    descripcion: 'Un afeitado clásico con técnica y estilo, dejando tu piel suave, con un acabado impecable y una frescura inigualable.'
  },
  {
    icon: estiloCorte,
    titulo: 'ESTILO',
    descripcion: 'Estilo único y personalizado, adaptado a tu personalidad y el look que deseas proyectar.'
  },

];

const ServiciosBarberia = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f9f9f9', marginTop: '-40px' }}>

      <section className="container-fluid p-5">
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
              <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 4vw, 40px)', textTransform: 'uppercase', }}>Qué hacemos</p>

              <div className="d-flex justify-content-center">
                <img
                  src={separador}
                  alt="separador"
                  style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                />
              </div>

              <p style={{ fontSize: '16px', textAlign: 'center', padding: '10px' }}>
                En BarberStyle nos dedicamos a ofrecer cortes de cabello y barba personalizados, creando un estilo único para cada cliente. Con un enfoque en calidad, precisión y atención, garantizamos una experiencia relajante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="row align-items-start">
        {/* Imagen decorativa */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img src={tijeraGrande} alt="Tijeras grandes" className="image-hover" style={{ maxHeight: '340px' }} />
        </div>

        {/* Servicios */}
        <div className="col-md-8">
          {servicios.map((servicio, idx) => (
            <div className="d-flex align-items-start mb-4" key={idx}>
              <img src={servicio.icon} alt={servicio.titulo} className="me-3" style={{ width: '50px', height: '50px' }} />
              <div>
                <h5 style={{ fontSize: 'clamp(18px, 4vw, 20px)', fontFamily: 'Bebas Neue', marginBottom: '4px' }}>
                  {servicio.titulo}
                </h5>
                <p style={{ fontSize: '14px', fontFamily: 'Lato', margin: 0 }} className="text-muted">
                  {servicio.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiciosBarberia;
