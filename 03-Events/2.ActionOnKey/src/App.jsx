import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const arr = ["red", "blue", "green", "gray", "orange", "purple", "white", "orchid", "orangered", "lawngreen"]
  const [color, setColor] = useState("white")


  useEffect(() => {
    const handleKey = () => {
      const index = Math.floor(Math.random() * 10)
      setColor(arr[index])
    }

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    }
  }, []);


  return (
    <div className='container' style={{ backgroundColor: color }}>
      <h1>Press any key on Keyboard</h1>
    </div>
  )
}

export default App
