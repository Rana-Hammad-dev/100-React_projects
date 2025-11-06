import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [isActive, setIsActive] = useState(true)
  const [Admin, setAdmin] = useState(false)
  return (
    <div className='mainDashboard'>
      {isActive ? (<>
        <div className='blur'></div>
        <div className="signIn">
          <h1>Sign Up as..</h1>
          <div className="btn">
            <button onClick={() => { setIsActive(!isActive) }}>User</button>
            <button onClick={() => { setIsActive(!isActive); setAdmin(true) }}>Admin</button>
          </div>
        </div>
      </>) : (<>
        {Admin ? (<>
          <div className="admin">
            <div className="box1">
              <h1>Welcome to Admin Dashboard</h1>
            </div>
            <div className="box2">
              <div className="tools">
                <h3>Changing password</h3>
                <button>Change</button>
              </div>
              <div className="tools">
                <h3>Changing Name</h3>
                <button>Name</button>
              </div>
              <div className="tools">
                <h3>Lock the device</h3>
                <button>Lock</button>
              </div>
            </div>
          </div>
        </>) : (<>
          <div className="user">
            <div className="userbox1">
              <h2>Home</h2>
              <h2>About</h2>
              <h2>Services</h2>
              <h2>Contact</h2>
            </div>
            <div className="userbox2">
              <h1>Welcome to User Dashboard</h1>
            </div>
          </div>
        </>)
        }
      </>)
      }
    </div >
  )
}

export default App
