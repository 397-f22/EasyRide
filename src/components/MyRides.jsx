import { Ride } from "./Ride";
import { RideInfo } from "./RideInfo";
import { useState } from "react";


export const MyRides = ({ rides, user, users}) => {
  const [show, setShow] = useState(false);
  const [selectedRide, setSelectedRide] = useState();

  if ("rides" in user) {
    const userRidesValues = rides == null ? [] : Object.entries(user.rides).map(([k, v]) => v);
    var userRides = userRidesValues.map(x => rides[x]) 
  } else {
    return <div style={{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center"}}><h1>No rides booked yet.</h1></div>;
  }

  const handleClose = () => setShow(false);
  const handleShow = (ride) => {
    setShow(true);
    setSelectedRide(ride);
  };

  return (
    <div>
      <div className="mt-2">
        {Object.entries(userRides).map(([id, ride]) => (
          <Ride key={id} ride={ride} handleShow={handleShow} />
        ))}
      </div>
      <RideInfo
        show={show}
        onHide={handleClose}
        ride={selectedRide}
        user={user}
        users={users}
      />
    </div>
  );
};
