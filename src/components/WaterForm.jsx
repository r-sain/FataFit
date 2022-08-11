import React, { useRef } from "react";

const WaterForm = ({ water, setWater }) => {
  const desc = useRef(null);
  const intake = useRef(null);
  const date = useRef(null);

  const AddWater = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setWater([
      ...water,
      {
        intake: intake.current.value,
        desc: desc.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    intake.current.value = null;
    date.current.value = null;
  };

  return (
    <form className="waterform" onSubmit={AddWater}>
      <input
        type="number"
        name="intake"
        placeholder="How many ml did you drink?"
        required
        ref={intake}
      />
      <input
        type="text"
        name="desc"
        placeholder="How did you have it?"
        ref={desc}
      />
      <input type="date" name="date" placeholder="when was it?" ref={date} />

      <input
        type="submit"
        value="Add Water"
        style={{ backgroundColor: "#4EB4FF" }}
      />
    </form>
  );
};

export default WaterForm;
