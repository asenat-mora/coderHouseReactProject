import { Nav } from "react-bootstrap"
function NavbarLinks({links}){


  //[{href="/", name="Home"}, {href="/about", name="About"}]
  return (
    <Nav className="me-auto">
      {links.map((link) => (
        <Nav.Link href={link.href}>{link.name}</Nav.Link>
      )
      )}
    </Nav>
  )
}

export default NavbarLinks