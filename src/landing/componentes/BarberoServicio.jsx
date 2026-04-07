import React from 'react';
import salonBarberia1 from '../../assets/img/salonBarberia1.jpeg';
import barbero3D from '../../assets/img/barbero3D.png';
import separador from '../../assets/img/separador.svg';

const BarberoServicio = () => {
  return (
    <section
      className="hero-section"
      style={{
        background: `url(${salonBarberia1}) center/cover no-repeat`,
        position: 'relative',
        width: '100%',
        height: '100vh',
        maxHeight: '480px',
        overflow: 'visible',
        zIndex: 1,
        marginTop: '20px',
      }}
    >
      {/* Overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 2,
        }}
      />

      {/* Imagen del barbero sobresaliendo */}
      <img
        src={barbero3D}
        alt="mago del cabello"
        style={{
          position: 'absolute',
          top: 'clamp(-80px, -15vw, -130px)',
          left: '5%',
          height: 'auto',
          maxHeight: '610px',
          width: 'clamp(180px, 35vw, 373px)',
          zIndex: 3,
        }}
      />

      {/* Contenido */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 4,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="row w-100 justify-content-center text-white">
          <div className="col-12 col-md-8 col-lg-6 text-center px-3">

            <h1
              className="fw-bold"
              style={{
                fontSize: "clamp(22px, 5vw, 36px)",
                fontFamily: '"Bebas Neue", sans-serif'
              }}
            >
              MAGO DEL CABELLO
            </h1>

            <div className="d-flex justify-content-center">
              <img
                src={separador}
                alt="separador"
                className="img-fluid"
                style={{
                  width: "clamp(70px, 12vw, 120px)",
                  margin: "10px 0"
                }}
              />
            </div>

            <p
              style={{
                fontSize: "clamp(13px, 2.5vw, 16px)",
                fontFamily: '"Lato", sans-serif'
              }}
            >
              Transformamos cada corte en una experiencia única.<br />
              Con precisión, técnica y estilo, creamos más que un look.
            </p>
            <p
              style={{
                fontSize: "clamp(13px, 2.5vw, 16px)",
                fontFamily: '"Lato", sans-serif'
              }}
            >
              Cada trazo refleja dedicación y pasión por el detalle.<br />
              No se trata solo de cambiar tu imagen, sino de realzar tu esencia.<br />
              La magia está en entender lo que necesitas y superarlo.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default BarberoServicio;
