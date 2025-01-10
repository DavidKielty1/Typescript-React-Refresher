import { flightData } from "./mockData";

export const findCheapestFlight = (
  flightData: any,
  from: string,
  to: string
) => {
  console.log(flightData, from, to);
  //   flightData.filter((route) => from === "JFK" && to === "LAX");
  //   console.log(flightData);
};

findCheapestFlight(flightData, "JFK", "LAX");
