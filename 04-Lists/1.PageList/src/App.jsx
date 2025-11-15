import React from 'react'
import './App.css'

const App = () => {

  const pages = ['page1', 'page2', 'page3', 'page4', 'page5']

  return (
    <div className='mainContainer'>
      {pages.map((e) => (<><div className='page'><button>{e.toLocaleUpperCase()}</button></div></>))}
    </div>
  )
}

export default App
