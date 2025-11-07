import React from 'react'
import './Product.css'

const Product = (props) => {
    return (
        <div className='product'>
            <img src={props.image} alt="image" />
            <h2>{props.name}</h2>
            <h3>Rs: {props.price}</h3>
            <div>
                {props.discount && <div className="discount">
                    After discount: Rs:<p>{Math.floor(((props.price / props.discount) - props.price) * -1)}</p></div>}
            </div>
        </div>
    )
}

export default Product
