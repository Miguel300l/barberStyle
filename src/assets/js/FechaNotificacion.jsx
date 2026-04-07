function FechaNotificacion(fecha) {
 // Fecha de la notificación
const fechaNotificacion = new Date(fecha);

// Fecha actual
const fechaActual = new Date();

// Diferencia en milisegundos
const diferenciaMilisegundos = fechaActual - fechaNotificacion;

// Convertir a segundos, minutos, horas, días, semanas, meses, años
const segundosPasados = Math.round(diferenciaMilisegundos / 1000);
const minutosPasados = Math.round(diferenciaMilisegundos / (1000 * 60));
const horasPasadas = Math.round(diferenciaMilisegundos / (1000 * 60 * 60));
const diasPasados = Math.round(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
const semanasPasadas = Math.round(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 7));
const mesesPasados = Math.round(diasPasados / 30.44);
const añosPasados = Math.round(mesesPasados / 12);

// Determinar la unidad de tiempo y el valor apropiados para mostrar
let unidadDeTiempo;
let valorDeTiempo;
if (segundosPasados < 60) {
  unidadDeTiempo = 'segundos';
  valorDeTiempo = segundosPasados;
} else if (minutosPasados < 60) {
  unidadDeTiempo = 'minutos';
  valorDeTiempo = minutosPasados;
} else if (horasPasadas < 24) {
  unidadDeTiempo = 'horas';
  valorDeTiempo = horasPasadas;
} else if (diasPasados < 7) {
  unidadDeTiempo = 'días';
  valorDeTiempo = diasPasados;
} else if (semanasPasadas < 4) {
  unidadDeTiempo = 'semanas';
  valorDeTiempo = semanasPasadas;
} else if (mesesPasados < 12) {
  unidadDeTiempo = 'meses';
  valorDeTiempo = mesesPasados;
} else {
  unidadDeTiempo = 'años';
  valorDeTiempo = añosPasados;
}

// Mostrar el resultado en términos de "hace x tiempo"
return (`Hace ${valorDeTiempo} ${unidadDeTiempo}`);

}
export default FechaNotificacion;