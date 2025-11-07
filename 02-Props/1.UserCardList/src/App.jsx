import React from 'react'
import './App.css'
import UserCard from './component/UserCard'

const App = () => {
  return (
    <div className='main'>
      <h1>User List</h1>
      <div className="userlist">
        <UserCard name="Hammad" description="Creating Web Stuff" profession="MERN Stack" />
        <UserCard name="Ali" description="Selling seo Stuff" profession="Shopkeeper" />
        <UserCard name="Saim" description="Creating UI" profession="Frontend Developer" />
        <UserCard name="Uzair" description="Managing market" profession="Marketing Manager" />
        <UserCard name="Zaheer" description="Creating server" profession="Backend Developer" />
      </div>
    </div>
  )
}

export default App
