import { Navbar as NavbarBs , Container } from "react-bootstrap";
import NavbarLinks from "./NavbarLinks";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar(){
  const links = [
    <Link className="nav-link" to="/">Todos</Link>,
    <Link className="nav-link" to="/brand/1">Samsung</Link>,
    <Link className="nav-link"to="/brand/2">Xiaomi</Link>,
    <Link className="nav-link" to="/brand/3">Apple</Link>,
    <Link className="nav-link" to="/brand/4">Motorola</Link>,
    <Link className="nav-link" to="/brand/5">HiSense</Link>
  ]

  const navigate = useNavigate();

  return (
    <NavbarBs bg="dark" variant="dark" expand="md">
      <Container fluid>
        <NavbarBs.Brand href="#">Eccomerce</NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <NavbarLinks links={links}/>
          <CardWidget />
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  )
}

export default Navbar