import * as React from "react";
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";
const Graph = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     const socket = socketIOClient("http://127.0.0.1:4002/");
  //     socket.on("message", (data) => {
  //       setData(data);
  //     });
  //   }, []);
  const data = [
    {
      name: "1s",
      energyharvested: 4000,
      energyconsumed: 2400,
      amt: 2400,
    },
    {
      name: "2s",
      energyharvested: 3000,
      energyconsumed: 1398,
      amt: 2210,
    },
    {
      name: "3s",
      energyharvested: 2000,
      energyconsumed: 9800,
      amt: 2290,
    },
    {
      name: "4s",
      energyharvested: 2780,
      energyconsumed: 3908,
      amt: 2000,
    },
    {
      name: "5s",
      energyharvested: 1890,
      energyconsumed: 4800,
      amt: 2181,
    },
    {
      name: "6s",
      energyharvested: 2390,
      energyconsumed: 3800,
      amt: 2500,
    },
    {
      name: "8s",
      energyharvested: 3490,
      energyconsumed: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      {" "}
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="energyharvested"
          stroke="#ff7300"
          yAxisId={0}
        />
        <Line
          type="monotone"
          dataKey="energyconsumed"
          stroke="#387908"
          yAxisId={1}
        />
      </LineChart>
    </div>
  );
};

export default Graph;
