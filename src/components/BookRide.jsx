import { ReplaceRidePassengers, ReplaceUserRides } from "../utilities/firebase";

export const BookRide = (user, ride) => {
  console.log("BookRide");
  console.log(ride);
  console.log(user);
  if (!user.rides) {
    ReplaceUserRides(user.uid, [ride.key]);
  } else {
    ReplaceUserRides(user.uid, [...user.rides, ride.key]);
  }
  ReplaceRidePassengers(ride.key, [...ride.passengers, user.uid]);
};
