import React from 'react'
import Style from './Card.module.css'
const index = ({children}) => {
  return (
    <div className={Style.card}>
        {children}
    </div>
  )
}

export default index