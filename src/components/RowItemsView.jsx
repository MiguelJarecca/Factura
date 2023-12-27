
import React from 'react'
import PropTypes from 'prop-types'

export default function RowItemsView({product, price, quantity}) {
  return (
    <>
        <tr>
            <td>{product}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
    </>
  )
}

RowItemsView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}