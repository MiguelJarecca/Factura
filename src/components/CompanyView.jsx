
import React from 'react'

export default function CompanyView({ titleCompany, company }) {
  return (
    <div>
        <h3>{titleCompany}</h3>

        <ul>
            <li>{company.name}</li>
            <li>{company.fiscalNumber}</li>
        </ul> 
    </div>
  )
}
