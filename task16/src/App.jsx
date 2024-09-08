import React from 'react'
import './index.css'
const App = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="email">First Name:</label><br />
        <input type="email" id='email' placeholder='enter First Name'/><br /><br />
        <label htmlFor="password">Last Name:</label><br />
        <input type="password" id='password' placeholder='enter Last Name'/><br /><br />
        <label htmlFor="num">Phone no</label><br />
        <input type="number" id='num' placeholder='Phone no' /><br /><br />
        <button>Save</button>
      </form>
    </div>
  )
}

export default App
