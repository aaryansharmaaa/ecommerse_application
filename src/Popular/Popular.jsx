import React from 'react'
import './Popular.css';
import data from '../Assets/data';
import Item from '../Item/Item';


const Popular = () => {
    return (
        <div className='popular'>
            <h1>Popular in women</h1>
            <hr />
            <div className="item-container">
                {
                    data.map((item, index) => (
                        <Item key={index} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} />
                    ))
                }
            </div>

        </div>
    )
}

export default Popular
