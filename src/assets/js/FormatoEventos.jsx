
export const convertirFecha = (fechaCadena) => {
    const partes = fechaCadena.split(' ');
  
    // Extraer el día, mes y año de la fecha
    const dia = parseInt(partes[0]);
    const mes = obtenerNumeroMes(partes[2]);
    const anyo = parseInt(partes[4]);
  
    // Extraer la hora y minutos en formato 'HH:MM'
    const horaMinutos = partes[7].split(':');
    const hora = parseInt(horaMinutos[0]);
    const minutos = parseInt(horaMinutos[1]);
  
    // Obtener el período AM/PM
    const periodo = partes[8].toLowerCase();
  
    // Convertir la hora en formato de 12 horas a 24 horas
    let hora24 = hora;
    if (periodo === 'pm' && hora !== 12) {
      hora24 += 12;
    } else if (periodo === 'am' && hora === 12) {
      hora24 = 0;
    }
  
    // Crear el objeto Date con la fecha y hora obtenidas
    const fechaFormateada = new Date(anyo, mes - 1, dia, hora24, minutos);
  
    return fechaFormateada;
  };
  
  

// Función auxiliar para obtener el número de mes a partir del nombre del mes en español
function obtenerNumeroMes(mes) {
    const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const indice = meses.findIndex((m) => m.toLowerCase() === mes.toLowerCase());
    return indice !== -1 ? formatoDosDigitos(indice + 1) : '';
}

function formatoDosDigitos(numero) {
    return numero.toString().padStart(2, '0');
}
