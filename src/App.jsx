import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </div>
  )
}

export default App
