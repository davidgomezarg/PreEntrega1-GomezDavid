import ItemList from "./ItemList.js"
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import arrayProductos from "../Json/arrayProductos.json"
import {getFirestore,collection,getDocs} from "firebase/firestore"

const ItemListConteiner = ()=>{

    const [producto,setProducto] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const querydb= getFirestore();
        const queryCollection= collection(querydb,"productos") 
        getDocs(queryCollection)
        .then(res=>setProducto(res.docs.map(p=>({id:p.id, ...p.data()}))))

    },[]);

    

    return(
            <Row>
                <ItemList producto={producto}></ItemList>
            </Row>      
    )
}

export default ItemListConteiner;