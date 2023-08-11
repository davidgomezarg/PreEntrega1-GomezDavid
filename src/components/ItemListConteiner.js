import ItemList from "./ItemList.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
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
            setProducto(
                res.docs.map((p)=>{
                                    return {id:p.id, ...p.data()}
                                }))
                            })
    },[categoryId])

    

    return(
            <Container >
                <Row className="justify-content-md-center">
                    <ItemList producto={producto}></ItemList>
                </Row>
            </Container>      
    )
}

export default ItemListConteiner;