import React from 'react'
import Msglist from './msglist'
import Commentlist from './commentlist'
import Photolist from './photolist'
import Orderlist from './orderlist'
import Eventlist from './eventlist'
import Playlist from './playlist'
import Notificationlist from './notificationlist'
const mssg=[
  {text:'properties', content:'edho okti'}]
  const commen=[{comments:'good',name:'chaithra'}]
const pic=[{id:1,url:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg',description:'an array of photo objects (eachwith id, url, and description properties) and renders a Photo component for eachphoto.'}]
const order=[{id:1,productName:'Lorem ipsum dolor',quantityproperties:'Lorem ipsum dolor sit amet consectetur adipisicing elit'}]
const event=[{id:1,name:'Lorem ipsum dolor',property:'Lorem ipsum dolor sit amet consectetur adipisicing elit'}]
const playit=[{id:1,title:'Lorem ipsum dolor',artistproperty:'Lorem ipsum dolor sit amet consectetur adipisicing elit'}]
const notifing=[{id:1,message:'Lorem ipsum dolor sit amet consectetur adipisicing elit'}]
const App = () => {
  return (
    <div>
      <h1>Message</h1>
      <Msglist message={mssg}/>
      <h1>Comments</h1>
      <Commentlist com={commen}/>
      <h1>PhotoGallery</h1>
      < Photolist photo={pic}/>
      <h1>Orderlist</h1>
      <Orderlist orders={order}/>
      <h1>Eventlist</h1>
      <Eventlist events={event}/>
      <h1>Playlist</h1>
      <Playlist plays={playit}/>
      <h1>NotifcationList</h1>
      <Notificationlist note={notifing}/> 
    </div>
  )
}
export default App