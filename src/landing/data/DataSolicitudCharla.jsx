import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'

export const dataSolicitudCharla = async (fecha, profesional, motivo) => {
  try {
    const URL = "/crearSolicitud";
    const token = localStorage.getItem("Token-Aprendiz");
    const headers = {
      "acceso-token": token,
    };
    const decodedToken = jwt_decode(token);
    const nombre = decodedToken.id;


    const datosSolicitud = {
      id_aprendiz: nombre,
      fechaSolicitada: fecha,
      id_profesional: profesional,
      motivo: motivo
    };
    const loading = Swal.fire({
      title: 'Solicitando',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const response = await axios.post(URL, datosSolicitud, { headers });
    loading.close();
    if (response.status === 200) {

      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000
      }).then((
        location.reload()
      ))
    }
  } catch (error) {
    console.log(error)

    Swal.fire({
      icon: "error",
      title: error.response.data
    });

  }

}

