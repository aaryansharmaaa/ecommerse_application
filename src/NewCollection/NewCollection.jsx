import React from 'react'
import './NewCollection.css';
import collction from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='newcollection'>
      <h1>Collection for everyone</h1>
      <hr />
      <div className="collection-container">
        {
           collction.map((item,index)=>(
            <Item key={index} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
           ))
        }
      </div>
    </div>
  )
}

export default NewCollection
