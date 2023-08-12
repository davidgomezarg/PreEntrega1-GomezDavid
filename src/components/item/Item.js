import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import "./item.css"

function Item({ id, image, name, price, category }) {

    return (

        <Card className='cardClass'>
            <Card.Img variant="" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Precio: ${price}</p>
                <p>Categoria: {category}</p>
                <Card.Text>

                </Card.Text>
                <Nav.Link as={Link} to={"/item/" + id} style={{ textdecoration: 'none' }}>
                    <Button variant="secondary">Detalles</Button>
                </Nav.Link>
            </Card.Body>
        </Card>

    );
}

export default Item;