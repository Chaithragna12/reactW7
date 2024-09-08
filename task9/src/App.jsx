import React from 'react'
import './index.css'
import T1 from './assets/t1.jpg'
import T2 from './assets/t2.webp'
import T3 from './assets/t3.jpeg'
const App = () => {
  return (
    <div className='videogallery'>
      <div className="thumbnail">
        <img src={T1} alt="" />
      </div>
      <div className="thumbnail">
        <img src={T2} alt="" />
      </div>
      <div className="thumbnail">
        <img src={T3} alt="" />
      </div>
    </div>
  )
}

export default App
