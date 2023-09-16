import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./weatherApi";

export const useWeatherData = (location: string) => {
  const { data, status } = useQuery(
    ["weather-data", { location }],
    () => getWeather(location),
    { keepPreviousData: true }
  );

  return { data, status };
};
