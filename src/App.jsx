import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllProducts } from './api/products';
import { useEffect, useState } from 'react';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer products={products} />
      
    </div>
  )
}

export default App
