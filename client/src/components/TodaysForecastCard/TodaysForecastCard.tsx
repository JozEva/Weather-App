import { Box, Divider, Typography } from "@mui/material";
import { useTodaysForecastStyles } from "./styles";
import { useWeather } from "../../contexts/WeatherDataContext";
import { CardTitle } from "../CardTitle/CardTitle";

export const TodaysForecastCard = () => {
  const { classes } = useTodaysForecastStyles();

  const { weatherData } = useWeather();

  const firstDay = weatherData?.forecast.forecastday[0];
  console.log(firstDay);

  return (
    <Box className={classes.container}>
      <CardTitle title="Today's forecast"/>

      {firstDay ? (
        <Box
          sx={{
            display: "flex",
            padding: "24px 16px 0 16px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography className={classes.hour}>
              {firstDay.hour[6].time.substring(11, 16)} AM
            </Typography>
            <Box
              sx={{ width: "70px" }}
              component="img"
              src={firstDay.hour[6].condition.icon}
            />
            <Typography className={classes.temperature}>
              {Math.trunc(firstDay.hour[6].temp_c)}°
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Typography className={classes.hour}>
              {firstDay.hour[9].time.substring(11, 16)} AM
            </Typography>
            <Box
              sx={{ width: "70px" }}
              component="img"
              src={firstDay.hour[9].condition.icon}
            />
            <Typography className={classes.temperature}>
              {Math.trunc(firstDay.hour[9].temp_c)}°
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />

          <Box>
            <Typography className={classes.hour}>
              {firstDay.hour[12].time.substring(11, 16)} PM
            </Typography>
            <Box
              sx={{ width: "70px" }}
              component="img"
              src={firstDay.hour[12].condition.icon}
            />
            <Typography className={classes.temperature}>
              {Math.trunc(firstDay.hour[12].temp_c)}°
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />

          <Box>
            <Typography className={classes.hour}>
              {firstDay.hour[15].time.substring(11, 16)} PM
            </Typography>
            <Box
              sx={{ width: "70px" }}
              component="img"
              src={firstDay.hour[15].condition.icon}
            />
            <Typography className={classes.temperature}>
              {Math.trunc(firstDay.hour[15].temp_c)}°
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />

          <Box>
            <Typography className={classes.hour}>
              {firstDay.hour[18].time.substring(11, 16)} PM
            </Typography>
            <Box
              sx={{ width: "70px" }}
              component="img"
              src={firstDay.hour[18].condition.icon}
            />
            <Typography className={classes.temperature}>
              {Math.trunc(firstDay.hour[18].temp_c)}°
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />

          <Box>
            <Typography className={classes.hour}>
              {firstDay.hour[21].time.substring(11, 16)} PM
            </Typography>
            <Box
              sx={{ width: "70px" }}
              component="img"
              src={firstDay.hour[21].condition.icon}
            />
            <Typography className={classes.temperature}>
              {Math.trunc(firstDay.hour[21].temp_c)}°
            </Typography>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
