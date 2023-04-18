import { useState } from "react";
import { Button } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import './ItemCount.css';

function ItemCount(){
    const [nItems, setNItems] = useState(0);

    function add(){
      setNItems(nItems + 1)
    }

    function subtract(){
      if(nItems < 1) return; //para salir de la funcion y no restar nada
      setNItems(nItems - 1) //si no se cumple, se resta
    }


    return(
       <>
          <InputGroup className="mb-3 d-flex ">
            <Button variant="light" className="flex-fill col-3" id="count-controls" onClick=  {() => subtract()}> - </Button>
            <InputGroup.Text className="flex-fill col-6" id="counter-text">{nItems}</InputGroup.Text>
            <Button variant="light" className="flex-fill col-3" id="count-controls" onClick= {() => add()}> + </Button>
          </InputGroup>
          <div className="d-flex">
            <Button variant="primary" className="flex-fill" id="add-to-cart">Agregar a carrito</Button>
          </div>
          
       </> 
    )
}

export default ItemCount;
