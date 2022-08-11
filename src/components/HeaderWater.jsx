import React from "react";

const HeaderWater = ({ totalWater }) => {
  return (
    <header>
      <div className="totalwater">
        <h2 style={{ marginRight: "30px" }}>Total Intake</h2>
        <h1>{totalWater} ml</h1>
      </div>
    </header>
  );
};

export default HeaderWater;
