import React from 'react'
import { Footer } from './Footer'
import { Sidebar } from './sidebar'
import Button from './button'
function App() {
  return (
    <div>
      <h1>Welcome to app</h1>
      <Footer/>
      <Sidebar className="side"/>
      <Button/>
    </div>
  )
}

export default App
