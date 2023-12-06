import React from 'react'
import './ProductDispaly.css';
import star from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';

const ProductDisylay = (props) => {
    const { product } = props;
    return (
        <div className='productdispaly'>
            <div className="productdisplay-left">
                <div className="productimage">
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className="productimage-large">
                    <img className='main-image' src={product.image} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="product-ratting">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star_dull} />
                    <p>(122)</p>
                </div>
                <div className="product-prices">
                    <div className="product-new-price">
                        ${product.old_price}
                    </div>
                    <div className="product-old-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-discription">
                    Introducing our versatile Cotton Jacket, a stylish blend of comfort and fashion. Crafted from high-quality cotton, this jacket offers a lightweight and breathable feel, making it perfect for any season. Its modern design ensures a trendy look, while the soft cotton fabric provides a cozy and comfortable fit.
                </div>
                <div className="productdispaly-size">
                    <h1>Select Size</h1>
                    <div className="product-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>Add to Cart</button>
                <div className="productDisplay">
                    <p className='productDispaly'><span >Category :</span>{product.category}</p>                    
                    <p className='productDispaly'><span >Tags :</span>Modern Latest</p>                    

                </div>
            </div>
        </div>
    )
}

export default ProductDisylay
