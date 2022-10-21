import "./Header.css";

import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";

import { Plus } from "react-bootstrap-icons";
import { getUser } from "./User";

const SignOutButton = () => (
  <Link className="btn btn-dark" onClick={signOutProcess} to="/">
    Sign out
  </Link>
);

const signOutProcess = () => {
  signOut();
};

const AuthButton = () => {
  getUser();
  const [user] = useAuthState();
  return <SignOutButton />;
};

const activation = ({ isActive }) => (isActive ? "active" : "inactive");

export const Header = ({ showAddRides }) => {
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
              <Link className="plain-link " to="/allRides">
                All Rides
              </Link>
              <Link className="plain-link" to="/myRides">
                My Rides
              </Link>
            </h1>
            <div className="d-flex justify-content-center">
              <AuthButton />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {showAddRides ? (
          <Button variant="light" className="rounded-pill">
            <Link to="/addRide" className="plain-link">
              <Plus size={30}></Plus>
            </Link>
          </Button>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};
