import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item}){
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
          Descripcion: ${item.price}
        </Card.Text>
        <Card.Text>
          Stock: {stock}
        </Card.Text>
        <ItemCount stock={item.stock} setStock={setStock}/>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail;
