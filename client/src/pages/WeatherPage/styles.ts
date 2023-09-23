import { makeStyles } from "tss-react/mui";

export const useWeatherPageStyles = makeStyles()(() => ({
  headerText: {
    fontSize: "3.5rem",
    fontWeight: "bold",
  },
  subText: {
    fontSize: "0.9rem",
    color: '#959698',
  },
  celsius: {
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
  },
  
}));
