import Swal from 'sweetalert2';

const api = "http://localhost:3001";

export const updateRegister = (body, id) => {


    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Cambialo!',
        cancelButtonText: "Cancelar",
    }).then(async(result) => {
        if (result.isConfirmed) {

            try {

                await fetch(`${api}/update/${id}`, {
                        method: "PUT",

                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body),
                    })
                    .then((response) => response)
                    .catch((err) => console.error(err))
                    .then(data => console.log(data));



            } catch (error) {
                console.error(error);
            }
            Swal.fire(
                'Bien hecho!',
                'Tu registro ha sido modificado.',
                'success'
            ).then(() => window.location.reload());
        }
    })

};