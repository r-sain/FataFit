import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import HeaderWater from "./HeaderWater";
import WaterForm from "./WaterForm";
import WaterList from "./WaterList";
import "./addwater.css";
import waterpic from "../images/waterpic.png";
import WaterContextProvider from "../contextapi/WaterContext";
import { WaterContext } from "../contextapi/WaterContext";

const AddWater = () => {
  // const [water, setWater] = useState([]);
  // const [totalWater, setTotalWater] = useState(0);

  // useEffect(() => {
  //   let temp = 0;
  //   for (let i = 0; i < water.length; i++) {
  //     temp += parseInt(water[i].intake);
  //   }
  //   setTotalWater(temp);
  // }, [water]);

  const { water, totalWater, setWater } = useContext(WaterContext);

  return (
    // <WaterContextProvider>
    <div className="waterintake">
      <div className="waterhead">
        <HeaderWater totalWater={totalWater} />
        <img
          src={waterpic}
          alt="watebottle"
          style={{
            maxWidth: "300px",
            paddingLeft: "10px",
          }}
        />
        <WaterForm water={water} setWater={setWater} />
        <br></br>

        <WaterList water={water} setWater={setWater} />
      </div>
    </div>
    // </WaterContextProvider>
  );
};

export default AddWater;
