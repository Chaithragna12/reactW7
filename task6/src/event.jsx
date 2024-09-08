import React from 'react'

const event = ({ id, name,property}) => {
  return (
    <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{property}</p>
    </div>
  )
}

export default event