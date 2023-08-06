import ItemList from "./ItemList.js"
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
//import arrayProductos from "../Json/arrayProductos.json"
import {getFirestore,collection,getDocs,where,query} from "firebase/firestore"

const ItemListConteiner = ()=>{

    const [producto,setProducto] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{
        console.log("CategoryId es " + categoryId);
        const querydb= getFirestore();
        const queryCollection= categoryId ? query(collection(querydb,"productos"),where("category","==",categoryId)) : collection(querydb,"productos");
        getDocs(queryCollection)
        .then((res)=>{
            //console.log("res.docs: ")
            //console.log(res.docs)
            setProducto(
                res.docs.map((p)=>{
                                    //console.log(p.data());
                                    return {id:p.id, ...p.data()}
                                }))
                            })
    },[categoryId])

    

    return(
            <Row>
                <ItemList producto={producto}></ItemList>
            </Row>      
    )
}

export default ItemListConteiner;