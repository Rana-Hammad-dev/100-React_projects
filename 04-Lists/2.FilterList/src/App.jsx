import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [search, setsearch] = useState("")
  const fruits = [{ name: "apple", quantity: 10 }, { name: "mango", quantity: 20 }, { name: "banana", quantity: 12 }, { name: "orange", quantity: 7 }, { name: "tomato", quantity: 6 }, { name: "cheery", quantity: 100 }, { name: "anar", quantity: 18 }, { name: "pineapple", quantity: 3 },]
  const filter = fruits.filter((e) => e.name == search)

  return (
    <div className='main'>
      <h1>Find fruits here..</h1>
      <input type="text" placeholder='Search here...!' onChange={(e) => setsearch(e.target.value)} />
      {search ? filter.map((e) => (<><div className='filter'>Name:  <h1>{e.name.toLocaleUpperCase()}</h1> Quantity: <h2>{e.quantity}</h2></div></>)) : (<><p>Nothing to show !...</p></>)}
    </div>
  )
}

export default App
