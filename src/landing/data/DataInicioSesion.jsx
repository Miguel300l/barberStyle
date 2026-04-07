import Swal from "sweetalert2";
import axios from 'axios'


export const datosInicio = async () => {

  const { data } = await axios.get("/verEventos");
  // Filtrar los eventos que tengan el tipo "destacado"
  const destacados = data.filter(evento => evento.tipo === "destacado");

  return data;
}
export const datosCronograma = async () => {

  const { data } = await axios.get("/verEventos");
  // Filtrar los eventos que tengan el tipo "cronograma"
  const cronograma = data.filter(evento => evento.tipo === "cronograma");

  return cronograma;
}

export const loginAprendiz = async (correo, contrasena) => {

  const URL = "/loginAprendiz";

  const loading = Swal.fire({
    title: 'Iniciando sesion',
    text: 'Espere un momento por favor...',
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await axios.post(URL, {
      correo,
      contrasena,
    });
    loading.close();

    if (response.status === 200 && response.data.token) {
      Swal.fire({
        title: response.data.messagge,
        icon: "success",
        text: "! Bienvenido ¡",
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        localStorage.setItem("Token-Aprendiz", response.data.token)
      }).then(() => {
        location.replace("/")


      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }


  }
}

export const loginProfesional = async (correo, contrasena) => {

  const URL = "/loginProfesional";
  const loading = Swal.fire({
    title: 'Iniciando sesion',
    text: 'Espere un momento por favor...',
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await axios.post(URL, {
      correo,
      contrasena,
    });

    loading.close();
    if (response.status === 200 && response.data.token) {
      Swal.fire({
        title: response.data.messagge,
        icon: "success",
        text: "! Bienvenido ¡",
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        localStorage.setItem("Token-Profesional", response.data.token)
      }).then(() => {
        location.replace("/profesional")


      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }


  }
}
export const loginAdmin = async (correo, contrasena) => {

  const URL = "/loginAdministrador";
  const loading = Swal.fire({
    title: 'Iniciando sesion',
    text: 'Espere un momento por favor...',
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await axios.post(URL, {
      correo,
      contrasena,
    });

    loading.close();
    if (response.status === 200 && response.data.token) {
      Swal.fire({
        title: response.data.messagge,
        icon: "success",
        text: "! Bienvenido ¡",
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        localStorage.setItem("Token-Administrador", response.data.token)

      }).then(() => {
        location.replace("/admin")


      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }


  }
}
export const formPqrs = async (id_usuario, tipo, motivo) => {
  try {

    const token = localStorage.getItem("Token-Aprendiz");

    const headers = {
      "acceso-token": token,
    };
    const loading = Swal.fire({
      title: 'Solicitando Pqrs',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const pqrs = { id_usuario, tipo, motivo }
    const response = await axios.post(`/crearPqrs`, pqrs, { headers })
    loading.close()



    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000
      })
        .then((
          location.reload()
        ))
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}

export const notificacionVista = async (id) => {
  try {
    const data = await axios.put(`/notificacionVista/${id}`)

  } catch (error) {
    console.error(error.data)
  }
}

export const verPro = async () => {
  try {
    const { data } = await axios.get(`/verProfesionales`);
    return data
  } catch (error) {
    console.error(error.data)
  }
}

export const verProfesionales = async () => {
  try {
    const { data } = await axios.get(`/verUsuariosProfesionales`);
    console.log(data)
    return data
  } catch (error) {
    console.error(error.data)
  }
}  