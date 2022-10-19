import "./RideList.css";

import Form from "react-bootstrap/Form";
import FuzzySearch from "fuzzy-search";
import InputGroup from "react-bootstrap/InputGroup";
import { Ride } from "./Ride";
import { RideInfo } from "./RideInfo";
import { Search } from "react-bootstrap-icons";
import { useDbData } from "../utilities/firebase";
import { useState } from "react";

export const RideList = () => {
  const [show, setShow] = useState(false);
  const [selectedRide, setSelectedRide] = useState();
  const [searchstr, setSearch] = useState("");

  const [rides, error] = useDbData("/rides");

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (rides === undefined) return <h1>Loading data...</h1>;
  if (!rides) return <h1>No data found</h1>;

  const handleClose = () => setShow(false);
  const handleShow = (ride) => {
    setShow(true);
    setSelectedRide(ride);
  };

  const ridesValues =
    rides == null ? [] : Object.entries(rides).map(([k, v]) => v);

  const searcher = new FuzzySearch(
    ridesValues,
    [
      "destination.city",
      "destination.state",
      "destination.street_address",
      "destination.zip",
    ],
    {
      caseSensitive: false,
    }
  );

  const filteredRides = () => {
    console.log(Object.entries(rides));
    console.log(searcher.search(searchstr));
    return searchstr == "" ? rides : searcher.search(searchstr);
  };

  return (
    <div>
      <div className="SearchBar">
        <InputGroup className="mb-0">
          <InputGroup.Text id="basic-addon1">
            <Search size={30} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search Destination"
            onChange={(change) => setSearch(change.target.value)}
          />
        </InputGroup>
      </div>
      <div className="mt-2">
        {Object.entries(filteredRides()).map(([id, ride]) => (
          <Ride key={id} ride={ride} handleShow={handleShow} />
        ))}
      </div>
      <RideInfo show={show} onHide={handleClose} ride={selectedRide} />
    </div>
  );
};
