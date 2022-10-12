import "./Header.css";

import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle className="mx-2" />
        <Link className="plain-link text-white" to="/">
          <h1 className="m-0">Easy Ride</h1>
        </Link>
        <Navbar.Offcanvas className="flex-grow-1 pe-3" placement="top">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <h1>
              <Link className="plain-link " to="/">
                All Rides
              </Link>
              <Link className="plain-link" to="/myrides">
                My Rides
              </Link>
            </h1>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Button variant="light" className="rounded-pill">
          <Link to="/add" className="plain-link">
            <Plus size={40}></Plus>
          </Link>
        </Button>
      </Container>
    </Navbar>
  );
};
