import React from 'react'
import Event from './event' 
const eventlist = ({events}) => {
  return (
    <div>
        {events.map(events=><Event id={events.id} name={events.name} property={events.property}/>)}
    </div>
  )
}

export default eventlist