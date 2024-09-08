import React from 'react'

const notification = ({id,message}) => {
  return (
    <div>
        <p>{id}</p>
        <p>{message}</p>
    </div>
  )
}

export default notification