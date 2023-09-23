import { Box } from "@mui/material";

import { useSideNavigationStyles } from "./styles";

export const SideNavigation = () => {
  const { classes } = useSideNavigationStyles();

  return (
    <Box className={classes.navigationBox}>
    </Box>
  );
};
