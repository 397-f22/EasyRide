import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddRide } from "./components/AddRide";
import { Header } from "./components/Header";
import { RideList } from "./components/RideList";
import Landing from "./components/Landing";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header showAddRides={false} />
            <Landing />
          </div>
        }
      ></Route>
      <Route
        path="/allRides"
        element={
          <div>
            <Header showAddRides={true} />
            <RideList />
          </div>
        }
      ></Route>
      <Route
        path="/myRides"
        element={
          <div>
            <Header showAddRides={true} />
          </div>
        }
      ></Route>
      <Route
        path="/addRide"
        element={
          <div>
            <Header showAddRides={false} />
            <AddRide />
          </div>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
