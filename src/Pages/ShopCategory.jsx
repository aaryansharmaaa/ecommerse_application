import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Item/Item';
import './Css/ShopCategory.css';
import dropdown from '../Assets/dropdown_icon.png';
const ShopCategory = (props) => {
  const { all_data } = useContext(ShopContext);
  return (
    <div>
      <div className="banner-container">
        <img src={props.banner} />
      </div>
      <div className="extra-container">
        <p><span className="dark">Showing 12 product </span>out of 36</p>
        <div className="dropdown">
          <img src={dropdown} />
          <p>Show more</p>
        </div>

      </div>
      <div className="product-container">
        {
          all_data.map((item, index) => {
            if (item.category === props.category) {
              return (
                <Item key={index} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} id={item.id}/>
              )
            }
            else {
              return null;
            }
          })
        }
      </div>
      <div className="bottom-container">
        <button>Explore More</button>
        
      </div>

    </div>
  )
}

export default ShopCategory
