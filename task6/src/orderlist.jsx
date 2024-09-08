import React from 'react'
import Order from './order' 
const orderlist = ({orders}) => {
  return (
    <div>
        {orders.map(orders=><Order id={orders.id} productName={orders.productName} quantityproperties={orders.quantityproperties}/>)}
    </div>
  )
}
export default orderlist