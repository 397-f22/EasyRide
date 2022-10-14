import { Navigate } from "react-router-dom";
import { useAuthState } from "../utilities/firebase";

const Landing = () => {
  const [user] = useAuthState();

  return user ? (
    <Navigate to="/allRides" />
  ) : (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

export default Landing;
