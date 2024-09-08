import React from 'react'

const msg = ({text,content}) => {
  return (
    <div>
        <h1>{text}</h1>
        <p>{content}</p>
    </div>
  )
}

export default msg