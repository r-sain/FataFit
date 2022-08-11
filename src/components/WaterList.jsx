import React from "react";
import WaterItem from "./WaterItem";

const WaterList = ({ water, setWater }) => {
  const removeWater = (i) => {
    let temp = water.filter((v, index) => index != i);
    setWater(temp);
  };

  const sortByDate = (a, b) => {
    return a.date - b.date;
  };

  return (
    <div className="waterlist">
      {water.sort(sortByDate).map((value, index) => (
        <WaterItem
          key={index}
          water={value}
          index={index}
          removeWater={removeWater}
        />
      ))}
    </div>
  );
};

export default WaterList;
