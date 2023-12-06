import React from 'react'
import './RelatedProduct.css';
import Item from '../Item/Item';
import data from '../Assets/data';

const RelatedProduct = () => {
    return (
        <div className='relatedproduct'>
            <h1>Related Products</h1>
            <hr></hr>
            <div className="relatedproduct-item">
                {data.map((item, index) => {
                    return <Item key={index} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} id={item.id}/>
                })}
            </div>
        </div>
    )
}

export default RelatedProduct
