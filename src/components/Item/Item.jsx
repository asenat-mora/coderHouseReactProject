import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Item.css';

function Item({item}){
  const [stock, setStock] = useState(item.stock);

  return (
    <Card className='m-3'>
      <Card.Img variant="top" id="img-fixed-size" src={item.pictureUrl}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Precio: ${item.price}
        </Card.Text>
        <Card.Text>
          Stock: {stock}
        </Card.Text>
        <Button variant="primary" >Ver Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
