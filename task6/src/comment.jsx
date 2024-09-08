import React from 'react'

const comment = ({name,comments}) => {
  return (
    <div>
        <h5>{name}</h5>
        <p>{comments}</p>
    </div>
  )
}

export default comment