import { Box, TextField, Button } from "@mui/material";
import { useInputFormStyles } from "./styles";
import { ChangeEvent } from "react";

type InputFieldProps = {
  value: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
};

export const InputForm = ({
  value,
  onChangeHandler,
  submitForm,
}: InputFieldProps) => {
  const { classes } = useInputFormStyles();
  return (
    <Box className={classes.formContainer}>
      <TextField
        className={classes.inputField}
        fullWidth
        value={value}
        onChange={onChangeHandler}
        placeholder="Search for cities"
        autoComplete="off"
      />
      <Button type="submit" onClick={() => submitForm()}>
        Search
      </Button>
    </Box>
  );
};
