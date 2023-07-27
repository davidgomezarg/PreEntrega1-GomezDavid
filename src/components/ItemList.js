
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
            image={p.image}
            name={p.name}
            price={p.price}
            category={p.category}
            />
          );
        })}  
      </>
    );
}

export default ItemList;