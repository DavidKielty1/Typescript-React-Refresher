import { FlightData } from "utils/flightData";

interface FlightListProps {
  flightInfo: FlightData[];
}

export const FlightList: React.FC<FlightListProps> = (data) => {
  //   console.log(flightInfo);
  console.log(data.flightInfo);
  const flightInfo = data.flightInfo;
  //   console.log(flightInfo);
  return (
    <div>
      {flightInfo &&
        flightInfo?.length > 0 &&
        flightInfo.map((flight, flightIdx) => (
          <div key={flightIdx}>
            <p>
              {flight.route.from} to {flight.route.to}
            </p>
            {flight.flights &&
              flight.flights.map((flight, flightIdx) => (
                <div key={flightIdx}>
                  <ul>
                    <li>Airline: {flight.airline}</li>
                    <li>Duration: {flight.duration}</li>
                    <li>Price: {flight.price}</li>
                    {flight.stops.length > 0 && <li>Stops: {flight.stops}</li>}
                  </ul>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};
