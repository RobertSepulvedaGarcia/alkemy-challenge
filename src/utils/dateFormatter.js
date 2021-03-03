export const dateFormat = (fecha) => {
    let mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    let dia = fecha.getUTCDate();

    if (parseInt(dia) >= 1 && parseInt(dia) <= 9) {
        dia = 0 + dia.toString();
    }

    if (parseInt(mes) >= 1 && parseInt(mes) <= 9) {
        mes = 0 + mes.toString();
    }

    const fechaFinal = dia + "/" + mes + "/" + anio;

    return fechaFinal;
};