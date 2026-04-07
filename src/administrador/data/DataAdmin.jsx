import axios from "axios";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export const datosInicio = async (op) => {
  try {
    const { data } = await axios.get("/verEventos");
    if (op === 1) {
      const destacados = data.filter((data) => data.tipo === "destacado" || data.tipo === "noticia");
      return destacados;
    }
    else {

      const destacados = data.filter((data) => data.tipo === op);
      return destacados;
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};

export const datosCronograma = async () => {
  try {
    const { data } = await axios.get("/verEventos");
    const destacados = data.filter((data) => data.tipo === "cronograma");
    return destacados;
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
}
export const dataVerCharlas = async () => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");
    const { id } = jwt_decode(tokenAdmin);
    const { data } = await axios.get(`/verSolicitudes/${id}`);
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};

export const opProfesionales = async () => {
  try {
    const { data } = await axios.get("/verUsuariosProfesionales");
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};

export const aplazarCharlaData = async (
  id,
  motivo,
  nuevaFecha,
  nuevoProfesional
) => {
  try {
    const loading = Swal.fire({
      title: 'Aplazando charla',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const response = await axios.put(`/solicitudesAplazar/${id}`, {
      motivo,
      nuevaFecha,
      nuevoProfesional,
    });
    loading.close();
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000,
      }).then(() => {
        location.reload()
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};

export const solicitudesprofesional = async () => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");
    const token = {
      headers: {
        "acceso-token": tokenAdmin,
      },
    };
    const { data } = await axios.get("/solicitudesProfesional", token);
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
export const solicitudesRechazadasProfesional = async () => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");
    const token = {
      headers: {
        "acceso-token": tokenAdmin,
      },
    };
    const { data } = await axios.get(
      "/solicitudesRechazadasProfesional",
      token
    );
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
export const charlaAceptada = async (id) => {
  try {
    let loading = Swal.fire({
      title: 'Aceptando Charla',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const response = await axios.put(`/solicitudesAceptar/${id}`);

    loading.close();
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000,
      }).then(() => {
        location.reload()
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
export const aceptarProfesional = async (id) => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");
    const headers = {
      "acceso-token": tokenAdmin,
    };

    const response = await axios.put(`/aceptarProfesional/${id}`, null, {
      headers,
    });
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000,
      }).then(() => {
        location.reload()
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
export const rechazarProfesional = async (motivoRechazo, id) => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");

    const headers = {
      "acceso-token": tokenAdmin,
    };
    const response = await axios.put(
      `/rechazarProfesional/${id}`,
      { motivoRechazo },
      { headers }
    );
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000,
      }).then(() => {
        location.reload()
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};

export const datosPqrs = async () => {
  try {
    const { data } = await axios.get("/verPqrsPendientes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const responderPqrs = async (respuesta, id) => {
  try {
    const response = await axios.put(`/responderPqrs/${id}`, { respuesta });
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000,
      }).then(() => {
        location.reload()
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
export const misNotificaciones = async (id) => {
  try {

    const { data } = await axios.get(`/notificaciones/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const crearEvento = async (data) => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");

    const headers = {
      "acceso-token": tokenAdmin,
    };
    const loading = Swal.fire({
      title: 'Creando evento',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });


    const response = await axios.post(`/crearEventos`, data, { headers });


    // Cierra la alerta de espera
    loading.close();

    Swal.fire({
      icon: 'success',
      title: response.data,
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      location.reload()
    });
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
export const verAdmin = async (id) => {
  try {
    const response = await axios.get(`/usuario/${id}`);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
}
export const verUsuarios = async () => {
  try {
    const { data } = await axios.get(`/verUsuarios`);
    console.log(data)
    const user = data.filter((d) => d.rol[0].nombre === "aprendiz")
    return user

  } catch (error) {
    console.log(error.response);
  }
}


export const eliminarEvento = async (id) => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");
    const headers = {
      "acceso-token": tokenAdmin,
    };

    const response = await axios.delete(`/eliminarEvento/${id}`, { headers });

    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: 'success',
        timer: 2000,
      }).then(() => {
        location.reload();
      });
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: error.response.data,
      timer: 2000
    });
  }
};


export const actualizarEvento = async (id, data) => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");

    const headers = {
      "acceso-token": tokenAdmin,
    };
    const loading = Swal.fire({
      title: 'Actualizando evento',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const response = await axios.put(`/actualizarEvento/${id}`, data, { headers })
    loading.close()

    Swal.fire({
      title: response.data,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    })
      .then(() => {
        location.reload()
      })

  } catch (error) {

    Swal.fire({
      icon: "error",
      title: error.response.data,
    });

  }
}

export const actualizarAdministrador = async (id, data) => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");

    const headers = {
      "acceso-token": tokenAdmin,
    };
    const loading = Swal.fire({
      title: 'Actualizando administrador',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const response = await axios.put(`/actualizarAdministrador/${id}`, data, { headers });
    loading.close();

    Swal.fire({
      title: response.data,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    })
      .then(() => {
        location.reload();
      });

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.response.data || "Error al actualizar el administrador",
    });
  }
};


export const agregarPrograma = async (data) => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador");

    const headers = {
      "acceso-token": tokenAdmin,
    };

    const loading = Swal.fire({
      title: 'Agregando Edad',
      text: 'Espere un momento por favor...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const response = await axios.post(`/crearPrograma`, data, { headers })
    loading.close()

    Swal.fire({
      title: response.data,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    })
      .then(() => {
        location.reload()
      })

  } catch (error) {

    Swal.fire({
      icon: "error",
      title: error.response.data,
    });

  }
}

export const inhabilitarUsu = async (id) => {

  try {
    const response = await axios.put(`/inhabilitarUsuario/${id}`);

    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: 'success',
        timer: 2000,
      }).then(() => {
        location.reload();
      });
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: error.response.data,
      timer: 2000
    });
  }
};

export const habilitarUsu = async (id) => {

  try {
    const response = await axios.put(`/habilitarUsuario/${id}`);
    console.log(response)

    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: 'success',
        timer: 2000,
      }).then(() => {
        location.reload();
      });
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: error.response.data,
      timer: 2000
    });
  }
};

export const inhabilitarPro = async (id) => {

  try {
    const response = await axios.put(`/inhabilitarProfesional/${id}`);

    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: 'success',
        timer: 2000,
      }).then(() => {
        location.reload();
      });
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: error.response.data,
      timer: 2000
    });
  }
};

export const habilitarPro = async (id) => {

  try {
    const response = await axios.put(`/habilitarProfesional/${id}`);
    console.log(response)

    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: 'success',
        timer: 2000,
      }).then(() => {
        location.reload();
      });
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: error.response.data,
      timer: 2000
    });
  }
};



