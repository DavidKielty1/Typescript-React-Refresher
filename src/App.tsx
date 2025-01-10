import "./styles/App.css";
import { RandomPerson } from "./components/RandomPerson";
// import { FlightList } from "./components/FlightList";
// import { flightData } from "./utils/flightData";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Query</h1>
      </header>
      <main>
        {/* <FlightList flightInfo={flightData} /> */}
        <RandomPerson />
      </main>
    </div>
  );
};

export default App;
