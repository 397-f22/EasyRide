import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddRide } from "./components/AddRide";
import { Header } from "./components/Header";
import { RideList } from "./components/RideList";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<RideList />}></Route>
      <Route path="/myrides"></Route>
      <Route path="/add" element={<AddRide />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
