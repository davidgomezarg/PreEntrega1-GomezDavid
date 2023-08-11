import { createContext, useState } from "react"

export const CartContext = createContext()


const CartProvider =({children})=>{

    const [cart,setCart]=useState([])

    const sumarCantidad =(id,cant)=>{
        const index= cart.findIndex(p=>p.id===id)
        const eliminado=cart[index]
        cart.splice(index,1,{id:eliminado.id,name:eliminado.name,price:eliminado.price,image:eliminado.image,stock:(eliminado.stock-cant),cant:(eliminado.cant+cant)})
        setCart([...cart])
    }

    const addItem = (item,cant,stock)=>{

        cart.some(p=>p.id===item.id) ? sumarCantidad(item.id,cant) : setCart([...cart,{...item,stock:(stock-cant),cant}]);
    }

    const getQuantity = ()=>{

        return cart.reduce((acum,p)=>acum + p.cant,0)
    }

    return(
        <CartContext.Provider value={{cart,addItem,getQuantity,setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider