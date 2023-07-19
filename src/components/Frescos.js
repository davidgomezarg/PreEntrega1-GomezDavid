import {useState,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Item from "./Item.js"

const mercaderia = [
  {
    id: 1,
    imagen: "../img/champinon.jpg",
    nombre: "Champiñón",
    precio: 2.5,
    descripcion:
      "Un hongo cultivado ampliamente, de sabor suave y versátil en la cocina.",
    categoria: "frescos",
    stock: 10,
  },
  {
    id: 2,
    imagen: "../img/portobello.jfif",
    nombre: "Portobello",
    precio: 3.0,
    descripcion: "Un hongo maduro y carnoso, ideal para asar o rellenar.",
    categoria: "frescos",
    stock: 5,
  },
  {
    id: 3,
    imagen: "../img/boleto.jfif",
    nombre: "Boleto comestible",
    precio: 4.75,
    descripcion:
      "Un hongo de gran tamaño y sabor delicado, muy apreciado en la gastronomía.",
    categoria: "secos",
    stock: 8,
  },
  {
    id: 4,
    imagen: "../img/shiitake.jfif",
    nombre: "Shiitake",
    precio: 3.25,
    descripcion:
      "Un hongo de origen asiático, con un sabor umami intenso y textura firme.",
    categoria: "secos",
    stock: 12,
  },
  {
    id: 5,
    imagen: "../img/ostra.jfif",
    nombre: "Ostra",
    precio: 2.0,
    descripcion: "Un hongo en forma de abanico, de sabor suave y delicado.",
    categoria: "frescos",
    stock: 15,
  },
  {
    id: 6,
    imagen: "../img/reishi.jfif",
    nombre: "Reishi",
    precio: 5.5,
    descripcion:
      "Un hongo medicinal con propiedades antioxidantes y beneficios para la salud.",
    categoria: "secos",
    stock: 3,
  },
  {
    id: 7,
    imagen: "../img/melena.jfif",
    nombre: "Melena de León",
    precio: 4.0,
    descripcion:
      "Un hongo con forma de melena de león, suave y agradable al paladar.",
    categoria: "frescos",
    stock: 6,
  },
  {
    id: 8,
    imagen: "../img/oreja.jfif",
    nombre: "Oreja de Judas",
    precio: 3.75,
    descripcion:
      "Un hongo gelatinoso de color oscuro, utilizado en la cocina asiática.",
    categoria: "frescos",
    stock: 9,
  },
  {
    id: 9,
    imagen: "../img/niscalo.jfif",
    nombre: "Níscalo",
    precio: 4.25,
    descripcion:
      "Un hongo con un sabor característico y muy apreciado en diversas preparaciones.",
    categoria: "frescos",
    stock: 7,
  },
  {
    id: 10,
    imagen: "../img/suillus.jfif",
    nombre: "Hongo de Pino",
    precio: 3.5,
    descripcion:
      "Hongos en forma de piña con un sabor delicado y textura firme.",
    categoria: "frescos",
    stock: 11,
  },
  {
    id: 11,
    imagen: "../img/suillus.jfif",
    nombre: "Hongos en escabeche",
    precio: 3.5,
    descripcion:
      "Unico en la provincia de Misiones. Escabeche de hongos Girgolas",
    categoria: "conservas",
    stock: 11,
  },
  {
    id: 12,
    imagen: "../img/suillus.jfif",
    nombre: "Semilla Miceliada",
    precio: 3.5,
    descripcion: "Cepa Pleurotus Ostreatus. Paquete 500g.",
    categoria: "semillas",
    stock: 11,
  },
];

const Frescos = ()=>{

    const [producto,setProducto] = useState([]);

    useEffect(()=>{

      setTimeout(()=>{

        setProducto(mercaderia)},3000);

    },[]);

    const prodFilter = producto.filter(p => p.categoria === "frescos");

    return(
        <Row>
        {prodFilter.map((p)=>{
          return(
              <Item
              image={p.imagen}
              name={p.nombre}
              price={p.precio}
              category={p.categoria}
              
              />
          )
        })}
        </Row>
    )
}

export default Frescos;