import "./App.css";
import { getWeather } from "./api/weatherApi";
import WeatherPage from "./pages/WeatherPage/WeatherPage";

function App() {
  getWeather("Kaunas");

  return (
    <>
      <WeatherPage />
    </>
  );
}

export default App;
