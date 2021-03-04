import Swal from "sweetalert2";
const url = "http://localhost:3001";

export const deleteRegister = (id) => {
    Swal.fire({
        title: "Estás seguro?",
        text: "Esta acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borralo",
        cancelButtonText: "Cancelar",
    }).then(async(result) => {
        if (result.isConfirmed) {
            try {
                await fetch(`${url}/delete/${id}`, {
                        method: "DELETE",
                    })
                    .then(() => console.log("listo"))

                .catch((err) => console.error("There was an error!", err));
            } catch (error) {
                console.error(error);

            }
            Swal.fire(
                "Borrado!",
                "La operacion ha sido eliminada.",
                "success"
            ).then(() => window.location.reload());
        }
    });
};