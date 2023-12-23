
import React from 'react'
import RowItemsView from './RowItemsView'

export default function ListItemsView({titleItems, items}) {

  return (
    <div>
        <h3>{titleItems}</h3>

        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, product, price, quantity}) => 
                (
                    <RowItemsView key={id} product={product} price={price}
                                    quantity={quantity}/>
                )
                )}
            </tbody>
        </table>  
    </div>
  )
}
