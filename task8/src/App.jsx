import React,{useState} from 'react'
import image1 from './assets/academy.jpg'
import image2 from './assets/blog2.jpg'
import image3 from './assets/jack.webp'

const App = () => {
  const images=[image1,image2,image3];
  const [currentimage,setcurrentimage]=useState(0);

  const handleprev=()=>{
    setcurrentimage((preimg)=>preimg===0?images.length-1:preimg-1);
  }
  const handlenext=()=>{
    setcurrentimage(nextimg=>nextimg===images.length-1?0:nextimg+1);
  }
  return (
    <div>
      <div>
        <img src={images[currentimage]} alt="" style={{height:'90vh',width:'50%'}}/>
      </div>
      <div>
        <button onClick={handleprev}>Previous</button> 

        <button onClick={handlenext} style={{marginLeft:'20px'}}>Next</button>
      </div>
    </div>
  )
}

export default App