import ItemList from "../itemList/ItemList.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs,where,query} from "firebase/firestore"

import ClipLoader from "react-spinners/ClipLoader";

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

const ItemListConteiner = ()=>{

    const [producto,setProducto] = useState([]);
    const [loading,setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{
        const querydb= getFirestore();
        const queryCollection= categoryId ? query(collection(querydb,"productos"),where("category","==",categoryId)) : collection(querydb,"productos");
        getDocs(queryCollection)
        .then((res)=>{
            setLoading(false)
            setProducto(
                res.docs.map((p)=>{
                                    return {id:p.id, ...p.data()}
                                }))
                            })
    },[categoryId])

    

    return(
            <Container >
                <Row className="justify-content-md-center">
                    {loading?
                    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <ClipLoader color="#36d7b7" loading={loading} cssOverride={override} size={40} aria-label="Loading Spinner" data-testid="loader"/>
                    </div>
                    
                    :<ItemList producto={producto}></ItemList>

                    }
                    
                </Row>
            </Container>      
    )
}

export default ItemListConteiner;