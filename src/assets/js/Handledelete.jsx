import Swal from 'sweetalert2';
import { eliminarEvento } from '../../administrador/data/DataAdmin';

const handleDelete = async (id) => {
    // Mostrar una ventana de confirmación
    const confirmation = await Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo'
    });

    // Si el usuario confirma la eliminación
    if (confirmation.isConfirmed) {
        try {
            await eliminarEvento(id);
            Swal.fire(
                'Eliminado!',
                'El evento ha sido eliminado.',
                'success'
            ).then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error("Error al eliminar evento:", error);
            Swal.fire(
                'Error',
                'Hubo un problema al eliminar el evento.',
                'error'
            );
        }
    }
};

export default handleDelete;
