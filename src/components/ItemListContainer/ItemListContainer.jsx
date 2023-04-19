import Table from 'react-bootstrap/Table';
import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function ItemListContainer({ products }) {
  return (
    <Container>
      <Row>
      {
        products.map((product) => {
          return (
            <Col sm={6} md={4} lg={3}>
              <Item className="" key={product.id} item={product} />
            </Col>
          )
        })
      }
      </Row>
    </Container>

  );
}

export default ItemListContainer;