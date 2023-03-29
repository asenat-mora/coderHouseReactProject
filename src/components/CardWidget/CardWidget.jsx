
import { Nav } from "react-bootstrap";
import { useState } from "react";
import CartIcon from "../../assets/shopping_cart.svg";
import "./CardWidget.css";

function CardWidget(){
  const [cartNumber, setCartNumber] = useState(0);
  return (
    <Nav>
      <Nav.Item> 
        <div className="container">
          <img src={CartIcon} alt="Cart Icon" className="cart_img" />
          <p className="cart_number">{cartNumber}</p>
        </div>
      </Nav.Item>
    </Nav>
  )
}

export default CardWidget;