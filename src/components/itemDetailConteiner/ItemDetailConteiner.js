import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getFirestore, doc, getDoc,collection } from "firebase/firestore"


const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState([]);
    const { Id } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc= doc(querydb,"productos",Id) 

        getDoc(queryDoc).then((doc) => {
            if (doc.exists()) {
                setProducto(({id:doc.id, ...doc.data()}))
                setError(false)
            } else {
                setError(true)
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    


    }, [Id]);


return (<>
    {error ? <Navigate to="/*" />
        :
        <Container>
            <Row className="justify-content-md-center">
                <ItemDetail
                    id={producto.id}
                    image={producto.image}
                    name={producto.name}
                    price={producto.price}
                    category={producto.category}
                    description={producto.description}
                    stock={producto.stock}
                />
            </Row>
        </Container>
    }
</>
)
}

export default ItemDetailConteiner;