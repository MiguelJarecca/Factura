
import React from 'react'
import PropTypes from 'prop-types'

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

CompanyView.propTypes = {
  titleCompany: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired
}