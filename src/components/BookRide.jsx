import { ReplaceRidePassengers, ReplaceUserRides } from "../utilities/firebase";

export const BookRide = (user, ride) => {
  console.log("BookRide");
  console.log(ride);
  console.log(user);
  if (
    !ride.passengers.includes(user.uid) &&
    ride.total_seats - ride.passengers.length > 0
  ) {
    if (!user.rides) {
      ReplaceUserRides(user.uid, [ride.key]);
    } else {
      ReplaceUserRides(user.uid, [...user.rides, ride.key]);
    }
    ReplaceRidePassengers(ride.key, [...ride.passengers, user.uid]);
    alert("Booked ride!");
  } else {
    alert("Can't book a ride you already booked or with no seats available!");
  }
};
