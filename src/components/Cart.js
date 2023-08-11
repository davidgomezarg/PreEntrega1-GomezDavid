import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext.js";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import "./Cart.css"
import ItemCountCart from './ItemCountCart.js';

const Cart = () => {
  const { cart,setCart } = useContext(CartContext)
  console.log(cart)
  
  const eliminarItem = (id)=>{ 
  setCart(cart.filter(p=> p.id !== id))
}

  
  return (
    <>
      <Container>
        <table className="table colortable">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio Unitario</th>
              <th scope="col">Sub Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((p) =>

              <tr>
                <td><img alt='Hongos' src={p.image} style={{width:'90px',height:'50px'}}></img></td>
                <td>{p.name}</td>
                <td><ItemCountCart stock={p.stock+p.cant} valorInicial={p.cant} id={p.id} name={p.name} price={p.price} image={p.image} /></td>
                <td>{p.price}</td>
                <td>{p.cant*p.price}</td>
                <td><button className="btn btn-secondary" onClick={()=>eliminarItem(p.id)}>Eliminar</button></td>
              </tr>

            )}

          </tbody>
        </table>

        {
        cart.length === 0 ? <div>Carrito vacio</div>
          : <>
            <div>TOTAL:{cart.reduce((acum,p)=>acum + (p.cant*p.price),0)}</div>
            <Link to="/checkout"><button className="btn btn-secondary">Finalizar compra</button></Link>
            </>
        }
      </Container>



      

    </>
  )
}

export default Cart