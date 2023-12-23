
import React from 'react'

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
