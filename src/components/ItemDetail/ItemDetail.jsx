import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../api/products';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ItemDetail(){
  const { itemId } = useParams();
  const { addItem } = useContext(CartContext);
  const [item, setItem] = useState({});

  useEffect(() => {
    getProductById(itemId).then(item => {
      setItem(item);
    })
  }, [itemId]);

  function addToCart(quantity){
    addItem(item, quantity);
  }

  return (
    <Card className='m-3'>
      <Card.Img variant="top" id="img-fixed-size" src={item.pictureUrl}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Precio: ${item.price}
        </Card.Text>
        <Card.Text>
          Descripcion: {item.description}
        </Card.Text>
        <Card.Text>
          Stock: {item.stock}
        </Card.Text>
        <ItemCount stock={item.stock} addToCartFunction={addToCart}/>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail;
