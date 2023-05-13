import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import CartIcon from "../../assets/shopping_cart.svg";
import "./CardWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";//para traer la funcion que cambia de ruta

function CardWidget(){
  const { cart } = useContext(CartContext);
  const [cartNumber, setCartNumber] = useState(0);
  const navigate = useNavigate();
  //actualizar num de items
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    })
    setCartNumber(total);
  }, [cart]);

  return (//a la imagen se le agrega un onClick para crear una ruta
    <Nav>
      <Nav.Item> 
        <div className="container">
          <img src={CartIcon} alt="Cart Icon" className="cart_img" onClick={() => navigate("/cart")}/>
          <p className="cart_number">{cartNumber}</p>
        </div>
      </Nav.Item>
    </Nav>
  )
}

export default CardWidget;