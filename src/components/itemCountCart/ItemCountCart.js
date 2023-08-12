import Button from 'react-bootstrap/Button';
import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext.js";


const ItemCountCart =({id,name,stock,image,price,valorInicial})=>{

    const {addItem}= useContext(CartContext)
    const [count,setCount]=useState(valorInicial);

    const aumentar=()=>{
        setCount(count+1)
        addItem({id:id,name:name,price:price,image:image},1)
    }

    const decrementar =()=>{
        setCount(count-1)
        addItem({id:id,name:name,price:price,image:image},-1)
    }

    return(
        <div>
            
            <Button variant="secondary" disabled={count<=1} onClick={decrementar}>-</Button>
            <span style={{margin: '10px'}}>{count}</span>
            <Button variant="secondary" disabled={count>=stock} onClick={aumentar}>+</Button>
        </div>
    )

}

export default ItemCountCart;