import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { InputForm } from "../../components/InputForm/InputForm";
import { useWeatherPageStyles } from "./styles";
import { TodaysForecastCard } from "../../components/TodaysForecastCard/TodaysForecastCard";
import { useWeather } from "../../contexts/WeatherDataContext";
import { AirConditions } from "../../components/AirConditions/AirConditions";

const WeatherPage = () => {
  const { classes } = useWeatherPageStyles();
  const [inputLocation, setInputLocation] = useState<string>("");

  const { weatherData, setSearchValue } = useWeather();

  const handleSearchCities = async (e: any) => {
    e.preventDefault();
    setSearchValue(!inputLocation ? "Kaunas" : inputLocation);
  };

  return (
    <Box sx={{ width: "100%", userSelect: 'none' }}>
      <Box>
        <form onSubmit={handleSearchCities}>
          <InputForm
            value={inputLocation}
            onChangeHandler={(e) => setInputLocation(e.target.value)}
            submitForm={() => handleSearchCities}
          />
        </form>
        <Box
          sx={{
            display: "flex",
            padding: "50px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Typography className={classes.headerText} variant="h3">
              {weatherData?.location?.name}
            </Typography>
            <Typography className={classes.subText}>
              Current weather condition:{" "}
              <b>{weatherData?.current?.condition?.text}</b>
            </Typography>
            <Typography className={classes.subText}>
              Local time: <b>{weatherData?.location.localtime.substring(11, 16)}</b>
            </Typography>
            <Typography variant="h1" className={classes.celsius}>
              {weatherData?.current?.temp_c}°
            </Typography>
          </Box>
          <Box
            sx={{ width: "250px" }}
            component="img"
            src={weatherData?.current?.condition?.icon}
          />
        </Box>
      </Box>
      <TodaysForecastCard />
      <br />
      <AirConditions />
    </Box>
  );
};

export default WeatherPage;
