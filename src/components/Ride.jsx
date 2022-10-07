import Card from "react-bootstrap/Card";

export const Ride = ({ ride }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{ride.destination.street_address}</Card.Title>
                <Card.Text>{ride.destination}</Card.Text>
            </Card.Body>
        </Card>
    );
};
