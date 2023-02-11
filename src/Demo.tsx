import * as React from "react";
import {
  SRV_DC_VOLTAGE_MEASUREMENT,
  DcVoltageMeasurementReg,
  SRV_DC_CURRENT_MEASUREMENT,
  DcCurrentMeasurementReg,
} from "jacdac-ts";
import { useServices, useRegister, useRegisterValue } from "react-jacdac";

const Demo = () => {
  const currentMeasurementService = useServices({
    serviceClass: SRV_DC_CURRENT_MEASUREMENT,
  })[0];

  const voltageMeasurementService = useServices({
    serviceClass: SRV_DC_VOLTAGE_MEASUREMENT,
  })[0];

  const currentMeasurementRegister = useRegister(
    currentMeasurementService,
    DcCurrentMeasurementReg.Measurement
  );
  const voltageMeasurementRegister = useRegister(
    voltageMeasurementService,
    DcVoltageMeasurementReg.Measurement
  );
  // // read and decode the value
  const [currentMeasurement = 0] = useRegisterValue<[number]>(
    currentMeasurementRegister
  );

  const [voltageMeasurement = 0] = useRegisterValue<[number]>(
    voltageMeasurementRegister
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid gray",
          padding: "1em",
          width: "50%",
          height: "100%",
          display: "block",
        }}
      >
        <h2> Energy Harvester Design </h2>
        <h3 style={{ textDecoration: "underline" }}> Harvester </h3>
        <h4>Harvester Type:</h4>
        <select id="harvester-type" name="harvester-type">
          <option value="Solar Panel">Solar Panel</option>
          <option value="DC Motor">DC Motor</option>
        </select>
        <input style={{ width: "20%" }} />
        <em style={{ fontStyle: "normal" }}> V</em>
        <br></br>
        <input style={{ width: "20%" }} />
        <em style={{ fontStyle: "normal" }}> mA</em>
        <h3 style={{ textDecoration: "underline" }}> Environment </h3>
        <input type="checkbox" />
        Indoor
        <input type="checkbox" />
        Outdoor
        <br></br>
        {/* <h3 style={{ textDecoration: "underline" }}> Task </h3> */}
      </div>
      <br />
      <div
        style={{
          width: "40%",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            padding: "1em",
          }}
        >
          <h3> Consumed Energy </h3>
          <div>DC Current Measurement: {currentMeasurement?.toFixed(5)}A </div>
          <div>DC Voltage Measurement: {voltageMeasurement?.toFixed(3)}V </div>
          <div style={{ fontWeight: "bold" }}>
            Power Consumed:{" "}
            {(voltageMeasurement * currentMeasurement)?.toFixed(3)}W{" "}
          </div>
        </div>
        <br />
        <div
          style={{
            border: "1px solid gray",
            padding: "1em",
          }}
        >
          <h3> Harvested Energy </h3>

          <div style={{ fontWeight: "bold" }}>Estimated Power Harvested: </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
