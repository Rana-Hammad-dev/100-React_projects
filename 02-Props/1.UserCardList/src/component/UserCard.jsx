import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
    return (
        <div className='card'>
            <div className="pic"></div>
            <h1>{props.name}</h1>
            <div className="skills">
                <p>{props.description}</p>
                <h2>{props.profession}</h2>
            </div>
        </div>
    )
}

export default UserCard
