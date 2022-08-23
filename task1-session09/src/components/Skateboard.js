import React from "react";
import Wheel from "./Wheel";

const Skateboard = (props) => {
  let wheels = []
  for (let i = 0; i < props.numberOfWheels; i++) {
    wheels.push(<Wheel />);
  }
  return (
    <>
      <h2>Hey, I am a skateboard and I have {props.numberOfWheels} wheels!</h2>
      {wheels}
    </>
  );
};

export default Skateboard;
