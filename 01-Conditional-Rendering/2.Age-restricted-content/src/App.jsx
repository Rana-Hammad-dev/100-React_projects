import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [isAdult, setisAdult] = useState(false)
  const [denied, setDenied] = useState(false)

  return (
    <>
      {denied ? (<>
        <div className="notfound">
          <h1>Contact not found</h1>
        </div>
      </>) : (<>
        <div className='age-restriction'>
          {isAdult ? "" : <><div className="blur"></div>
            <div className='prompt'>
              <h1>Age Verfication</h1>
              <p>Are you sure you are 18+</p>
              <div className="btn">
                <button onClick={() => { setDenied(true); setisAdult(!isAdult) }} className='no'>No</button>
                <button onClick={() => setisAdult(!isAdult)} className='yes'>Yes</button>
              </div>
            </div></>}
          {isAdult && <> <h1>Only adults can access</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error, dolores reprehenderit dolorem ipsa veniam ut velit? Modi iste perferendis alias iure hic, dolorem soluta maiores nisi, voluptates aut aspernatur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, laudantium eveniet ab dolores quo ullam obcaecati magni necessitatibus odio blanditiis, neque fuga explicabo atque officia fugit numquam? Asperiores, odit sapiente.</p>
          </>}
        </div>
      </>)}
    </>
  )
}

export default App
