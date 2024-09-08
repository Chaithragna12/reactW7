import React from 'react'
import './App.css'
const cards=[
  {title:'Card 1',description:'This is the first card.'},
  {title:'Card 2',description:'This is the second card.'},
  {title:'Card 3',description:'This is the Third card.'},
  {title:'Card 4',description:'This is the fourth card.'},
  {title:'Card 5',description:'This is the fifth card.'},
  {title:'Card 6',description:'This is the sixth card.'},
  {title:'Card 7',description:'This is the seventh card.'},
]
const App = () => {
  return (
    <div className='box'>
      {cards.map(card=>(
        <div className='dashcard'>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App