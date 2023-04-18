import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
      <div className='col-2'>
        <ItemCount/>
      </div>
      
    </div>
  )
}

export default App
