import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { RideList } from "./components/RideList";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<RideList />}></Route>
      <Route path="/myrides"></Route>
      <Route path="/add"></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
