
import Item from "../item/Item.js"



const ItemList = ({producto})=>{
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