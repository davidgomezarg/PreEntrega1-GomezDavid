import Button from 'react-bootstrap/Button';
import { useContext,useEffect,useState } from "react";
import { CartContext } from "../context/CartContext.js";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const ItemCount =({id,name,stock,image,price})=>{

    const {cart,addItem}= useContext(CartContext)
    const {Id} = useParams();

    const aumentar=()=>{
        setCount(count+1)
    }

    const decrementar =()=>{
        setCount(count-1)
    }

    const [count,setCount]=useState(1);
    const [stockDisponible,setStockDisponible]=useState(0)//Aca hay problema! La prop stock viene de una promesa. El componente ya se renderizo por primera vez

    useEffect(()=>{
        //El producto esta en el carrito? Respuesta: SI, entonces stock disponible depende de la cantidad que está en el carrito.
        console.log("Se modificará stock",stock)

        const index= cart.findIndex(p=>p.id===Id)
        
        setStockDisponible(index !== -1 ? cart[index].stock : stock);

    },[stock])
    

    const handleAddItem =()=>{
        addItem({id:id,name:name,price:price,image:image,stock:stock},count,stock)
        Toast.fire({
            icon: 'success',
            title: 'Producto cargado al carrito'
          })
        setStockDisponible(stockDisponible-count)
        setCount(1)
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    return(
        <div>
            
            <Button variant="secondary" disabled={count<=1} onClick={decrementar}>-</Button>
            <span style={{margin: '10px'}}>{count}</span>
            <Button variant="secondary" disabled={count>=stockDisponible} onClick={aumentar}>+</Button>
            <br></br>
            <Button variant="secondary" style={{marginTop: '10px'}} disabled={stockDisponible===0} onClick={handleAddItem}>Agregar a Carrito</Button>
        </div>
    )

}

export default ItemCount;