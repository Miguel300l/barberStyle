import React from 'react';
import logoProducto from '../../assets/img/logoProducto.webp';
import logoProducto2 from '../../assets/img/logoProducto2.webp';
import logoProducto3 from '../../assets/img/logoProducto3.webp';
import logoProducto4 from '../../assets/img/logoProducto4.webp';
import '../../assets/css/estiloPrecio.css'

const logos = [
  logoProducto,
  logoProducto2,
  logoProducto3,
  logoProducto4,
];

export default function LogoProducto() {
  const track = [...logos, ...logos];

  return (
    <div className="container-fluid py-5 bg-dark text-white" style={{ marginTop: '-70px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <i className="bi bi-arrow-left fs-2"></i>
        <i className="bi bi-arrow-right fs-2"></i>
      </div>
      <div className="logo-slider overflow-hidden">
        <div className="slide-track d-flex">
          {track.map((logo, idx) => (
            <div className="slide-item d-flex align-items-center justify-content-center" key={idx}>
              <img src={logo} alt={`logo-${idx}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
