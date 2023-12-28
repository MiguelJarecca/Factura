
import React from 'react'
import { useEffect, useState } from 'react';

export default function FormItemsView({handler}) {

    const [invoiceItemsState, setInvoiceItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
      });

    const {product, price, quantity} = invoiceItemsState; 

    useEffect(() => {
        // console.log('el precio cambio');
      },[price]);

      useEffect(() => {
        // console.log('el formulario cambio');
      },[invoiceItemsState]);

      const onInputChange = ({target: {name, value}}) => {
        // console.log(name);
        // console.log(value);
  
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

            handler(invoiceItemsState)
    
            setInvoiceItemsState({
              product: '',
              price: '',
              quantity: '',
            }) 
    }

  return (
    <div>
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
    </div>
  )
}
