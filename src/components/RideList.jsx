import { Ride } from "./Ride";
import { RideInfo } from "./RideInfo";
import rides_json from "../../data/rides.json";
import { useState } from "react";

export const RideList = () => {
  const rides = rides_json["rides"];

  const [show, setShow] = useState(false);
  const [selectedRide, setSelectedRide] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (ride) => {
    console.log("clicked");
    setShow(true);
    setSelectedRide(ride);
  };

  return (
    <div>
      <div className="p-3">
        {rides.map((ride) => (
          <Ride key={ride.id} ride={ride} handleShow={handleShow} />
        ))}
      </div>
      <RideInfo show={show} onHide={handleClose} ride={selectedRide} />
    </div>
  );
};
