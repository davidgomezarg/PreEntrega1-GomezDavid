import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js"
import arrayProductos from "../Json/arrayProductos.json"
import Row from 'react-bootstrap/Row';
import {getFirestore,doc,getDoc} from "firebase/firestore"


const ItemDetailConteiner = (props)=>{

    const [producto,setProducto] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
     const querydb= getFirestore();
     const queryDoc= doc(querydb,"productos","NGaYkUmk59MwjjXccMbG") 
     getDoc(queryDoc)
     .then(res=>setProducto(({id:res.id, ...res.data()})))
    },[id]);

    

    return(
            <Row>
                <ItemDetail
                image={producto.image}
                name={producto.name}
                price={producto.price}
                category={producto.category}
                description={producto.description}
                />
            </Row>      
    )
}

export default ItemDetailConteiner;