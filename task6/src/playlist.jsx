import React from 'react'
import Play from './play' 
const playlist = ({plays}) => {
  return (
    <div>
        {plays.map(plays=><Play id={plays.id} title={plays.title} artistproperty={plays.artistproperty}/>)}
    </div>
  )
}
export default playlist