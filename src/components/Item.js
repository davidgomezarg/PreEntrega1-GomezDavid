import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';

const Item = ({id,image,name,price,category}) => {

    return (
        
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h5>Precio: {price}</h5>
                    <h6>Categoria: {category}</h6>
                    <Card.Text>
                        {}
                    </Card.Text>
                    <Nav.Link as={Link} to={"/item/" + id} style={{textdecoration : 'none'}}>
                        <Button variant="primary">Detalles</Button>
                    </Nav.Link>
                </Card.Body>
            </Card>
        
    );
}

export default Item;