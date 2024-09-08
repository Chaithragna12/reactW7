import React from 'react'

const photo = ({id, url,description}) => {
  return (
    <div>
        <p>{id}</p>
        <img src={url} alt="" height={300}/>
        <p>{description}</p>
    </div>
  )
}

export default photo