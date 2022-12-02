import "./RideInfo.css";

import Button from "react-bootstrap/Button";
import  from "react-bootstrap/";
import { Body } from "react-bootstrap";
import { BookRide } from "./BookRide";

const BookRideButton = ({ ride, user }) => {
  if (ride.passengers.includes(user.uid)) {
    return "";
  } else {
    return (
      <Button
        variant="primary"
        onClick={() => {
          BookRide(user, ride);
        }}
      >
        Book ride
      </Button>
    );
  }
};

export const RideInfo = ({ show, onHide, ride, user, users, myrides }) => {
  if (ride != undefined) {
    const date = new Date(ride.date).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return (
      < show={show} onHide={onHide} className="" centered>
        <.Header closeButton>
          <.Title>{ride.destination.street_address}</.Title>
        </.Header>

        <.Body>
          <p>Pickup: {ride.pickup.street_address}</p>
          <p>{date}</p>
          <div>
            <p className="alignleft">
              ${(ride.total_cost / (ride.passengers.length + 1)).toFixed(2)}
              /person
            </p>
            <p className="alignright">
              {ride.total_seats - ride.passengers.length} available
            </p>
          </div>
        </.Body>
        <hr />
        <.Body>
          <p>
            Organizer:{" "}
            {myrides
              ? users[ride.passengers[0]].displayName +
                " (" +
                users[ride.passengers[0]].email +
                ")"
              : users[ride.passengers[0]].displayName}
          </p>
          <p>
            Passengers:{" "}
            {ride.passengers
              .slice(1, ride.passengers.length)
              .map((passenger) =>
                myrides
                  ? users[passenger].displayName +
                    " (" +
                    users[passenger].email +
                    ")"
                  : users[passenger].displayName
              )
              .join(", ")}
          </p>
        </.Body>

        <.Footer>
          <BookRideButton ride={ride} user={user} />
        </.Footer>
      </>
    );
  }
};
