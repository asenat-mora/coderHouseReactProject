import { Nav } from "react-bootstrap"
function NavbarLinks({links}){
  return (
    <Nav className="me-auto">
      {links.map((link) => (
        link
      )
      )}
    </Nav>
  )
}

export default NavbarLinks