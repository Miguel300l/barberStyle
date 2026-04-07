import React from 'react';
import galeria from '../../assets/img/galeria.webp';
import galeria2 from '../../assets/img/galeria2.webp';
import galeria3 from '../../assets/img/galeria3.webp';
import galeria4 from '../../assets/img/galeria4.webp';
import galeria5 from '../../assets/img/galeria5.webp';
import galeria6 from '../../assets/img/galeria6.webp';
import galeria7 from '../../assets/img/galeria7.webp';
import galeria8 from '../../assets/img/galeria8.webp';
import galeria9 from '../../assets/img/galeria9.webp';
import galeria10 from '../../assets/img/galeria10.webp';
import galeria11 from '../../assets/img/galeria11.webp';
import galeria12 from '../../assets/img/galeria12.webp';
import '../../assets/css/card.css'

const Galeria = () => {

  const items = [
    { src: galeria, cols: 2, rows: 1 },
    { src: galeria3, cols: 1, rows: 1 },
    { src: galeria5, cols: 1, rows: 2 },
    { src: galeria4, cols: 1, rows: 1 },
    { src: galeria10, cols: 2, rows: 2 },
    { src: galeria6, cols: 1, rows: 1 },
    { src: galeria11, cols: 1, rows: 1 },
    { src: galeria7, cols: 2, rows: 1 },
    { src: galeria12, cols: 1, rows: 1 },
    { src: galeria8, cols: 1, rows: 2 },
    { src: galeria2, cols: 2, rows: 1 },
    { src: galeria9, cols: 1, rows: 1 },
  ];
  return (
    <div className="container py-5" style={{ marginTop: '40px' }}>
      <div className="grid-dense">
        {items.map((item, idx) => (
          <div
            className="grid-item"
            key={idx}
            style={{
              gridColumnEnd: `span ${item.cols}`,
              gridRowEnd: `span ${item.rows}`,
            }}
          >
            <img
              src={item.src}
              alt={`Galería ${idx}`}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
