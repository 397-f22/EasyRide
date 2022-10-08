import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./components/Header";
import { RideList } from "./components/RideList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <RideList />
    </div>
  );
};

export default App;
