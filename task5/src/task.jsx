import React from 'react'

const task = ({discription,properties}) => {
  return (
    <div>
        <h1>{discription}</h1>
        <h2>{properties}</h2>
    </div>
  )
}

export default task