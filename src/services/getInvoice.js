
import { invoice } from '../data/Invoice'

export const getInvoice = () => {
  
    // let total = 0;
    // invoice.items.forEach(item => {
    //     total = total + item.price * item.quantity;
    // })

    //Forma recomendada
    const total = calculateTotal(invoice.items);

    //Retornamos una copia de invoice mas el total
    return {...invoice, total};
}

export const calculateTotal = (items=[]) => {
    return items
        .map(items => items.price * items.quantity)
        .reduce((acumulator, currentValor) => acumulator + currentValor, 0);
}
