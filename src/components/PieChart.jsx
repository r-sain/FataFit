import React, { useEffect, useContext, useState } from "react";
import Chart from "react-apexcharts";
import { WaterContext } from "../contextapi/WaterContext";

export default function PieChart() {
  const { totalWater } = useContext(WaterContext);
  const total = 5000 - totalWater;

  return (
    <div>
      <Chart
        type="pie"
        width={280}
        height={280}
        series={[total, totalWater]}
        options={{
          labels: ["Recommended", "Your Intake"],
        }}
      />
    </div>
  );
}
