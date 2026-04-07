import React, { useState, useEffect, Suspense } from 'react';
import jwt_decode from 'jwt-decode';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { datosCronograma } from '../../profesionales/data/DataSolicitudes';
import { convertirFecha } from '../../assets/js/FormatoEventos';

// Lazy load Calendar y moment
const Calendar = React.lazy(() => import('react-big-calendar').then(module => ({ default: module.Calendar })));
const moment = React.lazy(() => import('moment'));
const momentLocalizer = React.lazy(() => import('react-big-calendar').then(module => ({ default: module.momentLocalizer })));

const CalendarioEventos = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [localizer, setLocalizer] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('Token-Profesional');
    if (!token) return;
    const { id } = jwt_decode(token);

    // Cargar moment y localizer
    Promise.all([moment, momentLocalizer]).then(([momentLib, localizerFn]) => {
      setLocalizer(localizerFn(momentLib));
    });

    // Cargar datos de eventos
    datosCronograma(id).then((data) => {
      const mappedEvents = data.map((s) => {
        const start = new Date(convertirFecha(s.fechaAplazada));
        return {
          ...s,
          title: s.titulo,
          start,
          end: new Date(start.getTime() + 2 * 60 * 60 * 1000), // +2 horas
        };
      });
      setEvents(mappedEvents);
    });
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="row w-100 text-center mt-4">
        <h1>Calendario de eventos</h1>
        <h3>Nuevo evento</h3>
      </div>

      {localizer && (
        <Suspense fallback={<div>Cargando calendario...</div>}>
          <Calendar
            className="mt-5"
            localizer={localizer}
            events={events}
            style={{ height: 500 }}
            onSelectEvent={handleEventClick}
            messages={{
              allDay: 'Todo el día',
              previous: 'Anterior',
              next: 'Siguiente',
              today: 'Hoy',
              month: 'Mes',
              week: 'Semana',
              day: 'Día',
              agenda: 'Agenda',
              date: 'Fecha',
              time: 'Hora',
              event: 'Evento',
              January: 'Enero',
              noEventsInRange: 'No hay eventos en este rango',
              showMore: (total) => `+ Ver más (${total})`,
            }}
          />
        </Suspense>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <div>
              <p>Título: {selectedEvent.title}</p>
              <p>Fecha: {selectedEvent.fechaAplazada}</p>
              <p>Descripción: {selectedEvent.contenido}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalendarioEventos;