import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col';
import './CartItem.css';

function CartItem({id, title, price, quantity }){
  const {removeItem} = useContext(CartContext);
  return (
    <Col>
      <Card>
          <Card.Header id="header">{title} <CloseButton id="closeButton"  onClick={() => removeItem(id)}/></Card.Header>
          <Card.Body>
            <Card.Text>
              Cantidad: {quantity}
            </Card.Text>
            <Card.Text>
              Precio Unidad: ${price}
            </Card.Text>
            <Card.Text>
              SubTotal: ${price*quantity}
            </Card.Text>
          </Card.Body>
        </Card>
    </Col>
  )
}

export default CartItem;