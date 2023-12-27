
import React from 'react'
import PropTypes from 'prop-types'

export default function InvoiceView({ title, invoice}) {

  const { id, name } = invoice;

  return (
    <div>
      <h1>{title}</h1>
      
      <ul>
        <li>Id: {id}</li>
        <li>Nombre: {name}</li>
      </ul>
    </div>
  )
}

InvoiceView.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
}