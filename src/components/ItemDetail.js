import ItemCount from "./ItemCount.js"
import Card from 'react-bootstrap/Card';

const ItemDetail = ({id,image,name,price,category,description,stock})=>{

    

    return(
      <>
         <Card style={{ width: '20rem', margin:"10px",paddingRight: '0',paddingLeft:'0' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <h5>Precio: {price}</h5>           
                <ItemCount stock={stock} id={id} name={name} price={price} image={image} />
                
            </Card.Body>
        </Card>
      </>
    );
}

export default ItemDetail;