
import React from 'react'
import PropTypes from 'prop-types'

export default function RowItemsView({id, product, price, quantity, handlerDeleteItem}) {
  return (
    <>
        <tr>
            <td>{product}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={() => handlerDeleteItem(id)}>Eliminar</button></td>
        </tr>
    </>
  )
}

RowItemsView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}