
import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext.js";

const CartWidget = ()=>{

    const {getQuantity} = useContext(CartContext)

    return(
        <div>
            <i className="bi bi-cart4"></i>
            <span>{getQuantity()}</span>
        </div>
    )
}

export default CartWidget;