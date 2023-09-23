import { Box, Typography } from "@mui/material";
import { InputForm } from "../../components/InputForm/InputForm";
import { useEffect, useState } from "react";
import { getWeather } from "../../api/weatherApi";
import { useWeatherPageStyles } from "./styles";

const WeatherPage = () => {
  const { classes } = useWeatherPageStyles();
  const [searchValue, setSearchValue] = useState<string>("Kaunas");
  const [inputLocation, setInputLocation] = useState<string>("");
  const [data, setData] = useState<any>();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getWeather(searchValue);
        setData(weatherData);
      } catch (error) {
        console.error("Fetched error", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [searchValue]);

  const handleSearchCities = async (e: any) => {
    e.preventDefault();
    setSearchValue(!inputLocation ? "Kaunas" : inputLocation);
  };
  return (
    <Box sx={{ width: "100%" }}>
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
              {data?.location?.name}
            </Typography>
            <Typography className={classes.subText}>
              Current weather condition: <b>{data?.current?.condition?.text}</b>
            </Typography>
            <Typography className={classes.subText}>
              Local time: <b>{data?.location.localtime}</b>
            </Typography>
            <Typography variant="h1" className={classes.celsius}>
              {data?.current?.temp_c}°
            </Typography>
          </Box>
          <Box
            sx={{ width: "300px" }}
            component="img"
            src={data?.current?.condition?.icon}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherPage;
