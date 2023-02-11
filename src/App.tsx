import * as React from "react";
import { JacdacProvider } from "react-jacdac";
import { bus } from "./bus.ts";
import Connect from "./Connect.tsx";
import Demo from "./Demo.tsx";
import Graph from "./Graph.tsx";

export default function App() {
  return (
    // wrap your application with the jacdac provider

    // TODO: Add in JacDac provider
    // <JacdacProvider initialBus={bus}>
    //   <Connect />
    <>
      <Demo />
      <Graph />
    </>
    // </JacdacProvider>
  );
}
