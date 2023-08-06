import React from 'react'
import {useState,useContext} from 'react'
import {getFirestore,collection,addDoc,getDocs,where,query} from "firebase/firestore"
import { CartContext } from "../context/CartContext.js";

const CheckOut = () => {
    const [orderId,setOrderId]=useState()
    const [buyer,setBuyer]= useState({
        nombre:"",
        email:"",
        telefono:""
    })

    const {nombre,email,telefono} = buyer;
    const {cart} = useContext(CartContext)


    const handleInputChange = (e)=>{
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
        })
        console.log(buyer);
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      const dia=new Date()
      const total = cart.reduce ((acum,p)=>acum+(p.price * p.cant),0)
      const data={buyer,cart,total,dia}
      generarOrden(data);
      //vaciar el carrito aca
    }

    const generarOrden = (data)=>{
      const querydb= getFirestore();
      const queryCollection=collection(querydb,"Orders")
      addDoc(queryCollection,data).then(res=>{setOrderId(res.id)})
      

    }
  return (
    <>
      <div>Checkout</div>
      <hr/>
      {orderId ?  <>
                    <h1>Compra realizada con exito</h1>
                    <h3>Tu ID de compra es: {orderId}</h3>
                  </>
                  :
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="nombre" placeholder='nombre' value={nombre} onChange={handleInputChange} required></input>
                    <input type="email" name="email" placeholder='email' value={email} onChange={handleInputChange} required></input>
                    <input type="number" name="telefono" placeholder='telefono' value={telefono} onChange={handleInputChange} required></input>
                    <input type="submit" value="Confirmar"></input>
                  </form>
      }
    </>
  )
}

export default CheckOut;
