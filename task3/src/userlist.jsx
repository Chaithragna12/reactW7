import React from 'react'
import User from './user'

function userlist({users}){
    return (
        <ul>
            {users.map(user => (
                <User key={user.id} name={user.name}/>
            ))}
        </ul>
    )
}

export default userlist