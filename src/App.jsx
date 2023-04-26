import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllProducts } from './api/products';
import { useEffect, useState } from 'react';

//componente principal, componente padre que se encarga de renderizar toda la pag y los otros componentes
function App() {
  const [products, setProducts] = useState([]);// [valor del producto, setear/para cambiar la lista] = llamado al hoock con estado inicial [vacio]

  useEffect(() => {//
    getAllProducts().then((productList) => {//de la api product, resuelve la promesa para obtener la lista de productos
      setProducts(productList);//guarda la lista de productos en el estado y al final queda en products
    });
  }, []);

  return (//nombre de propiedad = {valor del estado} de la linea 21
    //el componente recibe la propiedad la cual es una lista de productos
    <div className="App">
      <Navbar />
      <ItemListContainer products={products} />
      
    </div>
  )
}

export default App
