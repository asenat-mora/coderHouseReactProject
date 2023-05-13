import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import Row from 'react-bootstrap/Row';

function CartView(){
  //funciones que utilizaran de cartContext
  const {cart, clear} = useContext(CartContext);
  return (
    <>
      <h2>Carrito</h2>
      {cart.length > 0 ? 
      <div>
        <Row xs={2} sm={3} md={4} xl={6} className="g-3">
          {cart.map((item) => (//arreglo de componentes, usando cartItem, mapea todo el arreglo del card
            <CartItem key={item.id} id={item.id} title={item.title} price={item.price} quantity={item.quantity} />
          ))}
        </Row>
        <div className="cart-total">
          <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
        </div>
        <button className="btn btn-danger" onClick={() => clear()}>Vaciar carrito</button>
      </div>
      : 
      <h3>No hay productos en el carrito</h3>}
    </>
  )
}

export default CartView;