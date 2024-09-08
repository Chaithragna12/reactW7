import React from 'react'
import Notify from './notification'
const notificationlist = ({note}) => {
  return (
    <div>
        {note.map(note=><Notify id={note.id} message={note.message}/>)}
    </div>
  )
}

export default notificationlist