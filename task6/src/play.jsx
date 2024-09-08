import React from 'react'

const play = ({id,title,artistproperty}) => {
  return (
    <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{artistproperty}</p>
    </div>
  )
}

export default  play