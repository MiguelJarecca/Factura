
import React from 'react'
import PropTypes from 'prop-types'
import RowItemsView from './RowItemsView'

export default function ListItemsView({titleItems, items, handlerDeleteItem}) {

  return (
    <div>
        <h3>{titleItems}</h3>

        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Elimiar</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, product, price, quantity}) => 
                (
                    <RowItemsView key={id} product={product} price={price}
                                    quantity={quantity} 
                                    handlerDeleteItem={handlerDeleteItem}
                                    id={id}/>
                )
                )}
            </tbody>
        </table>  
    </div>
  )
}

ListItemsView.propTypes = {
    titleItems: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}