import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [detail, setDetail] = useState({ email: "", password: "" });
  const [error, setError] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    if (detail.password.length < 8) {
      setError("minimum password length is 8")
    } else {
      setDetail({ email: "", password: "" })
      setError("")
      alert("Form submit successfully")
    }
  }
  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div className="inps">
          <h2>Email</h2>
          <input type="email" required name="email" placeholder='Enter email' value={detail.email} onChange={(e) => setDetail({
            ...detail,
            email: e.target.value
          })} />
        </div>
        <div className="inps">
          <h2>Password</h2>
          <input type="password" required name="password" placeholder='Enter email' value={detail.password} onChange={(e) => setDetail({
            ...detail,
            password: e.target.value
          })} />
        </div>
        <button type='submit'>Submit</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default App
