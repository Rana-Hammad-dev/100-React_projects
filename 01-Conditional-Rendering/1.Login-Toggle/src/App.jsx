import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='login'>
      <h1>{isLogin ? "Please login" : "Welcome!..."}</h1>
      <button className={isLogin ? "green" : "red"} onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Login in" : "Log out"}</button>
    </div>
  )
}

export default App
