import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext.js";
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart} = useContext(CartContext)
  return (
    <>
    {

        cart.length===0 ? <div>Carrito vacio</div>
                        :<div>{cart.map(p=>
                            
                            <>
                            <h3>Nombre: {p.name}</h3>
                            <p>Cantidad: {p.cant}</p>
                            <p>Precio: {p.price}</p>
                            </>
                            
                            )}</div>
    }
    <Link to="/checkout">
    <button>Finalizar compra</button>
    </Link>
    </>
    )
}

export default Cart