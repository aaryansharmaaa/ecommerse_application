import React from 'react'
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="price-container">
            <p className='new-price'>${props.new_price}</p>
            <p className='old-price'>${props.old_price}</p>
        </div>
    </div>
  )
}

export default Item
