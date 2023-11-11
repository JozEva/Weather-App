import { makeStyles } from "tss-react/mui";

export const useWeatherPageStyles = makeStyles()(() => ({
  headerText: {
    display: "flex",
    flexDirection: "column",
    fontSize: "40px",
    fontWeight: "bold",
  },
  subText: {
    fontSize: "16px",
    color: "#959698",
  },
  celsius: {
    fontSize: "64px",
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
  },
}));
