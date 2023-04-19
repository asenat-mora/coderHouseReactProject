import { useState } from "react";
import { Button } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import './ItemCount.css';

function ItemCount({stock, setStock}){
    const [nItems, setNItems] = useState(0);

    function add(){
      if(nItems >= stock) return; //para salir de la funcion y no sumar nada
      setNItems(nItems + 1)
    }

    function subtract(){
      if(nItems < 1) return; //para salir de la funcion y no restar nada
      setNItems(nItems - 1) //si no se cumple, se resta
    }
    

    return(
       <>
          <InputGroup className="mb-3 d-flex ">
            <Button variant="light" className="flex-fill" id="count-controls" onClick=  {() => subtract()}> - </Button>
            <input type="text" className="form-control flex-fill" id="counter-text" value={nItems} readOnly/>
            <Button variant="light" className="flex-fill" id="count-controls" onClick= {() => add()}> + </Button>
          </InputGroup>
          <div className="d-flex">
            <Button variant="primary" className="flex-fill" id="add-to-cart">Añadir al carrito</Button>
          </div> 
       </> 
    )
}

export default ItemCount;
