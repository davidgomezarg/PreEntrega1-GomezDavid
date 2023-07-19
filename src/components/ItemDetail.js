import ItemCount from "./ItemCount.js"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({image,name,price,category,description})=>{
    return(
      <>
         <Card style={{ width: '25rem', margin:"10px" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <h5>Precio: {price}</h5>           
                <ItemCount/>
                <Button variant="primary">Agregar a Carrito</Button>
            </Card.Body>
        </Card>
      </>
    );
}

export default ItemDetail;