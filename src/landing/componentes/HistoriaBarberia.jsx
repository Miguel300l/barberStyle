import React from 'react';
import historiaBarber from '../../assets/img/historiaBarber.jpeg';
import historiaBarber2 from '../../assets/img/historiaBarber2.jpeg';

const HistoriaBarberia = () => {

  return (
    <div className="container-fluid px-3 px-md-5">
      {/* Sección 1 */}
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
          <div className="box card-hover" style={{ width: '20rem', margin: '10px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '404px' }}>
            <img
              src={historiaBarber}
              alt="historiaBarber"
              style={{ objectFit: 'cover', height: '240px', width: '100%' }}
            />
            <div className="card-body text-center" style={{ marginTop: '6px' }}>
              <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', padding: '16px' }}>2025</h5>
              <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                Comenzamos nuestro proceso formando estudiantes y adquiriendo experiencia en el área educativa, certificando talento y fortaleciendo bases sólidas en barbería profesional.
              </p>

            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column justify-content-center mx-3 mx-sm-4 mx-md-0" style={{ height: '100%' }}>
          <div>
            <h5
              className="card-title text-center"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '24px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                padding: '20px',
              }}
            >
              2025
            </h5>
            <div
              style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                textAlign: 'justify',
              }}
            >
              <p>
                Decidimos dar el paso y crear nuestro propio proyecto: ACADEMY JHONATAN’S BARBERSTYLE, un espacio donde la formación y el servicio se unen para brindar oportunidades reales.
              </p>
              <p>
                Nos especializamos en estructura de corte, técnicas modernas, difuminados precisos, líneas definidas, diseños y cejas, siempre enfocados en la atención personalizada y en que cada cliente viva una experiencia de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center mx-3 mx-sm-4 mx-md-0 mb-4 mb-md-0" style={{ height: '100%' }}>
          <div>
            <h5
              className="card-title text-center"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '24px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                padding: '20px',
              }}
            >
              2026
            </h5>
            <p
              style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                textAlign: 'justify',
              }}
            >

              Hoy seguimos creciendo con un propósito claro: formar profesionales y cambiar vidas. Más que enseñar barbería, buscamos enfocar a cada estudiante en un camino de disciplina, trabajo y superación personal.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="box card-hover" style={{ width: '20rem', margin: '10px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '404px' }}>
            <img
              src={historiaBarber2}
              alt="historiaBarber2"
              style={{ objectFit: 'cover', height: '240px', width: '100%' }}
            />
            <div className="card-body text-center" style={{ marginTop: '6px' }}>
              <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', padding: '16px' }}>2026</h5>
              <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                Además de formar barberos, también ofrecemos servicios de alta calidad. Si buscas un corte con estilo, precisión y buen trato, este es tu lugar. Agenda tu cita y vive la experiencia.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default HistoriaBarberia;
