import React from "react";
import { Link } from "react-router-dom";

function Nutrition() {
  return (
    <div>
      <div
        className="exercise"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#3c8747", fontSize: "80px" }}>
          Page under construction
        </h1>
        <h3 style={{ color: "#4d5a78", fontSize: "40px" }}>
          Please Do Some Brisk Walking and Warm Up while we are putting this
          page up
        </h3>
        <Link to="/water">
          <button
            style={{
              backgroundColor: "#40a97d",
              color: "white",
              fontSize: "25px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Track your Water Intake
          </button>
        </Link>
        <div class="walking">
          <div class="head"></div>
          <div class="body"></div>
          <div class="firstLeg"></div>
          <div class="secondLeg"></div>
          <div class="shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
