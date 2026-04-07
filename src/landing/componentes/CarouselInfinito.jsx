import React from 'react';
import carousel from '../../assets/img/carrucel.webp';
import carousel2 from '../../assets/img/carrucel2.webp';
import carousel3 from '../../assets/img/carrucel3.webp';
import carousel4 from '../../assets/img/carrucel4.webp';
import carousel5 from '../../assets/img/carrucel5.webp';
import carousel6 from '../../assets/img/carrucel6.webp';

const CarouselInfinito = () => {

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-content">
            <div className="image-set">
              <img
                src={carousel}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel5}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel6}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel4}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel2}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel3}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
            </div>
            <div className="image-set">

              <img
                src={carousel}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel4}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel5}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel2}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
              <img
                src={carousel3}
                alt="Trabajos de Barbería - Carrusel"
                width="306"
                height="408"
                loading="lazy"
                decoding="async"
                style={{
                  width: '306px',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselInfinito;