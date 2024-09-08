import React from 'react'
import Article from './Article'
const ArticleList = ({art}) => {
  return (
    <div>
        {art.map(art=>(<Article key={art.id} title={art.title} content={art.content}/>))}
    </div>
  )
}


export default ArticleList
