import ItemList from "./ItemList.js"
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import arrayProductos from "../Json/arrayProductos.json"

const ItemListConteiner = ()=>{

    const [producto,setProducto] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(id ? arrayProductos.filter(p=>p.categoria === id) : arrayProductos)

            },3000);
        });

        promesa.then((data)=>{
            setProducto(data);
        })

      

    },[id]);

    

    return(
            <Row>
                <ItemList producto={producto}></ItemList>
            </Row>      
    )
}

export default ItemListConteiner;