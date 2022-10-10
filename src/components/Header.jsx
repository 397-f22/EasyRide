import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import { Plus } from "react-bootstrap-icons";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle className="mx-2" />
        <Navbar.Brand href="#home">
          <h1 className="m-0">Easy Ride</h1>
        </Navbar.Brand>
        <Navbar.Offcanvas className="flex-grow-1 pe-3" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h2>Easy Ride</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav.Link href="#home">All Rides</Nav.Link>
            <Nav.Link href="#features">My Rides</Nav.Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Button variant="light" className="rounded-pill">
          <Plus size={40} onClick={() => alert("not implemented!")}></Plus>
        </Button>
      </Container>
    </Navbar>
  );
};
