export const dateFormat = (fecha) => {
    let mes = parseInt(fecha.getMonth() + 1);
    const anio = fecha.getFullYear();
    let dia = parseInt(fecha.getUTCDate());

    if (dia >= 1 && dia <= 9) {
        dia = 0 + dia.toString();
    }

    if (mes >= 1 && mes <= 9) {
        mes = 0 + mes.toString();
    }

    const fechaFinal = `${dia}/${mes}/${anio}`;

    return fechaFinal;
};