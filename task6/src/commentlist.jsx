import React from 'react'
import Comment from './comment'
const commentlist = ({com}) => {
  return (
    <div>
        {com.map(com=> <Comment name={com.name} comments={com.comments} />)}
    </div>
  )
}

export default commentlist