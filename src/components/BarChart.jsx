import React, { useEffect, useContext, useState } from "react";
import Chart from "react-apexcharts";
import { WaterContext } from "../contextapi/WaterContext";

function BarChart() {
  const { water, totalWater } = useContext(WaterContext);
  //   const waterArr = water[0];
  //   console.log(waterArr.intake);
  var ans = [];
  water.map((i) => ans.push(i.intake));
  console.log(ans);
  return (
    <div>
      <Chart
        type="bar"
        width={1100}
        height={260}
        series={[
          {
            name: "Water Intake in ml",
            data: ans,
          },
        ]}
        options={{}}
      ></Chart>
    </div>
  );
}

export default BarChart;
