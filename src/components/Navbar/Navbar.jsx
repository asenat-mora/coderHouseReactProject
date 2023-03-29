import { Navbar as NavbarBs , Container, Nav } from "react-bootstrap";
import NavbarLinks from "./NavbarLinks";
import CardWidget from "../CardWidget/CardWidget";

function Navbar(){
  const links = [
    {href: "/Celulares", name: "Celulares"},
    {href: "/Tablets", name: "Tablets"},
    {href: "/Computadoras", name: "Computadoras"},
    {href: "/Accesorios", name: "Accesorios"},
  ]

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