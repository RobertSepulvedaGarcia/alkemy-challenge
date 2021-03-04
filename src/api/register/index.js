import Swal from "sweetalert2";

const api = "http://localhost:3001";

export const newRegister = async(data) => {
    try {
        console.log(data);
        const url = `${api}/new/register`;

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),

            headers: {
                "Content-Type": "application/json",
            },
        }).then(
            Swal.fire({
                icon: "success",
                title: "Genial!",
                text: `Nuevo ${data.operationType} registrado`,
            }).then(() => window.location.reload())
        );

        return await response.json();
    } catch (error) {
        return error;
    }
};