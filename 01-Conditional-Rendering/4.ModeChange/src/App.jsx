import React, { useState } from 'react'
import './App.css'
import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

const App = () => {
  const [toggleMode, setToggleMode] = useState(false);

  return (
    <div
      className={toggleMode ? "modechange dark" : "modechange light"}
      onClick={() => setToggleMode(!toggleMode)}
    >
      <h1>{toggleMode ? "Night Mode" : "Day Mode"}</h1>
      {toggleMode
        ? <BsMoon size={100} className="icon" />
        : <IoSunnyOutline size={100} className="icon" />
      }
    </div>
  )
}

export default App;
