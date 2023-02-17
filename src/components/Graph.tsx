import * as React from "react";
import { Box } from "@mui/material";
import {
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";
const Graph = ({ graphData }) => {
  console.log(graphData);

  function createData(name, watts, environment) {
    let scalar = 1;
    switch (environment) {
      case "indoor":
        scalar = 0.3;
        break;
      case "outdoor_c":
        scalar = 0.5;
        break;
      case "outdoor_s":
        scalar = 0.8;
        break;
    }
    const energyharvested = watts * scalar;
    const energyconsumed = 1 * name;
    return {
      name: name,
      energyharvested: energyharvested,
      energyconsumed: energyconsumed,
    };
  }

  let data = [];

  for (let i = 0; i < 10; i++) {
    data.push(createData(i, graphData.watts, graphData.environment));
  }

  console.log(data);
  return (
    <Box sx={{ display: "block", margin: "auto" }}>
      <LineChart width={1000} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, graphData.watts * 2]} />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="energyharvested"
          stroke="#ff7300"
          yAxisId={0}
        />
        {/* <Line
          type="monotone"
          dataKey="energyconsumed"
          stroke="#387908"
          yAxisId={1}
        /> */}
      </LineChart>
    </Box>
  );
};

export default Graph;
