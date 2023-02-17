import * as React from "react";
import { Box, Typography } from "@mui/material";
const Tasks = () => {
  return (
    <Box
      component="div"
      sx={{ p: 2, display: "block", border: "1px solid gray" }}
    >
      <Typography align="center" variant="h2">
        Tasks
      </Typography>
      <form>Every 5s do this</form>
    </Box>
  );
};

export default Tasks;
