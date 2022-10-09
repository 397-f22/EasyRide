import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

export const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand className="fs-1" href="#allrides">
        EasyRide
      </Navbar.Brand>
      <Nav className="fs-3 me-auto">
        <Nav.Link href="#allrides">All Rides</Nav.Link>
        <Nav.Link href="#myrides">My Rides</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Button variant="light" className="rounded-pill">
          <Plus size={40} onClick={() => alert("not implemented!")}></Plus>
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
