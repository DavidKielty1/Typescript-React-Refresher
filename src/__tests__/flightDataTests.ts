import { findCheapestFlight } from "../controller/flight-data";
import { flightData } from "../controller/mockData";

describe("findCheapestFlight", () => {
  it("should return the cheapest flight from JFK to LAX", () => {
    const result = findCheapestFlight(flightData, "JFK", "LAX");
    expect(result).toEqual({
      route: { from: "JFK", to: "LAX" },
      airline: "Delta",
      price: 300,
      departureTime: "08:00 AM",
      arrivalTime: "02:00 AM",
    });
  });
});
