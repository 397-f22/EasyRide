import { Ride } from "./Ride";
import { RideInfo } from "./RideInfo";
import { useState } from "react";
import { useDbData } from "../utilities/firebase";

export const RideList = () => {
  const [show, setShow] = useState(false);
  const [selectedRide, setSelectedRide] = useState();

  const [rides, error] = useDbData("/");

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (rides === undefined) return <h1>Loading data...</h1>;
  if (!rides) return <h1>No data found</h1>;

  const handleClose = () => setShow(false);
  const handleShow = (ride) => {
    console.log("clicked");
    setShow(true);
    setSelectedRide(ride);
  };

  return (
    <div>
      <div className="p-3">
        {Object.entries(rides["rides"]).map(([id, ride]) => (
          <Ride key={id} ride={ride} handleShow={handleShow} />
        ))}
      </div>
      <RideInfo show={show} onHide={handleClose} ride={selectedRide} />
    </div>
  );
};
