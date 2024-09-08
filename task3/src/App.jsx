import React from 'react'
import Userlist from './userlist'
function app(){
  const users=[
    {id:1,name:'chaithra'},
    {id:2,name:'ranjith'}
  ];
  return(
    <div>
      <h1>UserList</h1>
      <Userlist users={users}/>
    </div>
  )
}
export default app
