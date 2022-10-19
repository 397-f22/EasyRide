import "./Ride.css";

import Card from "react-bootstrap/Card";
import pikachu from "../../data/pikachu.png";

export const Ride = ({ ride, handleShow }) => {
  const date = new Date(ride.date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  console.log(ride.passengers);

  return (
    <Card onClick={() => handleShow(ride)} className="m-3">
      <div className="row">
        <div className="profilePicDiv">
          <img src={pikachu} className="profilePic" />
        </div>
        <div className="cardBodyDiv">
          <Card.Body>
            <Card.Title>{ride.destination.street_address}</Card.Title>
            <Card.Text>Pickup: {ride.pickup.street_address}</Card.Text>
            <Card.Text>{date}</Card.Text>
            <div>
              <p className="alignleft">
                ${(ride.total_cost / (ride.passengers.length + 1)).toFixed(2)}
                /person
              </p>
              <p className="alignright">
                {ride.total_seats - ride.passengers.length} available
              </p>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
