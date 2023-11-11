import { makeStyles } from "tss-react/mui";

export const useInputFormStyles = makeStyles()(() => ({
  inputField: {
    borderRadius: "20px",
    backgroundColor: "#EAECEF",

    "& .MuiInputBase-root": {
      height: "45px",
    },
    fieldset: {
      border: 0,
    },
  },
  formContainer: {
    display: "flex",
  },
}));
