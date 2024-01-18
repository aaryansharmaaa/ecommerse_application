import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="price-container">
        <p className='new-price'>${props.new_price}</p>
        <p className='old-price'>${props.old_price}</p>
      </div>
    </div>
  )
}

export default Item
