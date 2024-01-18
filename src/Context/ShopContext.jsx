import React, { createContext, useState } from 'react'
import all_data from '../Assets/all_product';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_data.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromoCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    
    const getTotlcartamount=()=>{
        let totalamount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let iteminfo=all_data.find((product)=>product.id===Number(item))
                totalamount+=iteminfo.new_price* cartItem[item];
            }
        }
        return totalamount;
    }

    const totalItem=()=>{
        let totalItem=0;
        for(let item in cartItem){
            if(cartItem[item]>0){
                totalItem=totalItem+cartItem[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = { all_data, cartItem,removeFromoCart,addToCart,getTotlcartamount,totalItem};


    return (
        <ShopContext.Provider value={contextValue}>
            {
                props.children
            }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
