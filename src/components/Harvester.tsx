import * as React from "react";
import { useState } from "react";
import {
  Typography,
  Box,
  InputLabel,
  OutlinedInput,
  Button,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";

const Harvester = ({ visualizerData, setVisualizerData }) => {
  const [harvester, setHarvester] = useState("solar_panel");

  const [formValues, setFormValues] = useState(visualizerData);

  const handleHarvesterChange = (e) => {
    setHarvester(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisualizerData(formValues);
  };

  const renderHarvester = (harvesterType) => {
    switch (harvesterType) {
      case "solar_panel":
        return (
          <>
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">Watts</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              value={formValues.watts}
              name="watts"
              onChange={handleInputChange}
              inputProps={{
                "aria-label": "watts",
              }}
            />

            <Typography variant="h5" sx={{ mt: 2 }}>
              Environment
            </Typography>

            <Select
              id="environment-select"
              name="environment"
              value={formValues.environment}
              onChange={handleInputChange}
            >
              <MenuItem value={"indoor"}>Indoor</MenuItem>
              <MenuItem value={"outdoor_c"}>Outdoor (cloudy)</MenuItem>
              <MenuItem value={"outdoor_s"}>Outdoor (sunny)</MenuItem>
            </Select>
            <br />
            <br />
            <Button variant="contained" type="submit">
              Save
            </Button>
          </>
        );
      case "dc_motor":
        return <Typography>Dc Motor</Typography>;
    }
  };
  return (
    <Box
      component="div"
      sx={{ p: 2, display: "block", border: "1px solid gray", height: "400px" }}
    >
      <Typography align="center" variant="h2" sx={{ mb: 2 }}>
        Harvester
      </Typography>

      <InputLabel id="demo-simple-select-label">Energy Harvester</InputLabel>

      <form sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="harvesterType"
          value={formValues.harvesterType}
          label="Harvester"
          onChange={handleHarvesterChange}
        >
          <MenuItem value={"solar_panel"}>Solar Panel</MenuItem>
          <MenuItem value={"dc_motor"}>DC Motor</MenuItem>
        </Select>

        <Box sx={{ mt: 2 }}>{renderHarvester(harvester)}</Box>
      </form>
    </Box>
  );
};

export default Harvester;
