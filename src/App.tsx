import * as React from "react";
import { useState } from "react";
import Harvester from "./components/Harvester.tsx";
import Capacitor from "./components/Capacitor.tsx";
import Tasks from "./components/Tasks.tsx";
import Graph from "./components/Graph.tsx";
import { Grid, Button } from "@mui/material";

export default function App() {
  const [visualizerData, setVisualizerData] = useState({
    watts: 0,
    harvesterType: "solar_panel",
    environment: "indoor",
  });

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Harvester
            visualizerData={visualizerData}
            setVisualizerData={setVisualizerData}
          />
        </Grid>
        <Grid item xs={4}>
          <Capacitor />
        </Grid>
        <Grid item xs={4}>
          <Tasks />
        </Grid>
      </Grid>
      <Graph graphData={visualizerData} />
    </>
  );
}
