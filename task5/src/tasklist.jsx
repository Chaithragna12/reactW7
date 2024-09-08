import React from 'react'
import Task from './task'

const tasklist = ({papa}) => {
  return (
    <div>
        {papa.map(papa=>(<Task discription={papa.discription} properties={papa.properties}/>))}
    </div>
  )
}

export default tasklist