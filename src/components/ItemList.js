
import Item from "./Item.js"


const ItemList = ({producto})=>{
  console.log("ItemList producto: ");
  console.log(producto);

  
    return(
      <>
        {producto.map((p)=>{
          return(
            <Item
            id={p.id}
            image={p.imagen}
            name={p.nombre}
            price={p.precio}
            category={p.categoria}
            />
          );
        })}  
      </>
    );
}

export default ItemList;