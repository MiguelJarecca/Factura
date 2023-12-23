
import React from 'react'

export default function InvoiceView({ title, invoice}) {
  return (
    <div>
      <h1>{title}</h1>
      
      <ul>
        <li>Id: {invoice.id}</li>
        <li>Nombre: {invoice.name}</li>
      </ul>
    </div>
  )
}
