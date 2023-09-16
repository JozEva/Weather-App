import { useWeatherData } from "../../api/queryHook";

const WeatherPage = () => {
  const { data } = useWeatherData("Kaunas");

  console.log(data);
  return <div>WeatherPage</div>;
};

export default WeatherPage;
