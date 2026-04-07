import axios from 'axios'
import Swal from 'sweetalert2'

export const datosCronograma = async (id) => {
    try {
        const { data } = await axios.get(`/notificaciones/${id}`)
        return data;
    } catch (error) {
        if (error.response === 400) {
            Swal.fire({
                icon: "error",
                title: error.response.data
            })
        }
    }
}