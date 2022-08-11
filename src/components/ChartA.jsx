import React, { useEffect, useContext, useState } from "react";
import HeaderWater from "./HeaderWater";
import "./addwater.css";
import { WaterContext } from "../contextapi/WaterContext";

const ChartA = () => {
  const { totalWater } = useContext(WaterContext);

  return (
    <div className="waterintake">
      <div className="waterhead">
        <HeaderWater totalWater={totalWater} />
      </div>
    </div>
  );
};

export default ChartA;
