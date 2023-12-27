
export const invoice = {
    id: 10,
    name: 'Componentes de PC',
    client: {
        name: 'Miguel',
        lastName: 'Jarecca',
        address: {
            country: 'Peru',
            city: 'Tacna',
            street: 'Villa sol',
            number: 21
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: '123456'
    },
    items: [
        {
            id: 1,
            product:'Cpu Intel i7',
            price: 3200,
            quantity: 1
        },
        {
            id: 2,
            product:'Consair Keyboard',
            price: 50,
            quantity: 2
        },
        {
            id: 3,
            product:'Monitor Asus',
            price: 2200,
            quantity: 1
        }
    ]
}