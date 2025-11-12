import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className='counter' onClick={() => setCounter(counter + 1)}>
      <h1>Counter: {counter}</h1>
    </div>
  )
}

export default App
