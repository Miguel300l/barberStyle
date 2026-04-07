import React from 'react';
import barberPrecio from '../../assets/img/barberPrecio.webp';

const servicios = [
    {
        titulo: 'Corte de cabello clásico',
        precio: '18.000',
        descripcion: 'Un estilo tradicional y limpio, ideal para cualquier ocasión especial.',
    },
    {
        titulo: 'Corte de cabello',
        precio: '20.000',
        descripcion: 'Un corte de cabello personalizado para que luzcas fresco.',
    },
    {
        titulo: 'Afeitado clásico',
        precio: '10.000',
        descripcion: 'Afeitado que deja tu piel fresca y un acabado impecable.',
    },
    {
        titulo: 'Arreglo de la barba',
        precio: '8.000',
        descripcion: 'Perfilación de barba con precisión y estilo a tu gusto.',
    },
    {
        titulo: 'Corte de cabello premium',
        precio: '26.000',
        descripcion: 'Servicio especializado con perfilado de cejas y mascarilla facial.',
    },
    {
        titulo: 'Líneas con diseños o freestyle libre',
        precio: '4.000 - 7.000',
        descripcion: 'Diseños freestyle que resaltan tu estilo con creatividad.',
    },
];

const ItemPrecio = ({ item, dots }) => (
    <div className="mb-3 p-3 bg-transparent border rounded">
        <div style={{ fontSize: 'clamp(15px, 4vw, 20px)', fontFamily: 'Bebas Neue' }}>
            <strong>{item.titulo}</strong>

            {dots && (
                <span className="mx-2">{dots}</span>
            )}

            <span>{item.precio}</span>
        </div>

        <div
            className="text-white"
            style={{ fontSize: 'clamp(11px, 3.5vw, 16px)', fontFamily: 'Lato' }}
        >
            {item.descripcion}
        </div>
    </div>
);

const ListaPrecios = () => {
    return (
        <div className="py-5 position-relative text-white">
            <div className="position-relative">

                <img
                    src={barberPrecio}
                    className="img-fluid w-100"
                    alt="barberPrecio"
                    style={{ height: '560px', objectFit: 'cover' }}
                />

                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                ></div>

                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-3">

                    <h2
                        style={{
                            fontFamily: 'Bebas Neue',
                            fontSize: 'clamp(20px, 5vw, 40px)',
                            textTransform: 'uppercase',
                            marginTop: '30px'
                        }}
                    >
                        Lista de precios
                    </h2>

                    <p
                        className="mt-2"
                        style={{
                            fontFamily: 'Lato',
                            fontSize: 'clamp(12px, 4vw, 18px)',
                            maxWidth: '900px',
                            lineHeight: 1.6,
                        }}
                    >
                        Conoce nuestra lista de precios y elige el servicio ideal para ti. Cada opción está diseñada para resaltar tu estilo, pensando siempre en quienes confían en nosotros. Los precios son los siguientes:
                    </p>

                    <div className="container" style={{ margin: "-60px" }}>
                        <div className="row justify-content-center">

                            {/* MOBILE */}
                            <div className="col-12 d-block d-md-none">
                                {servicios.slice(0, 2).map((item, i) => (
                                    <ItemPrecio key={i} item={item} dots="......" />
                                ))}
                            </div>

                            {/* TABLET */}
                            <div className="col-12 d-none d-md-block d-lg-none">
                                {servicios.slice(0, 3).map((item, i) => (
                                    <ItemPrecio key={i} item={item} dots="......" />
                                ))}
                            </div>

                            {/* DESKTOP */}
                            <div className="col-12 col-md-6 d-none d-lg-block">
                                {servicios.slice(0, 3).map((item, i) => (
                                    <ItemPrecio key={i} item={item} dots="................................" />
                                ))}
                            </div>

                            <div className="col-12 col-md-6 d-none d-lg-block">
                                {servicios.slice(3).map((item, i) => (
                                    <ItemPrecio key={i} item={item} dots="................................" />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListaPrecios;