import * as React from "react";
import { Box, Typography } from "@mui/material";

const Capacitor = () => {
  return (
    <Box
      component="div"
      sx={{ p: 2, display: "block", border: "1px solid gray" }}
    >
      <Typography align="center" variant="h2">
        Capacitor
      </Typography>
      <Typography>
        # t_list: list of decimal time stamps in unit of days (e.g.
        71.85893518518519 day), same length as v_list # v_list: list of voltage
        values from SFMC # C_h: capacitance of the capacitor being filled up by
        harvester v_list coming from tasks
      </Typography>
    </Box>
  );
};

export default Capacitor;
