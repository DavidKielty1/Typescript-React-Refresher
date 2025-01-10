interface Route {
  from: string;
  to: string;
}

interface Flight {
  airline: string;
  price: number;
  duration: string;
  stops: string[];
}

export interface FlightData {
  route: Route;
  flights: Flight[];
}

export const flightData = [
  {
    route: { from: "JFK", to: "LAX" },
    flights: [
      { airline: "Delta", price: 300, duration: "6h", stops: ["ORD"] },
      { airline: "American Airlines", price: 350, duration: "6.5h", stops: [] },
    ],
  },
  {
    route: { from: "JFK", to: "ORD" },
    flights: [
      { airline: "United", price: 150, duration: "2.5h", stops: [] },
      { airline: "Delta", price: 200, duration: "3h", stops: [] },
    ],
  },
  {
    route: { from: "LAX", to: "ORD" },
    flights: [
      { airline: "Southwest", price: 200, duration: "4h", stops: ["DEN"] },
      { airline: "Delta", price: 250, duration: "4.5h", stops: [] },
    ],
  },
  {
    route: { from: "JFK", to: "ORD" },
    flights: [
      { airline: "United", price: 150, duration: "2.5h", stops: [] },
      { airline: "Delta", price: 200, duration: "3h", stops: [] },
    ],
  },
  {
    route: { from: "LAX", to: "ORD" },
    flights: [
      { airline: "Southwest", price: 200, duration: "4h", stops: ["DEN"] },
      { airline: "Delta", price: 250, duration: "4.5h", stops: [] },
    ],
  },
];
