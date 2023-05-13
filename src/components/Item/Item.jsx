//componente que muestra la informacion de cada producto
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';//hook para moverse entre rutas
import './Item.css';

function Item({id, title, price, pictureUrl, stock}){
  const navigate = useNavigate();
  return (
    <Card className='m-3'>
      <Card.Img variant="top" id="img-fixed-size" src={pictureUrl}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <Card.Text>
          Stock: {stock}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/item/${id}`)}>Ver Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
