import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js"
import arrayProductos from "../Json/arrayProductos.json"
import Row from 'react-bootstrap/Row';


const ItemDetailConteiner = (props)=>{

    const [producto,setProducto] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProductos.find(p=>p.id === parseInt(id)))

            },3000);
        });

        promesa.then((data)=>{
            setProducto(data);
        })

      

    },[id]);

    

    return(
            <Row>
                <ItemDetail
                image={producto.imagen}
                name={producto.nombre}
                price={producto.precio}
                category={producto.categoria}
                description={producto.descripcion}
                />
            </Row>      
    )
}

export default ItemDetailConteiner;