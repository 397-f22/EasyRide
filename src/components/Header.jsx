import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => (
    <Navbar bg="dark" variant="dark">
        <Container className="mx-2">
            <Navbar.Brand href="#home">Easy Ride</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">All Rides</Nav.Link>
                <Nav.Link href="#features">My Rides</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);
