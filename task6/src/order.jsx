import React from 'react'

const order = ({ id, productName, quantityproperties}) => {
  return (
    <div>
        <p>{id}</p>
        <p>{productName}</p>
        <p>{ quantityproperties}</p>
    </div>
  )
}

export default order