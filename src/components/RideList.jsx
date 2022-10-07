import { Ride } from "./ride";
import rides_json from "../../data/rides.json";

export const RideList = () => {
    const rides = rides_json["rides"];
    return (
        <div className="p-3">
            {rides.map((ride) => (
                <Ride key={ride.id} ride={ride} />
            ))}
        </div>
    );
};
