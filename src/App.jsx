import './App.css'
import { useEffect, useState } from 'react';

import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import InvoiceView from './components/InvoiceView';
import ListItemsView from './components/ListItemsView';
import TotalView from './components/TotalView';
import { calculateTotal, getInvoice } from './services/GetInvoice'
import FormItemsView from './components/FormItemsView';

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

  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0); 

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, [])

  const {client, company} = invoice;
  const {address} = client;

  useEffect(() => {
    setTotal(calculateTotal(items));
    // console.log('se aunmento un nuevo item');
  },[items]);

  const handlerAddItems = ({product, price, quantity}) => {

    setItems([...items,
        {id: counter, 
        product: product, 
        price: +price, //Con el + convertimos de string a number
        quantity: parseInt(quantity, 10) //Otra forma
    }]); 
    
    setCounter(counter + 1);    
  }

  const handlerDeleteItem = (id) => {
    setItems(items.filter(item => item.id !==id))
  }

  const onActiveForm = () => {
    setActiveForm(!activeForm)
  };

  return (
    <>
      <InvoiceView title={"Ejemplo factura"} invoice={invoice}/>

      <ClientView titleClient={"Datos del cliente"} client={client} 
                  address={address}/>

      <CompanyView titleCompany={"Datos de la empresa"} company={company}/>
     
      <ListItemsView titleItems={"Productos de la factura"} items={items}
        handlerDeleteItem={handlerDeleteItem}/>

      <TotalView total={total}/>

      <button onClick={onActiveForm}>{!activeForm ? 'Nuevo Item' : 'Ocultar Fotmulario'}</button>

      {!activeForm ?'':<FormItemsView handler={(newItem)=>handlerAddItems(newItem)}/>}
      
    </>
  )
}

export default App
