import React from "react";

function WaterItem({ water, index, removeWater }) {
  let date = new Date(water.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeWater(i);
  };
  return (
    <div className="wateritem">
      <button
        className="remove"
        onClick={() => removeHandle(index)}
        style={{ backgroundColor: "red", borderRadius: "10px", color: "white" }}
      >
        X
      </button>
      <div className="desc">{water.desc}</div>
      <div className="intake" style={{ fontSize: "20px", fontWeight: "800" }}>
        {water.intake} ml
      </div>
      {/* <div className="date">{day + "/" + month + "/" + year}</div> */}
    </div>
  );
}

export default WaterItem;
