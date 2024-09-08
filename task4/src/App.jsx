import React from 'react'
import ArticleList from './listofarticles.jsx'

const articles=[
  {id:1,title:'Article1',content:'This is the content of article1'},
  {id:2,title:'Article2',content:'This is the content of article2'},
  {id:3,title:'Article3',content:'This is the content of article3'},
]
const App=()=>{
  return <div>
    <h2>Article</h2>
    <ArticleList art={articles}/>
  </div>
}
export default App;