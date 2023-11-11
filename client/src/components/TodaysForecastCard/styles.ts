import { makeStyles } from "tss-react/mui";

export const useTodaysForecastStyles = makeStyles()(() => ({
  container: {
    borderRadius: "20px",
    backgroundColor: "#EAECEF",
    padding: "24px",
    userSelect: "none",
  },
  hour: {
    color: "#9399a2ff",
    fontWeight: "bold",
    textAlign: "center",
  },
  temperature: {
    fontSize: "32px",
    fontFamily: "fantasy",
    textAlign: "center",
  },
}));
