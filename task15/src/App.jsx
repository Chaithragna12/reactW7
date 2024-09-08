import React from 'react'
import './index.css'
const App = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="email">Email:</label><br />
        <input type="email" id='email' placeholder='enter email'/><br /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id='password' placeholder='enter password'/><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App