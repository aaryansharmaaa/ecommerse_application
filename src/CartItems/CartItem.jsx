import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import removeicon from '../Assets/cart_cross_icon.png';
import './CartItem.css';

const CartItem = () => {
  const { all_data, cartItem, removeFromoCart, getTotlcartamount } = useContext(ShopContext);

  return (
    <div className='cartitem'>
      <div className="cartitem-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_data.map((e, index) => {
          if (cartItem[e.id] > 0) {
            return <div key={index}>
              <div className="cartitem-formate cartitem-formate-main">
                <img src={e.image} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img src={removeicon} onClick={() => { removeFromoCart(e.id) }} className='crossicon' />
              </div>
              <hr />
            </div>
          }
          return null;
        })
      }
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotlcartamount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotlcartamount()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have promocode enter it here</p>
          <div className="promocode-box">
            <input type="text" className='promocode-input' placeholder='Enter your promocode here...' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
