import axios from "axios";

export const getWeather = async (inputLocation: string) => {

 const API_KEY = import.meta.env.VITE_API_KEY;

  const res = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${inputLocation}&days=7&aqi=yes&alerts=yes`
  );

  console.log(res.data);
  return res.data;
};
