import React from 'react'
import './button.css'

const button = ({ content, style }) => {
    return (
        <button style={style}>
            {content}
        </button>
    )
}

export default button
