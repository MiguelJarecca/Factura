
import React from 'react'
import PropTypes from 'prop-types'

export default function ClientView({ titleClient, client, address }) {

    const {country, city, street, number} = address;

  return (
    <div>
         <h3>{titleClient}</h3>

        <ul>
            <li>{client.name} {client.lastName}</li>
            <li>{country}</li>
            <li>{city}</li>
            <li>{street} {number}</li>
        </ul>
    </div>
  )
}

ClientView.propTypes = {
  titleClient: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired    
}
