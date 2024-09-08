import React from 'react'
import Tasklist from './tasklist'

const tasks=[
  {discription:'lorem Lorem ipsum dolor sit amet.',properties:'Lorem ipsum dolor sit amet.'}
  
]
const App = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <Tasklist papa={tasks}/>
    </div>
  )
}

export default App