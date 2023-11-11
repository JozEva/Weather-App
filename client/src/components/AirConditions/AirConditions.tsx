import { Box, Typography } from "@mui/material";
import { CardTitle } from "../CardTitle/CardTitle";
import { useAirConditionsStyles } from "./styles";
import { useWeather } from "../../contexts/WeatherDataContext";

export const AirConditions = () => {
  const { classes } = useAirConditionsStyles();

  const { weatherData } = useWeather();

  console.log(weatherData);

  const firstDay = weatherData?.forecast.forecastday[0];

  return (
    <Box className={classes.container}>
      <CardTitle title="Air codnitions" />
      <Box>
        <Box
          sx={{
            display: "flex",
            padding: "24px 16px 0 16px",
            gap: "12px",
          }}
        >
          <Box>
            <Typography>Real Feel</Typography>
            <Typography>{weatherData.current.feelslike_c}°</Typography>
          </Box>
          <Box>
            <Typography>Wind</Typography>
            <Typography>{weatherData.current.wind_kph} km/h</Typography>
          </Box>
          <Box>
            <Typography>UV Index</Typography>
            <Typography>{weatherData.current.uv}</Typography>
          </Box>
          <Box>
            <Typography>Chance of rain</Typography>
            <Typography>{firstDay.day.daily_chance_of_rain}%</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
