import React from 'react'
import Msg from './msg'
const msglist = ({message}) => {
  return (
   <div>
    {message.map(message=>(<Msg text={message.text} content={message.content}/>))}
   </div>
  )
}

export default msglist