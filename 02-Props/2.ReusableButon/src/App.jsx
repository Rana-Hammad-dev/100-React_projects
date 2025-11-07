import React from 'react'
import './App.css'
import Button from './component/button'
import { BiBorderRadius } from 'react-icons/bi'
import { MdHeight } from 'react-icons/md'

const App = () => {
  return (
    <div className="main">
      <h1>Reusable Buttons</h1>
      <div className='container'>
        <Button content="Signup" style={{ backgroundColor: "#555" }} />
        <Button content="login" style={{ backgroundColor: "blue", borderRadius: "12px", height: "4em" }} />
        <Button content="YES" style={{ backgroundColor: "green" }} />
        <Button content="NO" style={{ backgroundColor: "red", width: "5em" }} />
        <Button content="Submit" style={{ backgroundColor: "skyblue" }} />
      </div>
    </div>
  )
}

export default App
