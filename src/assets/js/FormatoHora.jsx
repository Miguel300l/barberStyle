 
export const horaLocal = (data)=>{
 
    // Obtener la hora actual
    let hora = new Date(data);

    // Sumar dos horas
    hora.setHours(hora.getHours());
    
    // Obtener las horas y minutos en formato de 12 horas
    let horas = hora.getHours() > 12 ? hora.getHours() - 12 : hora.getHours();
    let minutos = hora.getMinutes();
    let ampm = hora.getHours() >= 12 ? 'PM' : 'AM';
    
    // Formatear la hora con ceros a la izquierda si es necesario
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    
    // Crear la cadena de tiempo en formato de 12 horas
    let hora12 = `${horas}:${minutos} ${ampm}`;
    
    // Imprimir la hora en formato de 12 horas
    return(hora12);
    
}