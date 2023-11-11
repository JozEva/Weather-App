import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

export const CardTitle = ({ title }: TitleProps) => {
  return (
    <Typography
      sx={{ fontSize: "14px", color: "#9399a2ff", fontWeight: "bold" }}
    >
      {title.toUpperCase()}
    </Typography>
  );
};
