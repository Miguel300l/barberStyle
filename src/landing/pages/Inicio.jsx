import React from "react";
import Slider from '../componentes/SliderInicioSesion'
import ListaPrecios from '../componentes/ListaPrecios'
import CarouselInfinito from '../componentes/CarouselInfinito'
import MagosCorte from '../componentes/MagosCorte'
import EstadisticaBarberia from '../componentes/EstadisticaBarberia'
import ClientesSatisfechos from '../componentes/ClientesSatisfechos'
import SatisfechoText from '../componentes/SatisfechoText'
import SatisfechoLorem from '../componentes/SatisfechoLorem'
import AgendarCita from '../componentes/AgendarCita'
import separador from '../../assets/img/separador.svg';
import CardGiro from '../componentes/Card';
import CardHover from '../componentes/CardHover';
import '../../assets/css/slider.css'
import '../../assets/css/estiloPrecio.css'


const Contenido = () => {
  return (<>
    <Slider />
    <div>
      <section className="container-fluid p-5">
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
              <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 4vw, 40px)', textTransform: 'uppercase', }}>SOBRE NOSOTROS</p>

              <div className="d-flex justify-content-center">
                <img
                  src={separador}
                  alt="separador"
                  style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                />
              </div>

              <p style={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                Ofrecemos los mejores estilos con diferentes looks, fusionando técnicas y estructuras para lograr resultados únicos, siempre respetando la perspectiva y esencia de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CardHover />
      <ListaPrecios />
      <CarouselInfinito />
      <MagosCorte />
      <CardGiro />
      <EstadisticaBarberia />
      <SatisfechoText />
      <SatisfechoLorem />
      <ClientesSatisfechos />
      <AgendarCita />
      <div className="py-5"></div>

    </div>
  </>
  );
};

export default Contenido;
