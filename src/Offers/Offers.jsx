import React from 'react'
import './Offers.css';
import exclusive from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offer'>
        <div className="offerleft">
           <h1>Exclusive</h1>
           <h1>Offer for You</h1>
           <p>only on best seller product</p>
           <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive} />
        </div>
      
    </div>
  )
}

export default Offers
