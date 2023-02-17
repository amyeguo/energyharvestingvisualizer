import * as React from "react";

const Demo = () => {
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
    </div>
  );
};

export default Demo;
