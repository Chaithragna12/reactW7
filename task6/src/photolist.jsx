import React from 'react'
import Photolist from './photo'
const photolist = ({photo}) => {
  return (
    <div>  
        {photo.map(photo=><Photolist id={photo.id} url={photo.url} description={photo.description}/>)}
    </div>
  )
}

export default photolist