import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView';

//componente principal, componente padre que se encarga de renderizar toda la pag y los otros componentes
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/brand/:brandId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetail />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
