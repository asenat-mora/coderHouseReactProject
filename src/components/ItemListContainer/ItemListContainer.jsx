import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//componente para pintar una lista de  productos
function ItemListContainer({ products }) {//recibe como propiedad/props una lista de productos
  return (
    <Container>
      <Row>
      {
        products.map((product) => {//hace map a la lista de products
          return ( //las medidas de Col son 12 cuadritos a lo ancho, por cada tamaño toma n cuadritos para cada tarjeta
                  //react pide que siempre se pase una key en cada producto, tambien se pasan todas las propiedades que se necesitan en la card
            <Col sm={6} md={4} lg={3}> 
              <Item key={product.id} id={product.id} title={product.title} pictureUrl={product.pictureUrl} price={product.price} stock={product.stock}/> 
            </Col>
          )
        })
      }
      </Row>
    </Container>
  );
}

export default ItemListContainer;
