import React,{useEffect,useState} from 'react'
import Image1 from './assets/image1.jpg'
import Image2 from './assets/img2.avif'
import Image3 from './assets/img3.webp'

const App = () => {
  const images=[Image1,Image2,Image3];
  const [currentimg,setcurrent]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setcurrent((preindex)=>(preindex+1)%images.length);
    },1000);
    return ()=>clearInterval(interval);
  },[images.length])
  return (<div style={{height:'100vh', width:'100%'}}>
    <img src={images[currentimg]} alt=""  style={{height:'98vh', width:'100%'} }/>

  </div>)
  }
export default App