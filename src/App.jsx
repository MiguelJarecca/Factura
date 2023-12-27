import './App.css'
import { useEffect, useState } from 'react';

import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import InvoiceView from './components/InvoiceView';
import ListItemsView from './components/ListItemsView';
import TotalView from './components/TotalView';
import { getInvoice } from './services/GetInvoice'
import { invoice } from './data/Invoice';

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0
    },
    items: [ ]
  };

const App = () => {

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, [])

  const {total, client, company, items: itemsInitial} = invoice;
  const {address} = client;

  const [invoiceItemsState, setInvoiceItemsState] = useState({
      product: '',
      price: '',
      quantity: '',
    });

  const {product, price, quantity} = invoiceItemsState;  

  const [counter, setCounter] = useState(4);

  const onInputChange = ({target: {name, value}}) => {
      console.log(name);
      console.log(value);

      setInvoiceItemsState({
        ...invoiceItemsState,
        [name]:value
      });
  }

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

        if (product.trim().length <= 1) return;

        if (price.trim().length <= 1) return;

        if (isNaN(price.trim())) {
          alert('Error: ingrese un numero')
          return;
        }

        if (quantity.trim().length < 1) return;

        if (isNaN(quantity.trim())) {
          alert('Error: ingrese un numero')
          return;
          }

        setItems([...items,
           {id: counter, 
            product: product, 
            price: +price, //Con el + convertimos de string a number
            quantity: parseInt(quantity, 10) //Otra forma
        }]); 

        setInvoiceItemsState({
          product: '',
          price: '',
          quantity: '',
        }) 
  }

  return (
    <>
      <InvoiceView title={"Ejemplo factura"} invoice={invoice}/>

      <ClientView titleClient={"Datos del cliente"} client={client} 
                  address={address}/>

      <CompanyView titleCompany={"Datos de la empresa"} company={company}/>
     
      <ListItemsView titleItems={"Productos de la factura"} items={items}/>

      <TotalView total={total}/>

      <form onSubmit={event => onInvoiceItemsSubmit(event)}>

        <input 
          type="text" 
          name='product' 
          value={product}
          placeholder='producto'
          onChange={onInputChange}/>

        <input 
          type="text" 
          name='price' 
          value={price}
          placeholder='precio'
          onChange={onInputChange}/>{/*manera mas directa*/}

        <input 
          type="text" 
          name='quantity' 
          value={quantity}
          placeholder='cantidad'
          onChange={event=>onInputChange(event)}/>{/*lo recibimo y lo enviamos*/}

        <button type='submit'>Nuevo Item</button>
      </form>
    </>
  )
}

export default App
