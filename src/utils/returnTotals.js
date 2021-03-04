export const returnTotals = (allData) => {
    const { data } = allData
    if (data.length > 0) {

        let allIncomes = data.filter((value) => value.OperationType === 'Ingreso');
        let totalIncomes = allIncomes.reduce((acc, value) => { return acc = acc + value.Mount }, 0);

        let allExpences = data.filter((value) => value.OperationType === 'Egreso');
        let totalExpences = allExpences.reduce((acc, value) => { return acc = acc + value.Mount }, 0);


        let totalBalance = totalIncomes - totalExpences;
        let totals = { totalIncomes, totalExpences, totalBalance }
        return totals;

    } else {


        let totalIncomes = 0;
        let totalExpences = 0;
        let totalBalance = totalIncomes - totalExpences;
        let totals = { totalIncomes, totalExpences, totalBalance }
        return totals;


    }





















}