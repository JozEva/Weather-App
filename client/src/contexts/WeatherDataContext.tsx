import { createContext, useContext, useState, useEffect } from "react";
import { getWeather } from "../api/weatherApi";

const WeatherDataContext = createContext();

export function useWeather() {
  return useContext(WeatherDataContext);
}

export function WeatherDataProvider({ children }: any) {
  const [weatherData, setWeatherData] = useState(null);
  const [searchValue, setSearchValue] = useState("Kaunas"); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWeather(searchValue);
        setWeatherData(data);
      } catch (error) {
        console.error("Fetch error", error);
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [searchValue]);

  const value = {
    weatherData,
    setSearchValue,
  };

  return (
    <WeatherDataContext.Provider value={value}>
      {children}
    </WeatherDataContext.Provider>
  );
}
