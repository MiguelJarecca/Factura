import './App.css'
import { useState } from 'react';

import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import InvoiceView from './components/InvoiceView';
import ListItemsView from './components/ListItemsView';
import TotalView from './components/TotalView';
import { getInvoice } from './services/GetInvoice'

function App() {

  const invoice = getInvoice();
  const {total, client, company, items: itemsInitial} = invoice;
  const {address} = client;

  const [productValue, setProductValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  const [items, setItems] = useState(itemsInitial);

  const [counter, setCounter] = useState(4);

  return (
    <>
      <InvoiceView title={"Ejemplo factura"} invoice={invoice}/>

      <ClientView titleClient={"Datos del cliente"} client={client} 
                  address={address}/>

      <CompanyView titleCompany={"Datos de la empresa"} company={company}/>
     
      <ListItemsView titleItems={"Productos de la factura"} items={items}/>

      <TotalView total={total}/>

      <form onSubmit={event => {
        event.preventDefault();

        if (productValue.trim().length <= 1) return;
        if (priceValue.trim().length <= 1) return;
        if (quantityValue.trim().length < 1) return;

        setItems([...items,
           {id: counter, 
            product: productValue, 
            price: +priceValue, //Con el + convertimos de string a number
            quantity: parseInt(quantityValue, 10)}]); //Otra forma

        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        setCounter(counter + 1);    
        }}>

        <input 
          type="text" 
          name='product' 
          value={productValue}
          placeholder='producto'
          onChange={event => {
            console.log(event.target.value);
            setProductValue(event.target.value);
          }}/>

        <input 
          type="text" 
          name='price' 
          value={priceValue}
          placeholder='precio'
          onChange={event => {
            console.log(event.target.value);
            setPriceValue(event.target.value);
          }}/>

        <input 
          type="text" 
          name='quantity' 
          value={quantityValue}
          placeholder='cantidad'
          onChange={event => {
            console.log(event.target.value);
            setQuantityValue(event.target.value);
          }}/>

        <button type='submit'>Nuevo Item</button>
      </form>

    </>
  )
}

export default App
