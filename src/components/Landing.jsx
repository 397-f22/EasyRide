import "./Landing.css";

import { signInWithGoogle, useAuthState } from "../utilities/firebase";

import { Button } from "react-bootstrap";
import { CarFrontFill } from "react-bootstrap-icons";
import { Navigate } from "react-router-dom";

const LandingLogIn = () => {
  return (
    <Button variant="light" size="lg" onClick={signInWithGoogle}>
      Sign In
    </Button>
  );
};

const Landing = () => {
  const [user] = useAuthState();

  return user ? (
    <Navigate to="/allRides" />
  ) : (
    <div className="landing">
      <CarFrontFill size={100} />
      <div className="logo">
        <div className="logo-black">Easy</div>
        <div>Ride</div>
      </div>
      <div className="subheading">Spend less on your rideshare</div>
      <p className="description">
        EasyRide lets you efficiently split your rideshare with other students
        from your university to save money and the environment.
      </p>
      <LandingLogIn />
    </div>
  );
};

export default Landing;
