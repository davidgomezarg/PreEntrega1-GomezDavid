import Button from 'react-bootstrap/Button';
import { useContext,useState } from "react";
import { CartContext } from "../context/CartContext.js";


const ItemCount =({id,name,stock,image,price})=>{

    const [count,setCount]=useState(1);

    const aumentar=()=>{
        setCount(count+1)
    }

    const decrementar =()=>{
        setCount(count-1)
    }

    const {addItem}= useContext(CartContext)

    const handleAddItem =()=>{
        addItem({id:id,name:name,price:price,image:image},count)
    }

    return(
        <>
            
            <Button variant="primary" disabled={count<=1} onClick={decrementar}>-</Button>
            <span style={{margin: '10px'}}>{count}</span>
            <Button variant="primary" disabled={count>=stock} onClick={aumentar}>+</Button>
            <br></br>
            <Button variant="primary" style={{margin: '10px'}} onClick={handleAddItem}>Agregar a Carrito</Button>
        </>
    )

}

export default ItemCount;