import { createContext, useState } from "react"

export const CartContext = createContext()


const CartProvider =({children})=>{

    const [cart,setCart]=useState([])

    const addItem = (item,cant)=>{
        if(cart.some(p=>p.id===item.id)){

            const index= cart.findIndex(p=>p.id===item.id)
            const eliminado=cart[index]
            cart.splice(index,1,{id:eliminado.id,name:eliminado.name,image:eliminado.image,cant:(eliminado.cant+cant)})
            console.log("Ya esta en el carrito. Se modifico cantidad")
            console.log(cart)

        }
        else {
            setCart([...cart,{...item,cant}]);
            console.log("Producto nuevo en el carrito")
            console.log(cart)
        }
    }

    const getQuantity = ()=>{

        return cart.reduce((acum,p)=>acum + p.cant,0)
    }

    return(
        <CartContext.Provider value={{cart,addItem,getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider