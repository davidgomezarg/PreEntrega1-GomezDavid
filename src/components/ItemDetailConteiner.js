import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js"
//import arrayProductos from "../Json/arrayProductos.json"
import Row from 'react-bootstrap/Row';
import {getFirestore,doc,getDoc} from "firebase/firestore"


const ItemDetailConteiner = ()=>{

    const [producto,setProducto] = useState([]);
    const {Id} = useParams();

    useEffect(()=>{
     const querydb= getFirestore();
     const queryDoc= doc(querydb,"productos",Id) 
     getDoc(queryDoc)
     .then(res=>setProducto(({id:res.id, ...res.data()})))
    },[Id]);

    

    return(
            <Row>
                <ItemDetail
                id= {producto.id}
                image={producto.image}
                name={producto.name}
                price={producto.price}
                category={producto.category}
                description={producto.description}
                stock={producto.stock}
                />
            </Row>      
    )
}

export default ItemDetailConteiner;