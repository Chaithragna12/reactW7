import React from 'react'
import './index.css'
import art1 from './assets/a1.jpg'
import art2 from './assets/a2.jpg'
import art3 from './assets/a3.jpg'
const artwork=[
  {
    image:art1,
    title:'Artwork 1',
    description:'This is a beautiful piece of abstract art.'
  },
  {
    image:art2,
    title:'Atrwork 2',
    description:'A stunning landscape painting.'
  },
  {
    image:art3,
    title:'Artwork 3',
    description:'An intricate and vibrant digital artwork.'
  },
]
const App = () => {
  return (
    <div className='gallery'>
      {artwork.map((artworks,index)=>(
        <div key={index}>
          <img src={artworks.image} alt=""/>
          <h3>{artworks.title}</h3>
          <p>{artworks.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App
