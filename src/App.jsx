import { Ride } from './components/ride';
import 'bootstrap/dist/css/bootstrap.min.css';

const rides = [{
  destination: {street_address: "1000 West O'hare Avenue",
                city: "Chicago",
                state: "IL",
                zip: "60666"},
  pickup: {street_address: "2145 Sheridan Road",
          city: "Evanston",
          state: "IL",
          zip: "60201"},
  date: Math.floor(new Date(2022, 9, 7, 12, 0, 0).getTime() / 1000),
  total_cost: 43.27,
  total_seats: 4,
  organizer: "Chris Riesbeck",
  passengers: ["Gavin"]
}];

const App = () => {
  return (
    <div className="App">
      <header>EasyRide</header>
      <Ride ride={rides[0]} />
    </div>
  );
};

export default App;
