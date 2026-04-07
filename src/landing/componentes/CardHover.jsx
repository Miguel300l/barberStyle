import React from 'react';
import tijera from '../../assets/img/tijera.svg';
import maquina from '../../assets/img/maquina.svg';
import bigote from '../../assets/img/bigote.svg';
import cuchilla from '../../assets/img/cuchilla.svg';

const cardsData = [
    {
        img: tijera,
        title: 'Corte de Cabello',
        text: 'Servicios espléndidos que realzan tu imagen, combinando estructuras precisas con un estilo totalmente personalizado.',
    },
    {
        img: maquina,
        title: 'Corte con maquina',
        text: 'Ideal para un estilo limpio y definido. Precisión y rapidez para lograr un fade en tendencia y fácil de mantener.',
    },
    {
        img: bigote,
        title: 'Bigote',
        text: 'Definimos y perfilamos tu barba con precisión, trabajando la simetría para resaltar tu estilo con elegancia y carácter.',
    },
    {
        img: cuchilla,
        title: 'Afeitar',
        text: 'Un afeitado clásico con técnica y estilo, dejando tu piel suave, con un acabado impecable y una frescura inigualable.',
    },
];

const CardHover = () => {

    return (
        <div className="mx-5">
            <div className="row justify-content-center">
                {cardsData.map((card, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
                        <div className="box text-center shadow-sm card-hover" style={{
                            width: '100%', maxWidth: '18rem', transition: 'transform 0.3s',
                            border: '2px solid #ccc',
                            borderRadius: '8px',
                            minHeight: '270px',
                        }}>
                            <img
                                src={card.img}
                                alt={`Imagen ${card.title}`}
                                className="image-hover"
                                style={{ maxWidth: '70px', height: 'auto', margin: '20px auto 0' }}
                            />
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <h3
                                    className="card-title"
                                    style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginTop: '16px' }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    className="card-text"
                                    style={{ fontSize: '16px', fontFamily: 'Lato', marginTop: '16px' }}
                                >
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardHover;