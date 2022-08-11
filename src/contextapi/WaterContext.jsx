import React, { useState, createContext, useEffect } from "react";

export const WaterContext = createContext();

const getLocalWater = () => {
  let list = localStorage.getItem("waterList");
  if (list) {
    return JSON.parse(localStorage.getItem("waterList"));
  } else {
    return [];
  }
};

function WaterContextProvider(props) {
  const [water, setWater] = useState(getLocalWater());
  const [totalWater, setTotalWater] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < water.length; i++) {
      temp += parseInt(water[i].intake);
    }
    setTotalWater(temp);
    console.log(water);
  }, [water]);

  useEffect(() => {
    localStorage.setItem("waterList", JSON.stringify(water));
  }, [water]);

  const value = { water, totalWater, setWater, setTotalWater };
  return (
    <WaterContext.Provider value={value}>
      {props.children}
    </WaterContext.Provider>
  );
}

export default WaterContextProvider;
