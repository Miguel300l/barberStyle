import React from 'react';
import barbero from '../../assets/img/barbero.webp';
import barbero2 from '../../assets/img/mago2.webp';
import '../../assets/css/card.css';

const CardGiro = () => {

  return (
    <div className="container" style={{ marginTop: '-110px' }}>
      <div className="row justify-content-center">

        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">

          <div className="flip-card">

            <div className="flip-card-inner">

              <div className="flip-card-front">
                <img
                  src={barbero}
                  alt="barbero"
                  className="card-img"
                />
              </div>

              <div className="flip-card-back">
                <div className="card-body text-center contenido-card">

                  <h3 className="card-title nombre-barbero">
                    Jhonatan'S
                  </h3>

                  <p className="descripcion-barbero">
                    Especialista en cortes tradicionales, diseños freestyle y perfilado de barba.
                    Me enfoco en precisión, detalle y perfección en cada servicio, para quienes buscan elegancia,
                    distinción y un estilo que marque la diferencia.
                  </p>

                </div>
              </div>

            </div>

          </div>

        </div>


        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">

          <div className="flip-card">

            <div className="flip-card-inner">

              <div className="flip-card-front">
                <img
                  src={barbero2}
                  alt="barbero2"
                  className="card-img"
                />
              </div>

              <div className="flip-card-back">

                <div className="card-body text-center contenido-card">

                  <h3 className="card-title nombre-barbero">
                    Carlos
                  </h3>

                  <p className="descripcion-barbero">
                    Especialista en cabello rizado, aplicando técnicas precisas
                    para lograr cortes definidos y adaptados a cada estilo.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CardGiro;