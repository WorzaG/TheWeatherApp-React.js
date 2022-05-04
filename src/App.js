import "./App.css";
// COMPONENTS
import { Weather } from "./components/Weather";

function App() {
  return (
    <div className="App">
      <header className="header">Hava durumu</header>
      <Weather />
    </div>
  );
}

export default App;
