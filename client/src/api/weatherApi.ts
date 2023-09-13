import axios from "axios";

export const getWeather = async (inputLocation: string) => {
  const res = await axios.get(
    `http://localhost:3001/getWeather?location=${inputLocation}`
  );

  return res.data;
};
