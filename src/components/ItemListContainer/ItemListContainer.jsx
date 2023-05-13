import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { getProductsByBrand, getAllProducts } from '../../api/products';
import { useParams } from 'react-router-dom';

//componente para pintar una lista de  productos
function ItemListContainer() { 
  const { brandId } = useParams();//para obtener el id de la marca de la url
  const [products, setProducts] = useState([]);// [valor del producto, setear/para cambiar la lista] = llamado al hoock con estado inicial [vacio]

  useEffect(() => {
    const func = brandId ? getProductsByBrand : getAllProducts;//si hay brandId, se llama a getProductsByBrand, sino a getAllProducts

    func(brandId).then(productList => {//de la api product, resuelve la promesa para obtener la lista de productos
      setProducts(productList);//guarda la lista de productos en el estado y al final queda en products
    })
  }, [brandId]);

  return (
    <Container>
      <Row>
      {
        products ? 
        products.map((product) => {//hace map a la lista de products
          return ( //las medidas de Col son 12 cuadritos a lo ancho, por cada tamaño toma n cuadritos para cada tarjeta
                  //react pide que siempre se pase una key en cada producto, tambien se pasan todas las propiedades que se necesitan en la card
            <Col key={product.id} sm={6} md={4} lg={3}> 
              <Item id={product.id} title={product.title} pictureUrl={product.pictureUrl} price={product.price} stock={product.stock}/> 
            </Col>
          )
        }) 
        : <h1>Cargando...</h1>
      }
      </Row>
    </Container>
  );
}

export default ItemListContainer;
