import React from 'react'
import {useState,useContext} from 'react'
import {getFirestore,collection,addDoc} from "firebase/firestore"
import { CartContext } from "../../context/CartContext.js";

import ClipLoader from "react-spinners/ClipLoader";

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

const CheckOut = () => {
    const [orderId,setOrderId]=useState()
    const [loading,setLoading] = useState(false);
    const [mailError,setMailError]=useState(false)
    const [buyer,setBuyer]= useState({
        nombre:"",
        email:"",
        email2:"",
        telefono:""
    })

    const {nombre,email,email2,telefono} = buyer;
    const {cart,setCart} = useContext(CartContext)


    const handleInputChange = (e)=>{
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
        })
        //console.log(buyer);
    }

    const handleSubmit=(e)=>{
      e.preventDefault();

      if(buyer.email===buyer.email2)
      {
        setMailError(false)
        setLoading(true)
        const dia=new Date()
        const total = cart.reduce ((acum,p)=>acum+(p.price * p.cant),0)
        const data={buyer:{nombre: buyer.nombre,email: buyer.email, telefono: buyer.telefono},cart,total,dia,estado:"generada"}
        generarOrden(data);
        //vaciar el carrito aca
        setCart([])
      }
      else {
        setMailError(true)

      }
      
    }

    const generarOrden = (data)=>{
      const querydb= getFirestore();
      const queryCollection=collection(querydb,"Orders")
      addDoc(queryCollection,data).then(res=>{setOrderId(res.id)})
      

    }
  return (
    <>
      <div>Confirmar Compra</div>
      <hr/>
      {orderId ?  <>
                    <h1>Compra realizada con exito</h1>
                    <h3>Tu ID de compra es: {orderId}</h3>
                  </>
                  :
                  <>{loading ? 

                    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <ClipLoader color="#36d7b7" loading={loading} cssOverride={override} size={40} aria-label="Loading Spinner" data-testid="loader"/>
                    </div>
                    : <form onSubmit={handleSubmit}>
                    <div><input className="form-label" type="text" name="nombre" placeholder='nombre' value={nombre} onChange={handleInputChange} required></input></div>
                    <div><input className="form-label" type="email" name="email" placeholder='email' value={email} onChange={handleInputChange} required></input></div>
                    <div><input className="form-label" type="email" name="email2" placeholder='repeat email' value={email2} onChange={handleInputChange} required></input></div>
                    {mailError ? <p style={{fontSize: "8px", color: "#D8000C"}}>*El email debe coincidir!</p>:<></>}
                    <div><input className="form-label" type="number" name="telefono" placeholder='telefono' value={telefono} onChange={handleInputChange} required></input></div>
                    <div><input className="btn btn-secondary" type="submit" value="Confirmar"></input></div>
                  </form>
                  }
                  </>
      }
    </>
  )
}

export default CheckOut;

